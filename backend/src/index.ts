import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import progressRoutes from './routes/progressRoutes.js';
import { getMissingEnvVars } from './config/env.js';

const app = express();

app.use(cors());

if (!process.env.VERCEL) {
  app.use(express.json());
} else {
  // Ensure req.body is at least an object on Vercel to prevent crashes
  app.use((req, res, next) => {
    if (!req.body) req.body = {};
    next();
  });
}

const PORT = Number(process.env.PORT || 3001);
const NODE_ENV = process.env.NODE_ENV;

console.log('[startup] Environment loaded');
console.log(`[startup] NODE_ENV=${NODE_ENV || 'unset'}`);
console.log(`[startup] PORT=${PORT}`);
console.log(`[startup] Missing env vars=${getMissingEnvVars().join(', ') || 'none'}`);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api/progress', progressRoutes);

// Backward compatibility alias middleware
app.use((req, _res, next) => {
  const aliasPrefixes = ['/auth/', '/profiles', '/users', '/progress', '/xp', '/health'];
  if (!req.url.startsWith('/api/') && aliasPrefixes.some((p) => req.url.startsWith(p))) {
    req.url = `/api${req.url}`;
  }
  next();
});

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'API is healthy' });
});

// Error handling
app.use((error: any, _req: Request, res: Response, next: NextFunction) => {
  console.error('[unhandled] error:', error?.message || error);
  if (res.headersSent) {
    return next(error);
  }
  return res.status(500).json({
    success: false,
    message: 'Server error',
    error: error?.message || String(error)
  });
});

app.use((req, res) => {
  console.log(`[404] Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ success: false, message: 'Route not found' });
});

export default app;

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
