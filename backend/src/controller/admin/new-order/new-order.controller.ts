import { Request, Response } from "express";
import NewOrders from "../../../schema/admin/new-order/new-order.schema";
import { getAllPendingOrdersOfRestaurantUtils } from "../../../utils/admin/get-all-pending-orders.utils";

export const createNewOrder = async (req: Request, res: Response) => {
  try {
    req.body.admin = req.body.id;
    req.body.restaurant = req.body.restaurant;
    delete req.body.id;

    const saveNewOrder = await NewOrders.create(req.body);

    if (saveNewOrder) {
      res.status(200).send({ response: saveNewOrder });
    } else {
      res.status(400).send({ response: "Failed to create new order" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to create new order" });
  }
};

export const getAllPedningOrderOFRestaurant = async (
  req: Request,
  res: Response,
) => {
  try {
    const { restaurant } = req.body;
    const allPendingOrderPipeline =
      getAllPendingOrdersOfRestaurantUtils(restaurant);

    const fetchAllPendngOrdersPipeline = await NewOrders.aggregate(
      allPendingOrderPipeline,
    );

    if (fetchAllPendngOrdersPipeline) {
      res.status(200).send({ response: fetchAllPendngOrdersPipeline });
    } else {
      res.status(400).send({ response: "Failed to get all pending order" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to get all pending order" });
  }
};
