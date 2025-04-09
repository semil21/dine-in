import { Request, Response } from "express";
import NewOrders from "../../../schema/admin/new-order/new-order.schema";
export const updatePaymentStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    const updateOrderRecord = await NewOrders.findByIdAndUpdate(
      { _id: orderId },
      req.body,
      { new: true },
    );

    if (updateOrderRecord) {
      res.status(200).send({ result: updateOrderRecord });
    } else {
      res.status(400).send({ response: "Failed to update payment details" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to update payment details" });
  }
};
