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

export const getUtilitiesById = async (req: Request, res:Response): Promise<Response> => {
  try {
    const id = req.params.id;
    const utilities = await Utilities.findByPk(id);

    if(utilities === null) {
      return res.json({ msg: `No record with id '${id}' was found` });
    } else
      return res.status(200).json(utilities);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

export const createUtilities = async (req: Request, res:Response): Promise<Response> => {
  try {
    const userid = req.body.userid;
    const findRecord = await Utilities.findAll({ where: { userid: userid } });
    const parseData = JSON.stringify(findRecord);

    const utilitie = {
      userid: req.body.userid,
      utilitytype: req.body.utilitytype,
      valueday: req.body.valueday,
      valuenight: req.body.valuenight,
      valuegeneral: req.body.valuegeneral,
      month: req.body.month,
      year: req.body.year
    };

    if (parseData.includes(userid)) {
      return res.status(409).json({ msg: `Can't create user with id ${userid}, since it already exists` });
    }

    const response = await Utilities.create(utilitie);
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: '(500) Internal server error' });
  }
};

export const updateUtilities = async (req: Request, res:Response): Promise<Response> => {
  try {
    const id = req.params.id;
    await Utilities.update(req.body, { where: { id: id } });
    const recordToUpdate = await Utilities.findByPk(id);

    if (recordToUpdate === null) {
      return res.json({ msg: `Can't update record with id '${id}', since it doesn't exist` })
    } else
      return res.status(200).json(recordToUpdate);
  } catch (error) {
    return res.status(500).json({ msg: '(500) Internal server error' });
  }
};

export const deleteUtilitiesById = async (req: Request, res:Response): Promise<Response> => {
  try {
    const id = req.params.id;
    const recordById = await Utilities.findByPk(id);
    await Utilities.destroy({ where: { id: id } });
    if (recordById === null) {
      return res.json({ msg: `Can't remove record with id '${id}', since it doesn't exist` });
    } else
      return res.status(200).json({ msg: `Record with id '${id}' has been removed successfully` });
  } catch (error) {
    return res.status(500).json({ msg: '(500) Internal server error' });
  }
};

export const deleteUtilities = async (req: Request, res:Response): Promise<Response> => {
  try {
    const allRecords = Utilities.findAll();
    await Utilities.destroy({ where: {}, truncate: false });
    if ((await allRecords).length === 0) {
      return res.json({ msg: 'No records to remove' });
    } else
      return res.status(200).json({ msg: 'All records have been removed successfully' });
  } catch (error) {
    return res.status(500).json({ msg: '(500) Internal server error' });
  }
};
