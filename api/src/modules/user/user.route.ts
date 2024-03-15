import { userController } from './user.bootstrap';
import { Router } from '@tscc/core';

const router = new Router();

router.get('/', userController.getAll);
router.get('/:id', userController.get);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router.instance;
