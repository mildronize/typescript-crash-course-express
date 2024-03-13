import { TransactionModel } from './transaction.model';
import { Database } from '@tscc/core';

export class TransactionRepository {
  constructor(protected db: Database<TransactionModel>) {}

  async getAll() {
    return this.db.readAll();
  }

  async get(id: string) {
    return this.db.read(id);
  }

  async create(input: TransactionModel) {
    return this.db.insert(input);
  }

  async update(input: TransactionModel) {
    return this.db.update(input);
  }

  async delete(id: string) {
    return this.db.delete(id);
  }
}
