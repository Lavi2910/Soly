import { Router, type IRouter } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma.js';
import { generateToken } from '../utils/jwt.js';

const router: IRouter = Router();

function sanitizeUser(user: {
  id: string;
  name: string;
  phoneNumber: string;
  role: string;
}) {
  return {
    id: user.id,
    name: user.name,
    phoneNumber: user.phoneNumber,
    role: user.role,
  };
}

router.post('/register', async (req, res) => {
  try {
    const { password, phoneNumber, name, role } = req.body;
    const allowedRoles = ['CUSTOMER', 'PROVIDER'];
    if (!allowedRoles.includes(role)) {
      res.status(400).json({ error: 'Invalid role' });
      return;
    }
    if (!password || !phoneNumber || !name || !role) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const existing = await prisma.user.findUnique({
      where: { phoneNumber_role: { phoneNumber, role } },
    });
    if (existing) {
      res
        .status(409)
        .json({ error: 'A user with this phone number already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { phoneNumber, name, password: hashedPassword, role },
    });

    res
      .status(201)
      .json({ token: generateToken(newUser.id), user: sanitizeUser(newUser) });
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { phoneNumber, password, role } = req.body;
    const allowedRoles = ['CUSTOMER', 'PROVIDER'];
    if (!allowedRoles.includes(role)) {
      res.status(400).json({ error: 'Invalid role' });
      return;
    }
    if (!password || !phoneNumber || !role) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { phoneNumber_role: { phoneNumber, role } },
    });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    res.json({ token: generateToken(user.id), user: sanitizeUser(user) });
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
