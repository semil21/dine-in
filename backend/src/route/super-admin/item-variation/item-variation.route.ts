import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  getAllVariationsOfItem,
  newItemVariation,
  updateItemVariation,
  updateItemVAriationStatus,
} from "../../../controller/super-admin/item-variation/item-varistion.controller";

const itemVariationSuperAdminRouter = express.Router();

itemVariationSuperAdminRouter.get(
  "/get-variations/:itemId",
  verifySuperAdminToken,
  getAllVariationsOfItem,
);

itemVariationSuperAdminRouter.post(
  "/create",
  verifySuperAdminToken,
  newItemVariation,
);

itemVariationSuperAdminRouter.put(
  "/update-variation/:itemId",
  verifySuperAdminToken,
  updateItemVariation,
);

itemVariationSuperAdminRouter.put(
  "/update-status/:itemId",
  verifySuperAdminToken,
  updateItemVAriationStatus,
);

export default itemVariationSuperAdminRouter;
