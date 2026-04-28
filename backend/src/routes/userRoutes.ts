import { Router } from 'express';
import { getMyProfile, getAllProfiles, updateProfile, createUser, deleteUser } from '../controllers/userController.js';
import { authMiddlewareFactory } from '../middleware/authMiddleware.js';

const router = Router();
const authenticateToken = authMiddlewareFactory();

router.get('/profiles/me', authenticateToken, getMyProfile);
router.get('/profiles', authenticateToken, getAllProfiles);
router.put('/profiles/:id', authenticateToken, updateProfile);

router.post('/users', authenticateToken, createUser);
router.put('/users/:id', authenticateToken, updateProfile); // Reuse updateProfile for users
router.delete('/users/:id', authenticateToken, deleteUser);

export default router;
