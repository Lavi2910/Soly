import { Request, Response } from 'express';
import { AppError } from '../errors/AppError.js';
import * as businessService from '../services/business.service.js';

export async function create(req: Request, res: Response): Promise<void> {
  try {
    const result = await businessService.create(req.userId!, req.body);
    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getById(req: Request, res: Response): Promise<void> {
  try {
    const result = await businessService.getById(req.params.id as string);
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function update(req: Request, res: Response): Promise<void> {
  try {
    const result = await businessService.update(
      req.userId!,
      req.params.id as string,
      req.body,
    );
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getAll(_req: Request, res: Response): Promise<void> {
  try {
    const result = await businessService.getAll();
    res.json(result);
  } catch (err) {
    if (err instanceof AppError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}
