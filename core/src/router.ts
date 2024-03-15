import type { Request, Response, NextFunction, RequestHandler } from 'express';
import express from 'express';

export const catchAsync =
  (fn: (...args: any[]) => any) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };

export class Router {
  constructor(public readonly instance: express.Router = express.Router()) {}

  private extractHandlers(handlers: RequestHandler[]) {
    const handler = handlers[handlers.length - 1];
    const middlewares = handlers.slice(0, handlers.length - 1);
    return { handler, middlewares };
  }

  get(path: string, ...handlers: RequestHandler[]) {
    const { handler, middlewares } = this.extractHandlers(handlers);
    this.instance.route(path).get(middlewares, catchAsync(handler));
  }

  post(path: string, ...handlers: RequestHandler[]) {
    const { handler, middlewares } = this.extractHandlers(handlers);
    this.instance.route(path).post(middlewares, catchAsync(handler));
  }

  put(path: string, ...handlers: RequestHandler[]) {
    const { handler, middlewares } = this.extractHandlers(handlers);
    this.instance.route(path).put(middlewares, catchAsync(handler));
  }

  delete(path: string, ...handlers: RequestHandler[]) {
    const { handler, middlewares } = this.extractHandlers(handlers);
    this.instance.route(path).delete(middlewares, catchAsync(handler));
  }
}
