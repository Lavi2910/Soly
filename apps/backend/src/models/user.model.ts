import { ObjectId, WithId, Document } from 'mongodb';
import { db } from '../lib/db.js';
import type { User } from '../types/models/index.js';
import { AppError } from '../errors/AppError.js';

function toUser(doc: WithId<Document>): User {
  const { _id, ...rest } = doc;
  return { id: _id.toString(), ...rest } as User;
}

export async function findUserByPhone(
  phoneNumber: string,
): Promise<User | null> {
  const doc = await db.collection('users').findOne({ phoneNumber });
  return doc ? toUser(doc) : null;
}

export async function findUsersByIds(
  ids: string[],
  worksAtId?: string,
): Promise<User[]> {
  const validIds = ids.filter((id) => ObjectId.isValid(id));
  const query: Record<string, unknown> = {
    _id: { $in: validIds.map((id) => new ObjectId(id)) },
  };
  if (worksAtId) query.worksAtId = worksAtId;
  const docs = await db.collection('users').find(query).toArray();
  return docs.map(toUser);
}

export async function createUser(data: {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar: string | null;
}): Promise<User> {
  const now = new Date();
  try {
    const result = await db
      .collection('users')
      .insertOne({ ...data, createdAt: now, updatedAt: now });
    return {
      id: result.insertedId.toString(),
      ...data,
      worksAtId: null,
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
      throw new AppError(409, 'A user with this phone number already exists');
    }
    throw err;
  }
}
