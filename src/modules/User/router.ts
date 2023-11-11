import { Router } from 'express';
import { userController } from './controller/user-controller';

const router = Router();
const baseUrl = '/user';

router.get(`${baseUrl}/read`, userController.read);
router.post(`${baseUrl}/create`, userController.create);

export const userRouter = router;
