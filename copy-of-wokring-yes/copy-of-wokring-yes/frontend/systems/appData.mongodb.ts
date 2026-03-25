import { UserProfile } from '../types';
import { getDefaultSession, type SessionData } from '../data/mockSession';
import { api, APIError } from './api';

const USE_REMOTE = true;
const XP_STORAGE_KEY = 'etiquette_lms_xp';

let currentProfileId: string | null = null;
let currentXP: number | null = null;

function generateUUID(): string {
  if (typeof globalThis !== 'undefined' && globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function') {
    return globalThis.crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  if (typeof globalThis !== 'undefined' && globalThis.crypto && typeof globalThis.crypto.getRandomValues === 'function') {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0'));
  return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10, 16).join('')}`;
}

export function saveXPToStorage(xp: number): void {
  try {
    localStorage.setItem(XP_STORAGE_KEY, xp.toString());
    console.log(`[XP Storage] Saved ${xp} XP to localStorage`);
  } catch (e) {
    console.error('[XP Storage] Failed to save to localStorage:', e);
  }
}

export function loadXPFromStorage(): number | null {
  try {
    const storedXP = localStorage.getItem(XP_STORAGE_KEY);
    if (storedXP) {
      const xp = parseInt(storedXP, 10);
      console.log(`[XP Storage] Loaded ${xp} XP from localStorage`);
      return xp;
    }
    return null;
  } catch (e) {
    console.error('[XP Storage] Failed to load from localStorage:', e);
    return null;
  }
}

export function clearXPFromStorage(): void {
  try {
    localStorage.removeItem(XP_STORAGE_KEY);
  } catch (e) {
    console.error('[XP Storage] Failed to clear from localStorage:', e);
  }
}

export type { SessionData };
export { getDefaultSession };

export async function loadSession(): Promise<SessionData> {
  const defaultSession = getDefaultSession();
  const localXP = loadXPFromStorage();
  let effectiveXP = localXP ?? 0;

  try {
    if (USE_REMOTE) {
      const profiles = await api.getProfiles();

      if (!profiles?.length) return { profile: {} as UserProfile, users: [], xp: 0 };

      const users = profiles;
      const adminIndex = profiles.findIndex((p: UserProfile) => p.role === 'platform_admin');
      const currentIndex = adminIndex >= 0 ? adminIndex : 0;
      const profile = users[currentIndex];

      currentProfileId = profile.id;
      const serverXP = profile.xp || 0;

      console.log(`[XP Sync] Server: ${serverXP} | Local: ${localXP}`);

      if (serverXP !== localXP) {
        saveXPToStorage(serverXP);
      }

      currentXP = serverXP;
      effectiveXP = serverXP;

      return { profile, users, xp: effectiveXP };
    }
  } catch (e) {
    console.error('loadSession failed:', e);
  }

  currentXP = effectiveXP;
  return { ...defaultSession, xp: effectiveXP };
}

export async function fetchEmployees(): Promise<UserProfile[]> {
  console.log('[fetchEmployees] USE_REMOTE:', USE_REMOTE);

  if (!USE_REMOTE) return getDefaultSession().users;

  try {
    const profiles = await api.getProfiles();
    return profiles || [];
  } catch (error) {
    console.error('fetchEmployees failed:', error);
    throw error;
  }
}

export async function saveProfile(profile: UserProfile): Promise<void> {
  try {
    currentProfileId = profile.id;
    if (!USE_REMOTE) return;
    await api.updateProfile(profile.id, profile);
  } catch (e) {
    console.error('saveProfile:', e);
  }
}

export async function saveUsers(users: UserProfile[]): Promise<void> {
  try {
    if (!USE_REMOTE) return;
    for (const user of users) {
      await api.updateProfile(user.id, user);
    }
  } catch (e) {
    console.error('saveUsers:', e);
  }
}

export async function saveXP(xp: number): Promise<void> {
  if (currentProfileId == null) return;

  saveXPToStorage(xp);

  try {
    if (!USE_REMOTE) return;
    await api.updateXP(xp);
  } catch (e) {
    console.warn('saveXP API error (XP saved locally):', e);
  }
}

export async function createUser(userData: {
  email?: string;
  name: string;
  role: 'platform_admin' | 'employee';
  department: string;
  assignedCourses?: string[];
}): Promise<{ profile: UserProfile; username: string; password: string; invited: boolean }> {
  const domain = import.meta.env.VITE_EMPLOYEE_LOGIN_DOMAIN || 'employees.local';

  const email = (userData.email && userData.email.includes('@')
    ? userData.email
    : `${userData.name.toLowerCase().replace(/[^a-z0-9]/g, '')}@${domain}`
  ).toLowerCase().trim();

  try {
    console.log('[CreateUser] Starting creation for:', email);

    const password = `${Math.random().toString(36).slice(2, 10)}!`;

    const newProfile: UserProfile = {
      id: generateUUID(),
      email: email,
      name: userData.name,
      role: userData.role,
      department: userData.department,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userData.name)}&backgroundColor=b6e3f4`,
      progress: {} as UserProfile['progress'],
      assignedCourses: userData.assignedCourses || []
    };

    if (USE_REMOTE) {
      const result = await api.createUser({
        ...newProfile,
        password
      });

      return { 
        profile: result.profile, 
        username: email, 
        password: result.password || password, 
        invited: false 
      };
    } else {
      return { profile: newProfile, username: email, password, invited: false };
    }
  } catch (e) {
    console.error('createUser:', e);
    throw e;
  }
}

export async function deleteUser(userId: string): Promise<void> {
  try {
    if (USE_REMOTE) {
      await api.deleteUser(userId);
      console.log('deleteUser: Successfully deleted user', userId);
    }
  } catch (e) {
    console.error('deleteUser:', e);
    throw e;
  }
}

export async function updateUser(userId: string, updates: Partial<UserProfile>): Promise<UserProfile | null> {
  try {
    if (USE_REMOTE) {
      const updatedProfile = await api.updateUser(userId, updates);
      console.log('updateUser: Successfully updated user', updatedProfile.email);
      return updatedProfile;
    }
    return null;
  } catch (e) {
    console.error('updateUser:', e);
    throw e;
  }
}

export async function submitCourseCompletion(courseId: string, score: number): Promise<{ success: boolean; newXP?: number; isPassed?: boolean; xpGained?: number }> {
  try {
    if (!USE_REMOTE) {
      const passed = score >= 70;
      return { success: true, isPassed: passed, newXP: (currentXP || 0) + (passed ? 500 : 0) };
    }

    const result = await api.submitCourseCompletion(courseId, score);

    if (result.newXP) {
      currentXP = result.newXP;
      saveXPToStorage(result.newXP);
    }

    return {
      success: true,
      newXP: result.newXP,
      isPassed: result.isPassed,
      xpGained: result.xpGained
    };
  } catch (e) {
    console.error('submitCourseCompletion:', e);
    throw e;
  }
}

export async function updateModuleProgress(courseId: string, moduleId: string): Promise<{ success: boolean; newXP?: number; xpGained?: number }> {
  try {
    if (!USE_REMOTE) {
      return { success: true, newXP: (currentXP || 0) + 200 };
    }

    const result = await api.updateModuleProgress(courseId, moduleId);

    if (result.newXP) {
      currentXP = result.newXP;
      saveXPToStorage(result.newXP);
    }

    return {
      success: true,
      newXP: result.newXP,
      xpGained: result.xpGained
    };
  } catch (e) {
    console.error('updateModuleProgress:', e);
    throw e;
  }
}
