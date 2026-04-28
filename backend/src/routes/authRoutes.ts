import { Router } from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { authMiddlewareFactory } from '../middleware/authMiddleware.js';

const router = Router();
const authenticateToken = authMiddlewareFactory();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticateToken, getMe);

export default router;
