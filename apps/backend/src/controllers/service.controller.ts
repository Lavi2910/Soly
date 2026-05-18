import { Request, Response } from 'express';
import { AppError } from '../errors/AppError.js';
import * as serviceService from '../services/service.service.js';

export async function create(req: Request, res: Response): Promise<void> {
  try {
    const result = await serviceService.create(req.userId!, req.body);
    res.status(201).json(result);
  } catch (err) {
    if (err instanceof AppError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function remove(req: Request, res: Response): Promise<void> {
  try {
    await serviceService.remove(req.userId!, req.params.id as string);
    res.json({ message: 'Service deleted' });
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
    const result = await serviceService.update(
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
