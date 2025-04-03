import { Request, Response } from "express";
import Items from "../../../schema/super-admin/items/items.schema";
import mongoose from "mongoose";
import { getAllUserItemsUtils } from "../../../utils/super-admin/get-all-user-items.utils";

export const createNewItemDetail = async (req: Request, res: Response) => {
  try {
    req.body.user = req.body.id;
    const saveNewItemDetail = await Items.create(req.body);

    if (saveNewItemDetail) {
      res.status(200).send({ response: saveNewItemDetail });
    } else {
      res.status(400).send({ response: "Failed to add new item detail" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to add new item detail" });
  }
};

export const getAllItemsOfUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const fetchAllUserItemsPipeline = getAllUserItemsUtils(userId);

    const fetchAllUserItems = await Items.aggregate(fetchAllUserItemsPipeline);

    if (fetchAllUserItems) {
      res.status(200).send({ response: fetchAllUserItems });
    } else {
      res.status(400).send({ response: "Failed to fetch all items of user" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to get all items of user" });
  }
};
