import { ObjectId, WithId, Document } from 'mongodb';
import { db } from '../lib/db.js';
import type { Appointment } from '../types/models/index.js';

function toAppointment(doc: WithId<Document>): Appointment {
  const { _id, ...rest } = doc;
  return { id: _id.toString(), ...rest } as Appointment;
}

export async function findAppointmentById(
  id: string,
): Promise<Appointment | null> {
  const doc = await db
    .collection('appointments')
    .findOne({ _id: new ObjectId(id) });
  return doc ? toAppointment(doc) : null;
}

export async function findAppointmentsByUser(
  userId: string,
): Promise<Appointment[]> {
  const docs = await db
    .collection('appointments')
    .find({ $or: [{ customerId: userId }, { providerId: userId }] })
    .toArray();
  return docs.map(toAppointment);
}

export async function createAppointment(
  data: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<Appointment> {
  const now = new Date();
  const result = await db
    .collection('appointments')
    .insertOne({ ...data, createdAt: now, updatedAt: now });
  return {
    id: result.insertedId.toString(),
    ...data,
    createdAt: now,
    updatedAt: now,
  };
}

export async function updateAppointment(
  id: string,
  data: Partial<Pick<Appointment, 'status' | 'time'>>,
): Promise<Appointment> {
  const updated = await db
    .collection('appointments')
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } },
      { returnDocument: 'after' },
    );
  return toAppointment(updated!);
}

export async function hasTimeConflict(
  providerId: string,
  time: Date,
  duration: number,
  excludeAppointmentId?: string,
): Promise<boolean> {
  const dayStart = new Date(time);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(time);
  dayEnd.setHours(23, 59, 59, 999);

  const existing = await db
    .collection('appointments')
    .find({
      providerId,
      status: { $ne: 'CANCELED' },
      time: { $gte: dayStart, $lte: dayEnd },
      ...(excludeAppointmentId
        ? { _id: { $ne: new ObjectId(excludeAppointmentId) } }
        : {}),
    })
    .toArray();

  return existing.some((apt) => {
    const aptStart = new Date(apt.time).getTime();
    const aptEnd = aptStart + apt.duration * 60000;
    const newEnd = time.getTime() + duration * 60000;
    return time.getTime() < aptEnd && newEnd > aptStart;
  });
}
