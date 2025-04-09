import express from "express";
import verifyAdminToken from "../../../middleware/admin/admin.middleware";
import { updatePaymentStatus } from "../../../controller/admin/payment/payment.controller";

const adminPaymentRouter = express.Router();

adminPaymentRouter.post(
  "/checkout/:orderId",
  verifyAdminToken,
  updatePaymentStatus,
);

export default adminPaymentRouter;
