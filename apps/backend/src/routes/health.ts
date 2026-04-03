import { Router, type IRouter } from 'express';
import { prisma } from '../lib/prisma.js';

const router: IRouter = Router();

router.get('/', async (_req, res) => {
  try {
    await prisma.$connect();
    res.json({ status: 'ok', database: 'connected' });
  } catch {
    res.status(500).json({ status: 'error', database: 'disconnected' });
  }
});

export default router;
