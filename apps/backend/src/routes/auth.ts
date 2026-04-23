import { Router, type IRouter } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma.js';
import { generateToken } from '../utils/jwt.js';
import { AUTH_MESSAGES } from '../constants/messages.js';
import { StatusCodes } from 'http-status-codes';

const router: IRouter = Router();

function sanitizeUser(user: {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar?: string | null;
}) {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    avatar: user.avatar,
  };
}

router.post('/register', async (req, res) => {
  try {
    const { password, phoneNumber, firstName, lastName, avatar } = req.body;

    if (!password || !phoneNumber || !firstName || !lastName) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: AUTH_MESSAGES.MISSING_FIELDS });
      return;
    }

    const existing = await prisma.user.findUnique({
      where: { phoneNumber },
    });
    if (existing) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ error: AUTH_MESSAGES.PHONE_ALREADY_EXISTS });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        phoneNumber,
        firstName,
        lastName,
        password: hashedPassword,
        avatar,
      },
    });

    res
      .status(StatusCodes.CREATED)
      .json({ token: generateToken(newUser.id), user: sanitizeUser(newUser) });
  } catch {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: AUTH_MESSAGES.INTERNAL_ERROR });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    if (!password || !phoneNumber) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: AUTH_MESSAGES.MISSING_FIELDS });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { phoneNumber },
    });
    if (!user) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: AUTH_MESSAGES.INVALID_CREDENTIALS });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: AUTH_MESSAGES.INVALID_CREDENTIALS });
      return;
    }

    res.json({ token: generateToken(user.id), user: sanitizeUser(user) });
  } catch {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: AUTH_MESSAGES.INTERNAL_ERROR });
  }
});

export default router;
