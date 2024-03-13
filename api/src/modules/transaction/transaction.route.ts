import express from 'express';
import { TransactionController } from './transaction.controller';
import { TransactionRepository } from './transaction.repository';
import { TransactionModel } from './transaction.model';
import { v4 as uuidv4 } from 'uuid';
import { Database } from '@tscc/core';

const router = express.Router();

const db = new Database<TransactionModel>('transactions', {
  defaultData: [
    {
      id: uuidv4(),
      date: new Date().toISOString(),
      description: 'First Transaction',
      amount: 100,
    },
  ],
});
const transactionRepository = new TransactionRepository(db);
const transactionController = new TransactionController(transactionRepository);

router.route('/').get(transactionController.getAll);
router.route('/:id').get(transactionController.get);
router.route('/').post(transactionController.create);
router.route('/:id').put(transactionController.update);
router.route('/:id').delete(transactionController.delete);

export default router;
