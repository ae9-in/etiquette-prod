import type { Response } from 'express';
import { ObjectId } from 'mongodb';
import { getDatabase } from '../config/db.js';
import { AuthenticatedRequest } from '../middleware/authMiddleware.js';

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

export const updateModuleProgress = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const db = await getDatabase();
    const { courseId, moduleId } = req.body || {};
    const userId = req.user?.userId;

    if (!courseId || !moduleId) {
      return sendError(res, 400, 'courseId and moduleId are required');
    }
    if (!userId) {
      return sendError(res, 401, 'Invalid token payload');
    }

    const xpGained = 200;

    const result = await db.collection('users').findOneAndUpdate(
      buildUserIdFilter(userId),
      {
        $addToSet: { [`progress.${courseId}.completedModules`]: moduleId },
        $set: {
          [`progress.${courseId}.courseId`]: courseId,
          [`progress.${courseId}.lastUpdated`]: new Date().toISOString(),
          updatedAt: new Date(),
        },
        $inc: { xp: xpGained },
      },
      { returnDocument: 'after' }
    );

    if (!result) {
      return sendError(res, 404, 'User not found');
    }

    return res.json({
      success: true,
      newXP: result.xp || 0,
      xpGained,
    });
  } catch (error: any) {
    return sendError(res, 500, 'Failed to update module progress', getErrorMessage(error));
  }
};

export const completeCourse = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const db = await getDatabase();
    const { courseId, score } = req.body || {};
    const userId = req.user?.userId;

    if (!courseId || typeof score !== 'number') {
      return sendError(res, 400, 'courseId and numeric score are required');
    }
    if (!userId) {
      return sendError(res, 401, 'Invalid token payload');
    }

    const isPassed = score >= 70;
    const xpGained = isPassed ? 500 : 0;

    const result = await db.collection('users').findOneAndUpdate(
      buildUserIdFilter(userId),
      {
        $set: {
          [`progress.${courseId}.courseId`]: courseId,
          [`progress.${courseId}.assessmentScore`]: score,
          [`progress.${courseId}.isCompleted`]: isPassed,
          [`progress.${courseId}.completionDate`]: new Date().toISOString(),
          [`progress.${courseId}.lastUpdated`]: new Date().toISOString(),
          updatedAt: new Date(),
        },
        $inc: { xp: xpGained },
      },
      { returnDocument: 'after' }
    );

    if (!result) {
      return sendError(res, 404, 'User not found');
    }

    return res.json({
      success: true,
      newXP: result.xp || 0,
      isPassed,
      xpGained,
    });
  } catch (error: any) {
    return sendError(res, 500, 'Failed to submit course completion', getErrorMessage(error));
  }
};

export const updateXP = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const db = await getDatabase();
    const { xp } = req.body || {};
    const userId = req.user?.userId;

    if (typeof xp !== 'number') {
      return sendError(res, 400, 'xp must be a number');
    }
    if (!userId) {
      return sendError(res, 401, 'Invalid token payload');
    }

    const result = await db.collection('users').updateOne(
      buildUserIdFilter(userId),
      { $set: { xp, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return sendError(res, 404, 'User not found');
    }

    return res.json({ success: true, xp });
  } catch (error: any) {
    return sendError(res, 500, 'Failed to update XP', getErrorMessage(error));
  }
};
