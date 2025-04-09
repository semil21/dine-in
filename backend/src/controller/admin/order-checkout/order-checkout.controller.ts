import { Request, Response } from "express";
import { orderCheckoutUtils } from "../../../utils/admin/order-checkout.utils";
import NewOrderDetail from "../../../schema/admin/new-order-detail/new-order-detail.schema";

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
    console.log("totalBill :", totalBill);

    const [stateGst, centralGst] = await Promise.all([
      totalBill * 0.09,
      totalBill * 0.09,
    ]);

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
