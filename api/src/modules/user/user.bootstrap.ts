import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserModel } from './user.model';
import { v4 as uuidv4 } from 'uuid';
import { Database, TypedRoute } from '@tscc/core';

export const route = new TypedRoute();
const db = new Database<UserModel>('users', {
  defaultData: [
    {
      id: uuidv4(),
      username: 'firstuser',
      password: 'password',
      email: 'first@email.com',
    },
  ],
});
const userRepository = new UserRepository(db);
export const userController = new UserController(userRepository);
