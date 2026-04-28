import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import { getDatabase } from '../config/db.js';
import { getRuntimeConfig } from '../config/env.js';
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

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

function signAuthToken(user: { userId: string; role: string }) {
  const config = getRuntimeConfig();
  return jwt.sign(
    { userId: user.userId, role: user.role },
    process.env.JWT_SECRET || config.JWT_SECRET,
    { expiresIn: '1d' }
  );
}

export const register = async (req: Request, res: Response) => {
  try {
    const db = await getDatabase();
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
    const userId = result.insertedId.toString();
    const token = signAuthToken({ userId, role: newUser.role });
    const profile = toPublicProfile({ ...newUser, _id: result.insertedId });

    return res.status(201).json({
      success: true,
      token,
      profile,
      user: { userId: profile.id, role: profile.role },
    });
  } catch (error: any) {
    return sendError(res, 500, 'Failed to register user', getErrorMessage(error));
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const db = await getDatabase();
    const { email, password } = req.body || {};

    if (!email || !password) {
      return sendError(res, 400, 'email and password are required');
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const user = await db.collection('users').findOne({ email: normalizedEmail });
    if (!user) {
      return sendError(res, 401, 'Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(String(password), user.password || '');
    if (!isValidPassword) {
      return sendError(res, 401, 'Invalid credentials');
    }

    const token = signAuthToken({
      userId: user._id.toString(),
      role: user.role,
    });

    return res.json({
      success: true,
      token,
      user: { userId: user._id.toString(), role: user.role },
    });
  } catch (error: any) {
    return sendError(res, 500, 'Failed to login', getErrorMessage(error));
  }
};

export const getMe = async (req: AuthenticatedRequest, res: Response) => {
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

    return res.json({
      success: true,
      user: toPublicProfile(user),
    });
  } catch (error: any) {
    return sendError(res, 500, 'Failed to fetch current user', getErrorMessage(error));
  }
};
