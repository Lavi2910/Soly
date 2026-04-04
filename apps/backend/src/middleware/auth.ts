import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import jwt from 'jsonwebtoken';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ error: 'Cannot find the token' });
      return;
    }
    const decoded = verifyToken(token);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    if (
      error instanceof jwt.JsonWebTokenError ||
      error instanceof jwt.TokenExpiredError
    ) {
      res.status(401).json({ error: 'Invalid token' });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};
