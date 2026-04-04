import { Router, type IRouter } from 'express';
import { authenticate } from '../middleware/auth.js';
import { prisma } from '../lib/prisma.js';
import { hasTimeConflict } from '../utils/checkConflicts.js';

const router: IRouter = Router();

router.post('/appointments', authenticate, async (req, res) => {
  try {
    const { serviceId, providerId, time } = req.body;
    if (!serviceId || !providerId || !time) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      include: { providers: true },
    });
    if (!service) {
      res.status(404).json({ error: 'Service not found' });
      return;
    }
    const isProvider = service.providers.some((p) => p.id == providerId);
    if (!isProvider) {
      res
        .status(404)
        .json({ error: 'This provider does not offer this service' });
      return;
    }

    const newStart = new Date(time);
    const conflict = await hasTimeConflict(
      providerId,
      newStart,
      service.duration,
    );
    if (conflict) {
      res.status(409).json({ error: 'Provider is not available at this time' });
      return;
    }

    const appointment = await prisma.appointment.create({
      data: {
        customerId: req.userId!,
        providerId,
        serviceId,
        time: newStart,
        serviceName: service.name,
        price: service.price,
        duration: service.duration,
      },
    });

    res.status(201).json(appointment);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/appointments', authenticate, async (req, res) => {
  try {
    const userId = req.userId;

    const appointments = await prisma.appointment.findMany({
      where: {
        OR: [{ customerId: userId }, { providerId: userId }],
      },
    });

    res.json(appointments);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/appointments/:id', authenticate, async (req, res) => {
  try {
    const appointmentId = req.params.id as string;
    const userId = req.userId;
    const { status, time } = req.body;

    const appointment = await prisma.appointment.findUnique({
      where: { id: appointmentId },
    });

    if (!appointment) {
      res.status(404).json({ error: 'Appointment not found' });
      return;
    }

    const isCustomer = appointment.customerId === userId;
    const isProvider = appointment.providerId === userId;

    if (!isCustomer && !isProvider) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    if (isCustomer && status && status != 'CANCELED') {
      res.status(403).json({ error: 'Customers can only cancel appointments' });
      return;
    }

    if (
      isProvider &&
      status &&
      !['CANCELED', 'COMPLETED', 'NOSHOW'].includes(status)
    ) {
      res.status(400).json({ error: 'Invalid status' });
      return;
    }
    if (time) {
      const newTime = new Date(time);
      const conflict = await hasTimeConflict(
        appointment.providerId,
        newTime,
        appointment.duration,
        appointmentId,
      );
      if (conflict) {
        res
          .status(409)
          .json({ error: 'Provider is not available at this time' });
        return;
      }
    }

    const updatedAppointment = await prisma.appointment.update({
      where: { id: appointmentId },
      data: {
        ...(status && { status }),
        ...(time && { time: new Date(time) }),
      },
    });

    res.json(updatedAppointment);
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
