import type { Request, Response } from 'express';
import express from 'express';
import { transactionRoutes } from './modules/transaction';

const router = express.Router();

// const transactionRoutes = await createTransactionRouter();

router.use('/transactions', transactionRoutes);

router.use('/', (req: Request, res: Response) => {
  res.json({ message: 'Home' });
});

export default router;
