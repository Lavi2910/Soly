import { Request, Response } from 'express';
import { AppError } from '../errors/AppError.js';
import * as authService from '../services/auth.service.js';

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}
