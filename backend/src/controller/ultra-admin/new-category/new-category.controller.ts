import { Request, Response } from "express";

export const getNewCategoriesRequest = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to get all new categories" });
  }
};
