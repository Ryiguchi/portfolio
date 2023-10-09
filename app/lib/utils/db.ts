import mongoose from 'mongoose';
import 'dotenv/config';

import { EErrorMessage } from '@/types/enums.types';

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.3ypc1zy.mongodb.net/data?retryWrites=true&w=majority`
    );
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
