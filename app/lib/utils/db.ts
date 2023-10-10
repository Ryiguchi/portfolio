import mongoose from 'mongoose';
import 'dotenv/config';

import { EErrorMessage } from '@/types/enums.types';

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
  } catch (error) {
    throw new Error(EErrorMessage.DB);
  }
};

export const closeConnection = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log('Error disconnecting from MongoDB');
  }
};
