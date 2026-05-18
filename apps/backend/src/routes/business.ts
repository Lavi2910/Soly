import { Router, type IRouter } from 'express';
import { authenticate } from '../middleware/auth.js';
import {
  create,
  getById,
  update,
  getAll,
} from '../controllers/business.controller.js';

const router: IRouter = Router();

router.post('/businesses', authenticate, create);
router.get('/businesses', getAll);
router.get('/businesses/:id', getById);
router.put('/businesses/:id', authenticate, update);

export default router;
