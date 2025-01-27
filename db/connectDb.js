import mongoose from 'mongoose';
import logger from '../logger/logger.js';

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    logger.info('Database connected successfully!');
  } catch (err) {
    logger.error('Failed to connect to database');
  }
};

export default connectDb;
