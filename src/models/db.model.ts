import { DataTypes } from 'sequelize';
import { db } from '../database/db.config';

export const Utilities = db.define('utilities', {
  userid: {
    type: DataTypes.STRING
  },
  utilitytype: {
    type: DataTypes.STRING
  },
  valueday: {
    type: DataTypes.NUMBER
  },
  valuenight: {
    type: DataTypes.NUMBER
  },
  valuegeneral: {
    type: DataTypes.NUMBER
  },
  month: {
    type: DataTypes.NUMBER
  },
  year: {
    type: DataTypes.NUMBER
  }
});
