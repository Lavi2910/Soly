import { Router, type IRouter } from 'express';
import { authenticate } from '../middleware/auth.js';
import {
  create,
  getAll,
  update,
} from '../controllers/appointment.controller.js';

const router: IRouter = Router();

router.post('/appointments', authenticate, create);
router.get('/appointments', authenticate, getAll);
router.put('/appointments/:id', authenticate, update);

export default router;
