import type { Response } from 'express';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import { getDatabase } from '../config/db.js';
import { AuthenticatedRequest } from '../middleware/authMiddleware.js';

const ALLOWED_ROLES = new Set(['employee', 'hr', 'platform_admin']);

function sendError(res: Response, status: number, message: string, error?: string | Record<string, any>) {
  return res.status(status).json({
    success: false,
    message,
    ...(error ? { error } : {}),
  });
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function buildUserIdFilter(id: string) {
  if (ObjectId.isValid(id)) {
    return { _id: new ObjectId(id) };
  }
  return { _id: id as any };
}

function toPublicProfile(user: any) {
  return {
    id: user._id.toString(),
    email: user.email,
    name: user.name,
    role: user.role,
    department: user.department,
    avatar: user.avatar,
    progress: user.progress || {},
    assignedCourses: user.assignedCourses || [],
    xp: user.xp || 0,
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const getMyProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const db = await getDatabase();
    const userId = req.user?.userId;
    if (!userId) {
      return sendError(res, 401, 'Invalid token payload');
    }

    const user = await db.collection('users').findOne(buildUserIdFilter(userId));
    if (!user) {
      return sendError(res, 404, 'User not found');
    }

    return res.json(toPublicProfile(user));
  } catch (error: any) {
    return sendError(res, 500, 'Failed to fetch profile', getErrorMessage(error));
  }
};

export const getAllProfiles = async (_req: AuthenticatedRequest, res: Response) => {
  try {
    const db = await getDatabase();
    const users = await db.collection('users').find({}).toArray();
    const profiles = users.map((user: any) => toPublicProfile(user));
    return res.json(profiles);
  } catch (error: any) {
    return sendError(res, 500, 'Failed to fetch profiles', getErrorMessage(error));
  }
};

export const updateProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const db = await getDatabase();
    const { id } = req.params;
    const updates = { ...(req.body || {}) };

    delete updates.id;
    delete updates._id;
    delete updates.password;

    const result = await db.collection('users').findOneAndUpdate(
      buildUserIdFilter(id),
      { $set: { ...updates, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    if (!result) {
      return sendError(res, 404, 'User not found');
    }

    return res.json(toPublicProfile(result));
  } catch (error: any) {
    return sendError(res, 500, 'Failed to update profile', getErrorMessage(error));
  }
};

export const createUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const db = await getDatabase();
    if (req.user?.role !== 'platform_admin' && req.user?.role !== 'hr') {
      return sendError(res, 403, 'Unauthorized');
    }

    const { email, password, name, role, department, assignedCourses } = req.body || {};
    if (!email || !password || !name) {
      return sendError(res, 400, 'email, password and name are required');
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    if (!isValidEmail(normalizedEmail)) {
      return sendError(res, 400, 'Invalid email format');
    }

    if (String(password).length < 6) {
      return sendError(res, 400, 'Password must be at least 6 characters');
    }

    const normalizedRole = role ? String(role).trim() : 'employee';
    if (!ALLOWED_ROLES.has(normalizedRole)) {
      return sendError(res, 400, 'Invalid role');
    }

    const existingUser = await db.collection('users').findOne({ email: normalizedEmail });
    if (existingUser) {
      return sendError(res, 409, 'User already exists');
    }

    const hashedPassword = await bcrypt.hash(String(password), 10);
    const newUser = {
      email: normalizedEmail,
      password: hashedPassword,
      name: String(name).trim(),
      role: normalizedRole,
      department: department ? String(department).trim() : 'Unassigned',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(String(name))}&backgroundColor=b6e3f4`,
      progress: {},
      assignedCourses: Array.isArray(assignedCourses) ? assignedCourses : [],
      xp: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection('users').insertOne(newUser);
    const profile = toPublicProfile({ ...newUser, _id: result.insertedId });

    return res.status(201).json({
      success: true,
      profile,
      password: String(password),
    });
  } catch (error: any) {
    return sendError(res, 500, 'Failed to create user', getErrorMessage(error));
  }
};

export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const db = await getDatabase();
    if (req.user?.role !== 'platform_admin' && req.user?.role !== 'hr') {
      return sendError(res, 403, 'Unauthorized');
    }

    const { id } = req.params;
    const result = await db.collection('users').deleteOne(buildUserIdFilter(id));

    if (result.deletedCount === 0) {
      return sendError(res, 404, 'User not found');
    }

    return res.json({ success: true, message: 'User deleted successfully' });
  } catch (error: any) {
    return sendError(res, 500, 'Failed to delete user', getErrorMessage(error));
  }
};
