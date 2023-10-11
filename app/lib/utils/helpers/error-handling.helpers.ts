import { EErrorMessage } from '@/types/enums.types';
import { z } from 'zod';

export class CustomError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const zodErrorHandler = (error: any, defaultMessage: EErrorMessage) => {
  return error instanceof z.ZodError ? error.issues[0].message : defaultMessage;
};

export const sendResponseError = (error: any) => {
  const message = error.errors?.text.message || error.message;
  const statusCode = error.errors ? 400 : 500;

  return Response.json(
    {
      status: 'failed',
      message,
    },
    {
      status: statusCode,
    }
  );
};
