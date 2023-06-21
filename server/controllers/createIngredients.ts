import { Ingredients } from "../models/models";
import { Request, Response } from 'express';
import { CreatedIngredient } from '../types';

export const createIngredients = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name ,amount, type } = req.body;

    const ingredient: CreatedIngredient = await Ingredients({
      name,
      amount,
      type,
    }).save();
    res.status(201).send(ingredient);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '500, Server Error' });
  }
};