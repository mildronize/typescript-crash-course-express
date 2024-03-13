import type { Request, Response } from 'express';

export class TransactionController {
  get(req: Request, res: Response) {
    res.json({ message: 'Transaction' });
  }
}
