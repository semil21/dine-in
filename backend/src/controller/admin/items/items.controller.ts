import { Request, Response } from "express";
import Items from "../../../schema/super-admin/items/items.schema";
import { getActiveItemsUtils } from "../../../utils/admin/get-active-items.utils";

export const getActiveItems = async (req: Request, res: Response) => {
  try {
    const { restaurant } = req.body;

    const getActiveItemPipeline = getActiveItemsUtils(restaurant);

    const getActiveItemRecord = await Items.aggregate(getActiveItemPipeline);

    if (getActiveItemRecord) {
      res.status(200).send({ response: getActiveItemRecord });
    } else {
      res
        .status(400)
        .send({ response: "Failed to get all items of a restaurant" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to get all active items" });
  }
};
