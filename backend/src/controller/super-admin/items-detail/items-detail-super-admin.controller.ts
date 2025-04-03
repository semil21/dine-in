import { Request, Response } from "express";
import ItemDetails from "../../../schema/super-admin/items-detail/items-detail.schema";
import mongoose from "mongoose";

export const createNewItemDetail = async (req: Request, res: Response) => {
  try {
    req.body.user = req.body.id;
    const saveNewItemDetail = await ItemDetails.create(req.body);

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

    const fetchAllItemOfUserPipeline = [
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
        },
      },
    ];

    const fetchAllUserItms = await ItemDetails.aggregate(
      fetchAllItemOfUserPipeline,
    );

    if (fetchAllUserItms) {
      res.status(200).send({ response: fetchAllUserItms });
    } else {
      res.status(400).send({ response: "Failed to fetch all items of user" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to get all items of user" });
  }
};
