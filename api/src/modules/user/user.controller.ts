import type { Request, Response } from 'express';
import { UserRepository } from './user.repository';
import { BaseController } from '@tscc/core';

export class UserController extends BaseController {
  constructor(protected userRepository: UserRepository) {
    super();
  }
  /**
   * Read a list of users
   */
  async getAll(req: Request, res: Response) {
    return res.json({
      data: await this.userRepository.getAll(),
    });
  }

  /**
   * Read a single user
   */
  get(req: Request, res: Response) {
    res.json({ message: 'User' });
  }

  /**
   * Create a new user
   */
  create(req: Request, res: Response) {
    res.json({ message: 'User created' });
  }

  /**
   * Update a user
   */
  update(req: Request, res: Response) {
    res.json({ message: 'User updated' });
  }

  /**
   * Delete a user
   */
  delete(req: Request, res: Response) {
    res.json({ message: 'User deleted' });
  }
}
