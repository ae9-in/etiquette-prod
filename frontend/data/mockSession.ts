import { UserProfile } from '../types';
import { COURSES } from './courses';

export const MOCK_USER: UserProfile = {
  id: 'user-123',
  email: 'alex.rivera@etiquette-inc.com',
  name: 'Alex Rivera',
  role: 'employee',
  department: 'Product Development',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4',
  progress: {},
  assignedCourses: ['posh-certification-2024', 'employee-conduct-2024']
};

export const MOCK_ADMIN: UserProfile = {
  id: 'admin-999',
  email: 'jordan.smith@etiquette-inc.com',
  name: 'Jordan Smith',
  role: 'platform_admin',
  department: 'Operations & Compliance',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan&backgroundColor=ffdfbf',
  progress: {},
  assignedCourses: COURSES.map(c => c.id)
};

export interface SessionData {
  profile: UserProfile;
  users: UserProfile[];
  xp: number;
}

export function getDefaultSession(): SessionData {
  return {
    profile: MOCK_USER,
    users: [MOCK_USER, MOCK_ADMIN],
    xp: 0
  };
}
