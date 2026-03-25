import app from '../../index.js';

export default async function handler(req: any, res: any) {
  try {
    return app(req, res);
  } catch (error: any) {
    console.error('[api/auth/register] crash prevented:', error?.message || error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error?.message || 'Unknown error',
    });
  }
}

