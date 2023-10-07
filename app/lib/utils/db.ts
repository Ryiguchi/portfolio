import mongoose from 'mongoose';
import 'dotenv/config';

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.3ypc1zy.mongodb.net/data?retryWrites=true&w=majority`
    );

    console.log('Connected to MongoDB...');
  } catch (error) {
    throw new Error('There was an error connecting to the DB!');
  }
};

export const closeConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.log('Error disconnecting from MongoDB');
  }
};
