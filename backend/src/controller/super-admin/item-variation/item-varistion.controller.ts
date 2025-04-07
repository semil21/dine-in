import { Request, Response } from "express";
import ItemVariation from "../../../schema/super-admin/item-variation/item-variation.schema";
import mongoose from "mongoose";
import { fetchItemsVariationsUtils } from "../../../utils/super-admin/get-all-variations-of-items.utils";

export const newItemVariation = async (req: Request, res: Response) => {
  try {
    const saveNewItemVariation = await ItemVariation.create(req.body);

    if (saveNewItemVariation) {
      res.status(200).send({ result: saveNewItemVariation });
    } else
      [res.status(400).send({ result: "Failed to add new item variation" })];
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to save new item variation." });
  }
};

export const getAllVariationsOfItem = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;

    const fetchItemVariationsPipeline = await fetchItemsVariationsUtils(itemId);

    const fetchItemsVariations = await ItemVariation.aggregate(
      fetchItemVariationsPipeline,
    );

    if (fetchItemsVariations) {
      res.status(200).send({ result: fetchItemsVariations });
    } else {
      res
        .status(400)
        .send({ result: "Failed to get all variations of a item" });
    }
  } catch (error) {
    res.status(500).send({
      result: "server error, failed to get all variations of items",
    });
  }
};

export const updateItemVariation = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;

    const updateItemVariationRecord = await ItemVariation.findByIdAndUpdate(
      { _id: itemId },
      req.body,
      { new: true },
    );

    if (updateItemVariationRecord) {
      res.status(200).send({ respose: updateItemVariationRecord });
    } else {
      res.status(400).send({ result: "Failed to update item variation data" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to update item variation" });
  }
};

export const updateItemVAriationStatus = async (
  req: Request,
  res: Response,
) => {
  try {
    const { itemId } = req.params;

    const { status } = req.body;

    const updatedStatus = status === true ? false : true;

    const updateRecordStatus = await ItemVariation.findByIdAndUpdate(
      { _id: itemId },
      { status: updatedStatus },
      { new: true },
    );

    if (updateRecordStatus) {
      res.status(200).send({ result: updateRecordStatus?.status });
    } else {
      res.status(400).send({ result: "Failed to update item variaion status" });
    }
  } catch (error) {
    res.status(500).send({
      result: "Server error, failed to update item variation status",
    });
  }
};
