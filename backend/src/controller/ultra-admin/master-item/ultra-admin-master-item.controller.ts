import { Request, Response } from "express";
import MasterItem from "../../../schema/ultra-admin/master-item/master-item.schema";

export const createNewMasterItem = async (req: Request, res: Response) => {
  try {
    const saveMasterItem = await MasterItem.create(req.body);

    if (saveMasterItem) {
      res.status(200).send({ response: saveMasterItem });
    } else {
      res.status(400).send({ response: "Failed to add new master item" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to add new master item" });
  }
};

export const getAllMasterItems = async (req: Request, res: Response) => {
  try {
    const fetchAllMAsterItem = await MasterItem.find().lean();

    if (fetchAllMAsterItem) {
      res.status(200).send({ response: fetchAllMAsterItem });
    } else {
      res.status(400).send({ response: "Failed to fetch all master items" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to fetch all master items" });
  }
};

export const updateMasterItemStatus = async (req: Request, res: Response) => {
  try {
    const { masterItemId } = req.params;
    const { status } = req.body;

    const updatedStatus = status === true ? false : true;

    const updatedMasterItemStatus = await MasterItem.findByIdAndUpdate(
      { _id: masterItemId },
      { status: updatedStatus },
      { new: true },
    );

    if (updatedMasterItemStatus) {
      res.status(200).send({
        response: updatedMasterItemStatus?.status,
      });
    } else {
      res.status(400).send({ response: "Failed to update restaurant status" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to update master item status" });
  }
};
