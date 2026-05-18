import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';
import authRouter from './routes/auth.js';
import businessRouter from './routes/business.js';
import serviceRouter from './routes/service.js';
import appointmentRouter from './routes/appointment.js';
import { db } from './lib/db.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRouter);

app.use('/api/auth', authRouter);
app.use('/api', businessRouter);
app.use('/api', serviceRouter);
app.use('/api', appointmentRouter);

app.listen(PORT, async () => {
  try {
    await db.command({ ping: 1 });
    await db
      .collection('users')
      .createIndex({ phoneNumber: 1 }, { unique: true });
    await db
      .collection('businesses')
      .createIndex({ ownerId: 1 }, { unique: true });
    await db
      .collection('appointments')
      .createIndex({ providerId: 1, time: 1, status: 1 });
    await db.collection('appointments').createIndex({ customerId: 1 });
    await db.collection('appointments').createIndex({ providerId: 1 });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('MongoDB connection failed:', error);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
