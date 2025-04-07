import { Request, Response } from "express";
import NewOrderDetail from "../../../schema/admin/new-order-detail/new-order-detail.schema";
import { getAllOrderOfOrderDetails } from "../../../utils/admin/get-all-order-details-of-order.utils";

export const createNewOrderDetail = async (req: Request, res: Response) => {
  try {
    const saveNewOrderDetail = await NewOrderDetail.create(req.body);

    if (saveNewOrderDetail) {
      res.status(200).send({ result: saveNewOrderDetail });
    } else {
      res.status(400).send({ result: "Failed to create new order detail" });
    }
  } catch (error) {
    res
      .status(200)
      .send({ result: "Server error, failed to create new order detail" });
  }
};

export const getAllOrderDetailOfOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    const allOrderDetailofOrderPipeline = getAllOrderOfOrderDetails(orderId);

    const fecthAllOrderDetailofOrder = await NewOrderDetail.aggregate(
      allOrderDetailofOrderPipeline,
    );

    if (fecthAllOrderDetailofOrder) {
      res.status(200).send({ result: fecthAllOrderDetailofOrder });
    }
  } catch (error) {
    res.status(500).send({
      result: "Server error, failed to fetch all new order details",
    });
  }
};

export const updateOrderDetailOfOrder = async (req: Request, res: Response) => {
  try {
    const { orderDetailId } = req.params;

    const updateOrderDetailOfOrderRecord =
      await NewOrderDetail.findByIdAndUpdate({ _id: orderDetailId }, req.body, {
        new: true,
      });

    if (updateOrderDetailOfOrderRecord) {
      res.status(200).send({ result: updateOrderDetailOfOrderRecord });
    } else {
      res
        .status(400)
        .send({ result: "Failed to update order details of order" });
    }
  } catch (error) {
    res.status(500).send({
      result: "Server error, failed to update order detail of a order",
      error: error,
    });
  }
};
