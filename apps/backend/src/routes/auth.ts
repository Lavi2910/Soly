import { Router, type IRouter } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma.js';
import { generateToken } from '../utils/jwt.js';

const router: IRouter = Router();

router.post('/register', async (req, res) => {
  try {
    const { password, phoneNumber, name } = req.body;

    if (!password || !phoneNumber || !name) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const existing = await prisma.user.findUnique({ where: { phoneNumber } });
    if (existing) {
      res
        .status(409)
        .json({ error: 'A user with this phone number already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { phoneNumber, name, password: hashedPassword },
    });

    res.status(201).json({ token: generateToken(newUser.id) });
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    if (!password || !phoneNumber) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const user = await prisma.user.findUnique({ where: { phoneNumber } });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    res.json({ token: generateToken(user.id) });
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
