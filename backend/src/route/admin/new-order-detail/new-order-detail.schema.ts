import express from "express";
import { getAllOrderOfOrderDetails } from "../../../utils/admin/get-all-order-details-of-order.utils";
import verifyAdminToken from "../../../middleware/admin/admin.middleware";
import {
  createNewOrderDetail,
  getAllOrderDetailOfOrder,
  updateOrderDetailOfOrder,
} from "../../../controller/admin/new-order-detail/new-order-detail.controller";

const adminNewOrderDetail = express.Router();

adminNewOrderDetail.get(
  "/get-order-details/:orderId",
  verifyAdminToken,
  getAllOrderDetailOfOrder,
);

adminNewOrderDetail.post("/create", verifyAdminToken, createNewOrderDetail);

adminNewOrderDetail.put(
  "/update/:orderDetailId",
  verifyAdminToken,
  updateOrderDetailOfOrder,
);

export default adminNewOrderDetail;
