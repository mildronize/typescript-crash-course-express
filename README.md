# TypeScript Crash Course

## Introduction

Recently, I've been preparing a private course to teach TypeScript as a crash course within the company. I plan to release recorded videos of the course eventually.

The course will start by writing an Express Node.js application from scratch and then gradually refactor it to make it more DRY (Don't Repeat Yourself) and type-safe.

Without TypeScript, refactoring can become quite tedious and less enjoyable. I believe this course will provide a great learning experience for those interested in TypeScript.

The target audience for this course is expected to have a background in .NET C# and/or React, with a rough split of 60/40. We won't spend too much time on Object-Oriented Programming (OOP) concepts, as the audience should already be familiar with them.

The main goal of the course is to teach how to build type-safe backend APIs, validate requests, and implement a global error handler (eliminating the need for try-catch blocks in controller handlers).

Stay tuned, as I'll be sharing portions of the course (although not covering end-to-end type-safety, as that would be too in-depth for this crash course).

## Teaching Checkpoints

You can check out different branches corresponding to the teaching checkpoints as follows:

1. `backend-starter` - Setting up a TypeScript project with a monorepo structure using Nx.
2. `backend-phase-1` - Writing a basic Express API for CRUD operations on user data, using a simple JSON file as the database.
3. `backend-phase-2-global-error-and-response` - Ensuring consistent response models across routes and implementing a global error handler middleware to handle errors and provide consistent error responses.
4. `backend-phase-3-typed-route` - Validating requests (query, params, and body) using the Zod library to achieve type-safety at compile-time and runtime. A helper function is created to generate type-safe route endpoints.

## Course Outcome

By the end of the course, your code will be much cleaner because the controllers will handle data validation and provide type-safety when writing controller routes. Additionally, you won't need to handle try-catch blocks for each route separately, and you'll be able to auto-register routes with Express.

Example of writing a controller:

```ts
export class UserController extends BaseController {
  constructor(protected userRepository: UserRepository) {
    super();
  }

  /**
   * Create a new user
   */
  create = route
    .post('/')
    .body(
      z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .handler(async ({ body }) => {
      await this.userRepository.create(body);
      return {
        message: 'User created successfully',
      };
    });
}
```

Example of registering routes:

You can register all routes in a controller like this:

```ts
const app = express();
app.use('/users', new Router().registerClassRoutes(userController).instance);
```

## Nx Manual

### How to create a new project

```bash
npm add --global nx@latest
pnpx create-nx-workspace@latest tscc --preset=ts
```

### How to create a new node application

```bash
nx add @nx/node
nx g @nx/node:application api
```

### How to create a new library

```bash
nx g @nx/node:lib core
```
