import { prisma } from '../lib/prisma.js';

export async function hasTimeConflict(
  providerId: string,
  time: Date,
  duration: number,
  excludeAppointmentId?: string,
) {
  const dayStart = new Date(time);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(time);
  dayEnd.setHours(23, 59, 59, 999);

  const existingAppointments = await prisma.appointment.findMany({
    where: {
      providerId,
      status: { not: 'CANCELED' },
      time: { gte: dayStart, lte: dayEnd },
      ...(excludeAppointmentId ? { id: { not: excludeAppointmentId } } : {}),
    },
  });

  return existingAppointments.some((apt) => {
    const aptStart = apt.time.getTime();
    const aptEnd = aptStart + apt.duration * 60000;
    const newEnd = time.getTime() + duration * 60000;
    return time.getTime() < aptEnd && newEnd > aptStart;
  });
}
