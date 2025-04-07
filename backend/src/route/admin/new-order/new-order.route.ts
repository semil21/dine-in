import express from "express";
import verifyAdminToken from "../../../middleware/admin/admin.middleware";
import {
  createNewOrder,
  getAllPedningOrderOFRestaurant,
} from "../../../controller/admin/new-order/new-order.controller";

const adminNewOrderRouter = express.Router();

adminNewOrderRouter.get(
  "/get-all-pending-order",
  verifyAdminToken,
  getAllPedningOrderOFRestaurant,
);

adminNewOrderRouter.post("/create", verifyAdminToken, createNewOrder);

export default adminNewOrderRouter;
