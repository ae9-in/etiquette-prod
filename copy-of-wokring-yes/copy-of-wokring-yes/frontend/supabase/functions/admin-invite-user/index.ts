import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.43.4';

Deno.serve(async (req: Request) => {
  const origin = req.headers.get('origin') || '*';
  const corsHeaders = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  function json(status: number, body: unknown) {
    return new Response(JSON.stringify(body), { status, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    if (!supabaseUrl || !serviceRoleKey) {
      return json(500, { error: 'Missing server configuration' });
    }

    const client = createClient(supabaseUrl, serviceRoleKey);

    const payload = await req.json().catch(() => ({}));
    const email = String(payload.email || '').toLowerCase().trim();
    const name = String(payload.name || '').trim();
    const role = payload.role === 'platform_admin' ? 'platform_admin' : 'employee';
    const department = String(payload.department || '').trim();
    const assigned_courses = Array.isArray(payload.assigned_courses) ? payload.assigned_courses : [];

    if (!email || !email.includes('@')) {
      return json(400, { error: 'Invalid email' });
    }
    if (!name) {
      return json(400, { error: 'Name is required' });
    }

    const inviteRes = await client.auth.admin.inviteUserByEmail(email, {
      data: { name, role, department }
    });
    if (inviteRes.error) {
      return json(400, { error: inviteRes.error.message });
    }
    const user = inviteRes.data;

    // Optional: upsert profile row
    const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4`;
    const upsert = await client
      .from('profiles')
      .upsert(
        {
          id: user.id,
          email,
          name,
          role,
          department,
          avatar,
          progress: {},
          assigned_courses
        },
        { onConflict: 'id' }
      );
    if (upsert.error) {
      // Not fatal for invite; log but continue
      console.warn('profiles upsert error:', upsert.error.message);
    }

    return json(200, { invited: true, email });
  } catch (e) {
    return json(500, { error: e instanceof Error ? e.message : 'Internal error' });
  }
});
