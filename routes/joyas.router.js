import { Router } from 'express';
import { getJoyasLimitController } from '../controllers/joyas.controller.js';
import {logger} from '../middleware/logger.js';

const router = Router();

router.get("/joyas",logger, getJoyasLimitController);


export default router;