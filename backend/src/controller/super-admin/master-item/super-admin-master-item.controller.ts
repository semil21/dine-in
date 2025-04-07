import { Reqeust, Response } from "express";
import MasterItem from "../../../schema/ultra-admin/master-item/master-item.schema";
import { getAllActiveMasterItemsPipeline } from "../../../utils/super-admin/get-all-active-master-items.utils";

export const createMasterItem = async (req: Request, res: Response) => {
  try {
    const saveNewMasterItem = await MasterItem.create(req.body);

    if (saveNewMasterItem) {
      res.status(200).send({ result: saveNewMasterItem });
    } else {
      res.status(400).send({ result: "Failed to add new master item" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to add new master item" });
  }
};

export const getAllActiveMAsterItems = async (req: Request, res: Response) => {
  try {
    const fetchAllItems = await MasterItem.aggregate(
      getAllActiveMasterItemsPipeline,
    );

    if (fetchAllItems) {
      res.status(200).send({ result: fetchAllItems });
    } else {
      res.status(400).send({ result: "Failed to fetch master items" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to fetch master items" });
  }
};
