import {
  findBusinessByOwner,
  findBusinessById,
  createBusiness,
  updateBusiness,
  findAllBusinesses,
} from '../models/business.model.js';
import { AppError } from '../errors/AppError.js';
import type { Business } from '../types/models/index.js';

type BusinessInput = Pick<
  Business,
  'name' | 'phoneNumber' | 'description' | 'address'
> &
  Partial<Pick<Business, 'logo' | 'instagram' | 'tiktok'>>;

export async function create(ownerId: string, data: BusinessInput) {
  if (!data.name || !data.phoneNumber || !data.description || !data.address) {
    throw new AppError(400, 'Missing arguments');
  }

  const existing = await findBusinessByOwner(ownerId);
  if (existing) throw new AppError(409, 'You already own a business');

  return createBusiness({
    ...data,
    logo: data.logo || null,
    instagram: data.instagram || null,
    tiktok: data.tiktok || null,
    ownerId,
  });
}

export async function getById(id: string) {
  const business = await findBusinessById(id);
  if (!business) throw new AppError(404, 'Business not found');
  return business;
}

export async function update(
  userId: string,
  id: string,
  data: Partial<BusinessInput>,
) {
  const business = await findBusinessById(id);
  if (!business) throw new AppError(404, 'Business not found');
  if (business.ownerId !== userId) throw new AppError(403, 'Forbidden');
  return updateBusiness(id, data);
}

export async function getAll() {
  return findAllBusinesses();
}
