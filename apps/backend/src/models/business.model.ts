import { ObjectId, WithId, Document } from 'mongodb';
import { db } from '../lib/db.js';
import type { Business } from '../types/models/index.js';
import { AppError } from '../errors/AppError.js';

function toBusiness(doc: WithId<Document>): Business {
  const { _id, ...rest } = doc;
  return { id: _id.toString(), ...rest } as Business;
}

export async function findBusinessByOwner(
  ownerId: string,
): Promise<Business | null> {
  const doc = await db.collection('businesses').findOne({ ownerId });
  return doc ? toBusiness(doc) : null;
}

export async function findBusinessById(id: string): Promise<Business | null> {
  if (!ObjectId.isValid(id)) return null;
  const doc = await db
    .collection('businesses')
    .findOne({ _id: new ObjectId(id) });
  return doc ? toBusiness(doc) : null;
}

export async function createBusiness(
  data: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<Business> {
  const now = new Date();
  try {
    const result = await db
      .collection('businesses')
      .insertOne({ ...data, createdAt: now, updatedAt: now });
    return {
      id: result.insertedId.toString(),
      ...data,
      createdAt: now,
      updatedAt: now,
    };
  } catch (err: unknown) {
    if (
      typeof err === 'object' &&
      err !== null &&
      'code' in err &&
      (err as { code: number }).code === 11000
    ) {
      throw new AppError(409, 'You already own a business');
    }
    throw err;
  }
}

export async function updateBusiness(
  id: string,
  data: Partial<Omit<Business, 'id' | 'ownerId' | 'createdAt' | 'updatedAt'>>,
): Promise<Business> {
  const updated = await db
    .collection('businesses')
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } },
      { returnDocument: 'after' },
    );
  return toBusiness(updated!);
}

export async function findAllBusinesses(): Promise<Business[]> {
  const docs = await db.collection('businesses').find().toArray();
  return docs.map(toBusiness);
}
