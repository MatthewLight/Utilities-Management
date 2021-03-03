import { Request, Response } from 'express';
import { Utilities } from '../models/db.model';

export const getUtilities = async (req: Request, res:Response): Promise<Response> => {
  try {
    const queryObj = { ...req.query };
    const utilities = await Utilities.findAll({ where: queryObj });

    return res.status(200).json(utilities);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};
