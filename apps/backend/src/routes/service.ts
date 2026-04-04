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

    if (
      typeof duration !== 'number' ||
      duration <= 0 ||
      typeof price !== 'number' ||
      price <= 0
    ) {
      res
        .status(400)
        .json({ error: 'Duration and price must be positive numbers' });
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

    if (providerIds !== undefined && providerIds.length > 0) {
      const validProviders = await prisma.user.findMany({
        where: {
          id: { in: providerIds },
          role: 'PROVIDER',
          worksAtId: businessId,
        },
      });
      if (validProviders.length !== providerIds.length) {
        res.status(400).json({ error: 'One or more provider IDs are invalid' });
        return;
      }
    }

    const service = await prisma.service.create({
      data: {
        name,
        duration,
        price,
        businessId,
        providers:
          providerIds !== undefined
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

    const activeCount = await prisma.appointment.count({
      where: { serviceId, status: { not: 'CANCELED' } },
    });
    if (activeCount > 0) {
      res
        .status(409)
        .json({ error: 'Cannot delete service with active appointments' });
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

    if (
      (duration !== undefined &&
        (typeof duration !== 'number' || duration <= 0)) ||
      (price !== undefined && (typeof price !== 'number' || price <= 0))
    ) {
      res
        .status(400)
        .json({ error: 'Duration and price must be positive numbers' });
      return;
    }

    if (providerIds !== undefined && providerIds.length > 0) {
      const validProviders = await prisma.user.findMany({
        where: {
          id: { in: providerIds },
          role: 'PROVIDER',
          worksAtId: service.businessId,
        },
      });
      if (validProviders.length !== providerIds.length) {
        res.status(400).json({ error: 'One or more provider IDs are invalid' });
        return;
      }
    }

    const updatedService = await prisma.service.update({
      where: { id: serviceId },
      data: {
        name,
        duration,
        price,
        providers:
          providerIds !== undefined
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
