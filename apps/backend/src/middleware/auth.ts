import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.js';
import jwt from 'jsonwebtoken';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;
    const [scheme, token] = authHeader?.split(' ') ?? [];
    if (scheme?.toLowerCase() !== 'bearer' || !token) {
      res.status(401).json({ error: 'Invalid or missing token' });
      return;
    }
    const decoded = verifyToken(token);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    const isAuthError =
      error instanceof jwt.JsonWebTokenError ||
      error instanceof jwt.TokenExpiredError ||
      (error instanceof Error && error.message === 'Invalid token payload');

    if (isAuthError) {
      res.status(401).json({ error: 'Invalid token' });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};
