import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_PASSWORD } = process.env;
const { DB_USER } = process.env;
const { DB_NAME } = process.env;

export const db = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  port: 5432,

  define: {
    freezeTableName: true,
    timestamps: false
  }
});
