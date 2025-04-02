import { Reqeust, Response } from "express";
import MasterItem from "../../../schema/ultra-admin/master-item/master-item.schema";

export const createMasterItem = async (req: Request, res: Response) => {
  try {
    const saveNewMasterItem = await MasterItem.create(req.body);

    if (saveNewMasterItem) {
      res.status(200).send({ response: saveNewMasterItem });
    } else {
      res.status(400).send({ response: "Failed to add new master item" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to add new master item" });
  }
};

export const getAllActiveMAsterItems = async (req: Request, res: Response) => {
  try {
    const getAllActiveMAsterItemsPipeline = [
      {
        $match: {
          status: true,
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
        },
      },
    ];

    const fetchAllItems = await MasterItem.aggregate(
      getAllActiveMAsterItemsPipeline,
    );

    if (fetchAllItems) {
      res.status(200).send({ response: fetchAllItems });
    } else {
      res.status(400).send({ response: "Failed to fetch master items" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to fetch master items" });
  }
};
