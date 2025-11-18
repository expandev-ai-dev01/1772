export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    [key: string]: any;
    timestamp: string;
  };
}

export interface ErrorResponse {
  success: false;
  error: {
    code: number | string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

export const successResponse = <T>(
  data: T,
  metadata?: Omit<NonNullable<SuccessResponse<T>['metadata']>, 'timestamp'>
): SuccessResponse<T> => ({
  success: true,
  data,
  metadata: {
    ...metadata,
    timestamp: new Date().toISOString(),
  },
});

export const errorResponse = (
  message: string,
  code: number | string = 500,
  details?: any
): ErrorResponse => ({
  success: false,
  error: {
    code,
    message,
    details,
  },
  timestamp: new Date().toISOString(),
});
