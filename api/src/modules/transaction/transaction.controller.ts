import type { Request, Response } from 'express';
import { TransactionRepository } from './transaction.repository';
import { BaseController } from '@tscc/core';

export class TransactionController extends BaseController {
  constructor(protected transactionRepository: TransactionRepository) {
    super();
  }
  /**
   * Read a list of transactions
   */
  async getAll(req: Request, res: Response) {
    return res.json({
      data: await this.transactionRepository.getAll(),
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
