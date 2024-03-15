import { UserModel } from './user.model';
import { Database } from '@tscc/core';

export class UserRepository {
  constructor(protected db: Database<UserModel>) {}

  async getAll() {
    return this.db.readAll();
  }

  async get(id: string) {
    return this.db.read(id);
  }

  async create(input: Omit<UserModel, 'id'>) {
    return this.db.insert(input);
  }

  async update(input: UserModel) {
    return this.db.update(input);
  }

  async delete(id: string) {
    return this.db.delete(id);
  }
}
