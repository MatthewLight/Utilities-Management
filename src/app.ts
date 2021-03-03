import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/routes';
import { db } from './database/db.config';

dotenv.config();

const app = express();

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = async() => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectDB();

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
