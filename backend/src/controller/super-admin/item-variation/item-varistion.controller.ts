import { Request, Response } from "express";
import ItemVariation from "../../../schema/super-admin/item-variation/item-variation.schema";
import mongoose from "mongoose";
import { fetchItemsVariationsUtils } from "../../../utils/super-admin/get-all-variations-of-items.utils";

export const newItemVariation = async (req: Request, res: Response) => {
  try {
    const saveNewItemVariation = await ItemVariation.create(req.body);

    if (saveNewItemVariation) {
      res.status(200).send({ response: saveNewItemVariation });
    } else
      [res.status(400).send({ response: "Failed to add new item variation" })];
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to save new item variation." });
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
      res.status(200).send({ response: fetchItemsVariations });
    } else {
      res
        .status(400)
        .send({ response: "Failed to get all variations of a item" });
    }
  } catch (error) {
    res.status(500).send({
      response: "server error, failed to get all variations of items",
    });
  }
};
