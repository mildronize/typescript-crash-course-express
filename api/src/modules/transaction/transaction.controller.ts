import type { Request, Response } from 'express';
import { TransactionRepository } from './transaction.repository';
import autoBind from 'auto-bind';

export class TransactionController {
  constructor(protected transactionRepository: TransactionRepository) {
    autoBind(this);
  }
  /**
   * Read a list of transactions
   */
  getAll(req: Request, res: Response, next: any) {
    console.log('TransactionController.getAll', this.transactionRepository);
    return res.json({
      // data: await this.transactionRepository.getAll(),
      message: 'Transaction',
    });
  }

  /**
   * Read a single transaction
   */
  get(req: Request, res: Response) {
    res.json({ message: 'Transaction' });
  }

  /**
   * Create a new transaction
   */
  create(req: Request, res: Response) {
    res.json({ message: 'Transaction created' });
  }

  /**
   * Update a transaction
   */
  update(req: Request, res: Response) {
    res.json({ message: 'Transaction updated' });
  }

  /**
   * Delete a transaction
   */
  delete(req: Request, res: Response) {
    res.json({ message: 'Transaction deleted' });
  }
}
