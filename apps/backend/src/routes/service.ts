import { Router, type IRouter } from 'express';
import { authenticate } from '../middleware/auth.js';
import { create, remove, update } from '../controllers/service.controller.js';

const router: IRouter = Router();

router.post('/services', authenticate, create);
router.delete('/services/:id', authenticate, remove);
router.put('/services/:id', authenticate, update);

export default router;
