import express from 'express';
import { TransactionController } from '../controllers/transaction.controller';

const router = express.Router();
const transactionController = new TransactionController();

router.route('/').get(transactionController.get);

export default router;
