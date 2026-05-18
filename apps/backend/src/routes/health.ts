import { Router, type IRouter } from 'express';
import { check } from '../controllers/health.controller.js';

const router: IRouter = Router();

router.get('/', check);

export default router;
