import { ObjectId, WithId, Document } from 'mongodb';
import { db } from '../lib/db.js';
import type { Service } from '../types/models/index.js';

function toService(doc: WithId<Document>): Service {
  const { _id, ...rest } = doc;
  return { id: _id.toString(), ...rest } as Service;
}

export async function findServiceById(id: string): Promise<Service | null> {
  const doc = await db
    .collection('services')
    .findOne({ _id: new ObjectId(id) });
  return doc ? toService(doc) : null;
}

export async function createService(
  data: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<Service> {
  const now = new Date();
  const result = await db
    .collection('services')
    .insertOne({ ...data, createdAt: now, updatedAt: now });
  return {
    id: result.insertedId.toString(),
    ...data,
    createdAt: now,
    updatedAt: now,
  };
}

export async function updateService(
  id: string,
  data: Partial<Omit<Service, 'id' | 'businessId' | 'createdAt' | 'updatedAt'>>,
): Promise<Service> {
  const updated = await db
    .collection('services')
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } },
      { returnDocument: 'after' },
    );
  return toService(updated!);
}

export async function deleteService(id: string): Promise<void> {
  await db.collection('services').deleteOne({ _id: new ObjectId(id) });
}

export async function countActiveAppointmentsByService(
  serviceId: string,
): Promise<number> {
  return db
    .collection('appointments')
    .countDocuments({ serviceId, status: { $ne: 'CANCELED' } });
}
