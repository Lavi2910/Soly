import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';
import authRouter from './routes/auth.js';
import businessRouter from './routes/business.js';
import serviceRouter from './routes/service.js';
import appointmentRouter from './routes/appointment.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRouter);

app.use('/api/auth', authRouter);
app.use('/api', businessRouter);
app.use('/api', serviceRouter);
app.use('/api', appointmentRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
