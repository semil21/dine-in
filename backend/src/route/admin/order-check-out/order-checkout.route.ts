import exrpress from "express";
import verifyAdminToken from "../../../middleware/admin/admin.middleware";
import { orderCheckout } from "../../../controller/admin/order-checkout/order-checkout.controller";

const adminOrderCheckoutRouter = exrpress.Router();

adminOrderCheckoutRouter.post(
  "/create/:orderId",
  verifyAdminToken,
  orderCheckout,
);

export default adminOrderCheckoutRouter;
