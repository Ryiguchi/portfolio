import mongoose from 'mongoose';
import 'dotenv/config';

import { CustomError } from './error-handling.helpers';

import { EErrorMessage } from '@/lib/types/enums.types';

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
  } catch (error) {
    throw new CustomError(EErrorMessage.CONNECT, 500);
  }
};

export const closeConnection = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    throw new CustomError(EErrorMessage.DISCONNECT, 500);
  }
};
