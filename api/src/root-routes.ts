import type { Request, Response } from 'express';
import express from 'express';
import { userRoutes } from './modules/user';

const router = express.Router();

router.use('/users', userRoutes);

router.use('/', (req: Request, res: Response) => {
  res.json({ message: 'Home' });
});

export default router;
