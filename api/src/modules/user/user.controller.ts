import type { Request, Response } from 'express';
import { UserRepository } from './user.repository';
import { BaseController, BaseResponse } from '@tscc/core';
import { UserModel } from './user.model';

export class UserController extends BaseController {
  constructor(protected userRepository: UserRepository) {
    super();
  }
  /**
   * Read a list of users
   */
  async getAll(
    req: Request,
    res: Response
  ): Promise<BaseResponse<UserModel[]>> {
    return {
      data: await this.userRepository.getAll(),
    };
  }

  /**
   * Read a single user
   */
  async get(req: Request, res: Response): Promise<BaseResponse<UserModel>> {
    return {
      data: await this.userRepository.get(req.params.id),
    };
  }

  /**
   * Create a new user
   */
  async create(req: Request, res: Response): Promise<BaseResponse> {
    await this.userRepository.create(req.body);
    return {
      message: 'User created successfully',
    };
  }

  /**
   * Update a user
   */
  async update(req: Request, res: Response): Promise<BaseResponse> {
    await this.userRepository.update({
      ...req.body,
      id: req.params.id,
    });
    return {
      message: 'User updated successfully',
    };
  }

  /**
   * Delete a user
   */
  async delete(req: Request, res: Response): Promise<BaseResponse> {
    await this.userRepository.delete(req.params.id);
    return {
      message: 'User deleted successfully',
    };
  }
}
