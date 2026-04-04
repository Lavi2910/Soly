import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;
if (!secret) throw new Error('JWT_SECRET is missing from .env');
const JWT_SECRET = secret;

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): { userId: string } {
  return jwt.verify(token, JWT_SECRET) as { userId: string };
}
