
export interface BaseResponse<T = unknown> {
  message: string;
  success: boolean;
  data: T;
  traceStack?: string;
}
