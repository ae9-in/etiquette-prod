import { Router } from 'express';
import { updateModuleProgress, completeCourse, updateXP } from '../controllers/progressController.js';
import { authMiddlewareFactory } from '../middleware/authMiddleware.js';

const router = Router();
const authenticateToken = authMiddlewareFactory();

router.post('/module', authenticateToken, updateModuleProgress);
router.post('/complete', authenticateToken, completeCourse);
router.post('/xp', authenticateToken, updateXP);

export default router;
