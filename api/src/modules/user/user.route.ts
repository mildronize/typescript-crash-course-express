import { userController } from './user.bootstrap';
import { Router } from '@tscc/core';

const router = new Router();

router.registerClassRoutes(userController);

export default router.instance;
