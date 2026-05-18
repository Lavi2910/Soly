import { Request, Response } from 'express';
import { db } from '../lib/db.js';

export async function check(_req: Request, res: Response): Promise<void> {
  try {
    await db.command({ ping: 1 });
    res.json({ status: 'ok', database: 'connected' });
  } catch {
    res.status(500).json({ status: 'error', database: 'disconnected' });
  }
}
