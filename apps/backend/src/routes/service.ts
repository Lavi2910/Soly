import { Router, type IRouter } from 'express';
import { authenticate } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';

const router: IRouter = Router();

router.post('/services', authenticate, async (req, res) => {
  try {
    const userId = req.userId;
    const { businessId, name, duration, price, providerIds } = req.body;

    if (!name || !duration || !price || !businessId) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const business = await prisma.business.findUnique({
      where: { id: businessId },
    });

    if (!business) {
      res.status(404).json({ error: 'Business not found' });
      return;
    }

    if (business.ownerId != userId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    const service = await prisma.service.create({
      data: {
        name,
        duration,
        price,
        businessId,
        providers: providerIds?.length
          ? {
              connect: providerIds.map((id: string) => ({ id })),
            }
          : undefined,
      },
    });

    res.status(201).json(service);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/services/:id', authenticate, async (req, res) => {
  try {
    const userId = req.userId;
    const serviceId = req.params.id as string;

    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!service) {
      res.status(404).json({ error: 'Service not found' });
      return;
    }

    const business = await prisma.business.findUnique({
      where: { id: service.businessId },
    });

    if (!business) {
      res.status(404).json({ error: 'Business not found' });
      return;
    }

    if (userId != business.ownerId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    await prisma.service.delete({ where: { id: serviceId } });
    res.json({ message: 'Service deleted' });
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/services/:id', authenticate, async (req, res) => {
  try {
    const userId = req.userId;
    const serviceId = req.params.id as string;
    const { name, duration, price, providerIds } = req.body;
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!service) {
      res.status(404).json({ error: 'Service not found' });
      return;
    }
    const business = await prisma.business.findUnique({
      where: { id: service.businessId },
    });

    if (!business) {
      res.status(404).json({ error: 'Business not found' });
      return;
    }

    if (business.ownerId != userId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    const updatedService = await prisma.service.update({
      where: { id: serviceId },
      data: {
        name,
        duration,
        price,
        providers: providerIds?.length
          ? {
              set: providerIds.map((id: string) => ({ id })),
            }
          : undefined,
      },
    });

    res.status(200).json(updatedService);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
