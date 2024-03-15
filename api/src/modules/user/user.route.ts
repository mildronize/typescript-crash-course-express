import { userController } from './user.bootstrap';
import { Router } from '@tscc/core';

export default new Router().registerClassRoutes(userController).instance;
