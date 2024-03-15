import { userController } from './user.bootstrap';
import { Router } from '@tscc/core';

const router = new Router();

router.get(userController.getAll.path, userController.getAll.handler);
router.get(userController.get.path, userController.get.handler);
router.post(userController.create.path, userController.create.handler);
router.put(userController.update.path, userController.update.handler);
router.delete(userController.delete.path, userController.delete.handler);

export default router.instance;
