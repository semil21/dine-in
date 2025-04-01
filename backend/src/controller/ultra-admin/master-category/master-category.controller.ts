import MasterCategory from "../../../schema/ultra-admin/master-category/master-category.schema";
import { Request, Response } from "express";

export const saveNewMasterCategory = async (req: Request, res: Response) => {
  try {
    const saveMasterCategoryRecord = await MasterCategory.create(req.body);

    if (saveMasterCategoryRecord) {
      res.status(200).send({ response: saveMasterCategoryRecord });
    } else {
      res.status(400).send({ response: "Failed to save new master category" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to save new master category" });
  }
};

export const getAllACtiveMasterCategory = async (
  req: Request,
  res: Response,
) => {
  try {
    const fetchRecords = await MasterCategory.find({ status: true }).lean();

    if (fetchRecords) {
      res.status(200).send({ response: fetchRecords });
    } else {
      res.status(400).send({ response: "Failed to fetch master category" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to fetch master category" });
  }
};

export const updateMasterCategoryStatus = async (
  req: Request,
  res: Response,
) => {
  try {
    const { categoryId } = req.params;
    const { status } = req.body;

    const updatedStatus = status === true ? false : true;

    const updatedCatgoryStatus = await MasterCategory.findByIdAndUpdate(
      { _id: categoryId },
      { status: updatedStatus },
      { new: true },
    );

    if (updatedCatgoryStatus) {
      res.status(200).send({
        status: updatedCatgoryStatus?.status,
        message: "Master category status updated successfully.",
      });
    } else {
      res
        .status(400)
        .send({ response: "Failed to update master category status" });
    }
  } catch (error) {
    res.status(500).send({
      response: "Server error, failed to update master category status",
    });
  }
};
