import { Request, Response, NextFunction } from 'express';
import { config } from '@/config';

interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export const errorMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error('Error:', {
    statusCode,
    message,
    path: req.path,
    stack: config.env === 'development' ? err.stack : undefined,
  });

  res.status(statusCode).json({
    success: false,
    error: {
      code: statusCode,
      message,
      ...(config.env === 'development' && { stack: err.stack }),
    },
    timestamp: new Date().toISOString(),
  });
};
