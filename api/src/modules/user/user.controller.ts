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
  async get(req: Request, res: Response) {
    return res.json({
      data: await this.userRepository.get(req.params.id),
    });
  }

  /**
   * Create a new user
   */
  async create(req: Request, res: Response) {
    return res.json({
      data: await this.userRepository.create(req.body),
    });
  }

  /**
   * Update a user
   */
  async update(req: Request, res: Response) {
    return res.json({
      data: await this.userRepository.update({
        ...req.body,
        id: req.params.id,
      }),
    });
  }

  /**
   * Delete a user
   */
  async delete(req: Request, res: Response) {
    return res.json({
      data: await this.userRepository.delete(req.params.id),
    });
  }
}
