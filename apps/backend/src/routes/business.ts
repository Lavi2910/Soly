import { Router, type IRouter } from 'express';
import { authenticate } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';

const router: IRouter = Router();

router.post('/businesses', authenticate, async (req, res) => {
  try {
    const { name, phoneNumber, description, address, logo, instagram, tiktok } =
      req.body;

    if (!name || !phoneNumber || !description || !address) {
      res.status(400).json({ error: 'Missing arguments' });
      return;
    }
    const existing = await prisma.business.findUnique({
      where: { ownerId: req.userId! },
    });
    if (existing) {
      res.status(409).json({ error: 'You already own a business' });
      return;
    }

    const business = await prisma.business.create({
      data: {
        name,
        phoneNumber,
        description,
        address,
        logo,
        instagram,
        tiktok,
        ownerId: req.userId!,
      },
    });
    res.status(201).json(business);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/businesses/:id', async (req, res) => {
  try {
    const businessId = req.params.id;
    const business = await prisma.business.findUnique({
      where: { id: businessId },
    });
    if (!business) {
      res.status(404).json({ error: 'Business not found' });
      return;
    }
    res.json(business);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/businesses/:id', authenticate, async (req, res) => {
  try {
    const userId = req.userId;
    const businessId = req.params.id as string;
    const business = await prisma.business.findUnique({
      where: { id: businessId },
    });

    if (!business) {
      res.status(404).json({ error: 'Business not found' });
      return;
    }

    if (business.ownerId !== userId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    const { name, phoneNumber, description, address, logo, instagram, tiktok } =
      req.body;

    const updatedBusiness = await prisma.business.update({
      where: { id: businessId },
      data: {
        name,
        phoneNumber,
        description,
        address,
        logo,
        instagram,
        tiktok,
      },
    });
    res.json(updatedBusiness);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/businesses', async (req, res) => {
  try {
    const businesses = await prisma.business.findMany();
    res.status(200).json(businesses);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
