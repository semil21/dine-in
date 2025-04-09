import { Request, Response } from "express";
import { orderCheckoutUtils } from "../../../utils/admin/order-checkout.utils";
import NewOrderDetail from "../../../schema/admin/new-order-detail/new-order-detail.schema";
import NewOrders from "../../../schema/admin/new-order/new-order.schema";

export const orderCheckout = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const populateOrderDetailsPipeline = orderCheckoutUtils(orderId);

    const fetchOrderDetails = await NewOrderDetail.aggregate(
      populateOrderDetailsPipeline,
    );

    const totalBill = await fetchOrderDetails?.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.item_price * currentValue.quantity;
      },
      0,
    );

    const [stateGst, centralGst] = await Promise.all([
      totalBill * 0.09,
      totalBill * 0.09,
    ]);

    const updateTotal = await NewOrders.findByIdAndUpdate(
      { _id: orderId },
      { total: totalBill, GST: stateGst, IGST: centralGst },
      { new: true },
    );

    const grandTotal = totalBill + stateGst + centralGst;

    res.send({
      result: fetchOrderDetails,
      total: totalBill,
      stateGst: stateGst,
      centralGst: centralGst,
      grandTotal: grandTotal,
    });
  } catch (error) {
    res
      .status(500)
      .send({ result: "Server error, failed to get all pending order" });
  }
};
