import { z } from 'zod';
import { BaseResponse } from './response';
import { MaybePromise } from './types';
import { Request, Response } from 'express';

export type TypedHandler<
  TQuery extends z.ZodTypeAny,
  TParams extends z.ZodTypeAny,
  TBody extends z.ZodTypeAny,
  TResponse extends BaseResponse = BaseResponse
> = (context: {
  query: z.infer<TQuery>;
  params: z.infer<TParams>;
  body: z.infer<TBody>;
  req: Request<z.infer<TParams>, any, z.infer<TBody>, z.infer<TQuery>>;
  res: Response<TResponse>;
}) => MaybePromise<TResponse>;

export class TypedRoute {

  get(path: string) {
    return new TypedRouteHandler(path);
  }

  post(path: string) {
    return new TypedRouteHandler(path);
  }

  put(path: string) {
    return new TypedRouteHandler(path);
  }

  delete(path: string) {
    return new TypedRouteHandler(path);
  }
}

export class TypedRouteHandler<
  RouteQuery extends z.ZodTypeAny,
  RouteParams extends z.ZodTypeAny,
  RouteBody extends z.ZodTypeAny
> {
  schema: {
    query?: z.ZodTypeAny;
    params?: z.ZodTypeAny;
    body?: z.ZodTypeAny;
  } = {};

  constructor(public readonly path: string) {}

  query<Query extends z.ZodTypeAny>(schema: Query) {
    this.schema.query = schema;
    return this as unknown as TypedRouteHandler<Query, RouteParams, RouteBody>;
  }

  params<Params extends z.ZodTypeAny>(schema: Params) {
    this.schema.params = schema;
    return this as unknown as TypedRouteHandler<RouteQuery, Params, RouteBody>;
  }

  body<Body extends z.ZodTypeAny>(schema: Body) {
    this.schema.body = schema;
    return this as unknown as TypedRouteHandler<RouteQuery, RouteParams, Body>;
  }

  handler(handler: TypedHandler<RouteQuery, RouteParams, RouteBody>) {
    const invokeHandler = async (req: Request, res: Response) => {
      const query = this.schema.query ? this.schema.query.parse(req.query) : undefined;
      const params = this.schema.params ? this.schema.params.parse(req.params) : undefined;
      const body = this.schema.body ? this.schema.body.parse(req.body) : undefined;
      return handler({ query, params, body, req, res });
    }
    return {
      path: this.path,
      handler: invokeHandler,
    };
  }
}
