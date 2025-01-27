import express from 'express';
import { config } from 'dotenv';
import logger from './logger/logger.js';
import connectDb from './db/connectDb.js';
import rootRouter from './routes/routes.js';

config();
connectDb();
const app = express();

let PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/api/v1', rootRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Guestara backend');
});

app.listen(PORT, () => {
  logger.info(`Server is running at ${PORT}`);
});
