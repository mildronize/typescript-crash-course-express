import type { Request, Response } from 'express';
import express from 'express';
import transactionRoutes from './transaction.route';

const router = express.Router();

router.use('/transaction', transactionRoutes);

router.use('/', (req: Request, res: Response) => {
  res.json({ message: 'Home' });
});


export default router;
