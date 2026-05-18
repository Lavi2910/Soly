import bcrypt from 'bcrypt';
import { findUserByPhone, createUser } from '../models/user.model.js';
import { generateToken } from '../utils/jwt.js';
import { AppError } from '../errors/AppError.js';
import type { PublicUser } from '../types/models/index.js';

function sanitizeUser(user: {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar?: string | null;
}): PublicUser {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    avatar: user.avatar ?? null,
  };
}

export async function register(data: {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar?: string;
}) {
  if (
    !data.password ||
    !data.phoneNumber ||
    !data.firstName ||
    !data.lastName
  ) {
    throw new AppError(400, 'Missing required fields');
  }

  const existing = await findUserByPhone(data.phoneNumber);
  if (existing)
    throw new AppError(409, 'A user with this phone number already exists');

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await createUser({
    phoneNumber: data.phoneNumber,
    firstName: data.firstName,
    lastName: data.lastName,
    password: hashedPassword,
    avatar: data.avatar || null,
  });

  return { token: generateToken(user.id), user: sanitizeUser(user) };
}

export async function login(data: { phoneNumber: string; password: string }) {
  if (!data.password || !data.phoneNumber) {
    throw new AppError(400, 'Missing required fields');
  }

  const user = await findUserByPhone(data.phoneNumber);
  if (!user) throw new AppError(401, 'Invalid credentials');

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw new AppError(401, 'Invalid credentials');

  return { token: generateToken(user.id), user: sanitizeUser(user) };
}
