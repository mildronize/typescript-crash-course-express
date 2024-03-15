export class HttpError extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

export class ValidationError extends HttpError {
  constructor(public message: string) {
    super(400, message);
    this.name = 'ValidationError';
  }
}
