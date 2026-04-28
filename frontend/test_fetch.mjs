
import fs from 'fs';

// Simple .env parser
const env = fs.readFileSync('.env.local', 'utf-8')
    .split('\n')
    .reduce((acc, line) => {
        const [key, val] = line.split('=');
        if (key && val) acc[key.trim()] = val.trim();
        return acc;
    }, {});

const URL = env.VITE_SUPABASE_URL;
const KEY = env.VITE_SUPABASE_ANON_KEY;

console.log('Testing Fetch against:', URL);

async function run() {
    try {
        const res = await fetch(`${URL}/rest/v1/profiles?select=*&limit=5`, {
            headers: {
                'apikey': KEY,
                'Authorization': `Bearer ${KEY}`
            }
        });

        console.log('Status:', res.status, res.statusText);
        const text = await res.text();
        console.log('Body:', text);
    } catch (e) {
        console.error('Fetch failed:', e);
    }
}

run();
