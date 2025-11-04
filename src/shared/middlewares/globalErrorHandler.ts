import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
import { ErrorMessages } from '../../core/config/enums/messages/messages';
import { HttpStatusCode } from '../../core/config/enums/HttpStatusCodes';

export function globalErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('--- ERROR CAPTURED IN HANDLER ---');
  console.log('Object type:', err.constructor.name);
  console.log('Message:', err.message);
  console.log('Is instance of AppError?', err instanceof AppError);

  if (err instanceof AppError) {
    const statusCode = (err as AppError).statusCode;
    console.log('Status Code do AppError:', statusCode);

    return res.status(statusCode).json({
      status: 'error',
      message: err.message || ErrorMessages.UNEXPECTED_ERROR,
    });
  }

  console.error(err);

  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: ErrorMessages.INTERNAL_SERVER_ERROR,
  });
}
