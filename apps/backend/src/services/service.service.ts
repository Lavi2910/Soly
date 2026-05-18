import { findBusinessById } from '../models/business.model.js';
import {
  findServiceById,
  createService,
  updateService,
  deleteService,
  countActiveAppointmentsByService,
} from '../models/service.model.js';
import { findUsersByIds } from '../models/user.model.js';
import { AppError } from '../errors/AppError.js';

async function validateProviders(
  providerIds: unknown,
  businessId: string,
): Promise<string[]> {
  if (providerIds === undefined) return [];

  if (
    !(
      Array.isArray(providerIds) &&
      providerIds.every((id) => typeof id === 'string')
    )
  ) {
    throw new AppError(400, 'providerIds must be an array of strings');
  }

  if (providerIds.length > 0) {
    const valid = await findUsersByIds(providerIds, businessId);
    if (valid.length !== providerIds.length) {
      throw new AppError(400, 'One or more provider IDs are invalid');
    }
  }

  return providerIds;
}

export async function create(
  userId: string,
  data: {
    businessId: string;
    name: string;
    duration: number;
    price: number;
    providerIds?: string[];
  },
) {
  if (!data.name || !data.duration || !data.price || !data.businessId) {
    throw new AppError(400, 'Missing required fields');
  }

  if (
    typeof data.duration !== 'number' ||
    data.duration <= 0 ||
    typeof data.price !== 'number' ||
    data.price <= 0
  ) {
    throw new AppError(400, 'Duration and price must be positive numbers');
  }

  const business = await findBusinessById(data.businessId);
  if (!business) throw new AppError(404, 'Business not found');
  if (business.ownerId !== userId) throw new AppError(403, 'Forbidden');

  const providerIds = await validateProviders(
    data.providerIds,
    data.businessId,
  );
  return createService({
    name: data.name,
    duration: data.duration,
    price: data.price,
    businessId: data.businessId,
    providerIds,
  });
}

export async function remove(userId: string, serviceId: string) {
  const service = await findServiceById(serviceId);
  if (!service) throw new AppError(404, 'Service not found');

  const business = await findBusinessById(service.businessId);
  if (!business) throw new AppError(404, 'Business not found');
  if (userId !== business.ownerId) throw new AppError(403, 'Forbidden');

  const activeCount = await countActiveAppointmentsByService(serviceId);
  if (activeCount > 0)
    throw new AppError(409, 'Cannot delete service with active appointments');

  await deleteService(serviceId);
}

export async function update(
  userId: string,
  serviceId: string,
  data: {
    name?: string;
    duration?: number;
    price?: number;
    providerIds?: string[];
  },
) {
  const service = await findServiceById(serviceId);
  if (!service) throw new AppError(404, 'Service not found');

  const business = await findBusinessById(service.businessId);
  if (!business) throw new AppError(404, 'Business not found');
  if (business.ownerId !== userId) throw new AppError(403, 'Forbidden');

  if (
    (data.duration !== undefined &&
      (typeof data.duration !== 'number' || data.duration <= 0)) ||
    (data.price !== undefined &&
      (typeof data.price !== 'number' || data.price <= 0))
  ) {
    throw new AppError(400, 'Duration and price must be positive numbers');
  }

  const providerIds =
    data.providerIds !== undefined
      ? await validateProviders(data.providerIds, service.businessId)
      : undefined;

  return updateService(serviceId, {
    name: data.name,
    duration: data.duration,
    price: data.price,
    ...(providerIds !== undefined && { providerIds }),
  });
}
