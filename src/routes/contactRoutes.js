import { Router } from 'express';
import contactController from '../controllers/ContactController';

const router = new Router();

router.get('/', contactController.index);
router.post('/', contactController.sendEmail);

export default router;
