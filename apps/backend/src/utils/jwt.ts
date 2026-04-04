import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;
if (!secret) throw new Error('JWT_SECRET is missing from .env');
const JWT_SECRET = secret;

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
}

export function verifyToken(token: string): { userId: string } {
  const decoded = jwt.verify(token, JWT_SECRET);
  if (typeof decoded === 'string' || !('userId' in decoded)) {
    throw new Error('Invalid token payload');
  }
  return decoded as { userId: string };
}
