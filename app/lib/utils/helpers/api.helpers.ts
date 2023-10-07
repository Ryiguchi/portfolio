import { ICertDocument } from '@/app/models/certModel';
import { ICertificateData } from '@/app/lib/types/types';
import { Document } from 'mongoose';

export const sendResponseError = (statusCode: number, message: string) => {
  return Response.json(
    {
      status: 'failed',
      message: message,
    },
    {
      status: statusCode,
    }
  );
};
