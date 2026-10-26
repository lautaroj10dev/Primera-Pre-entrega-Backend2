import { Router } from 'express';
import eventsRouter from './events.router.js';
import sessionsRouter from './sessions.router.js';
import { getHealth } from '../controllers/health.controller.js';

const router = Router();

router.get('/health', getHealth);
router.use('/events', eventsRouter);
router.use('/sessions', sessionsRouter);

export default router;
