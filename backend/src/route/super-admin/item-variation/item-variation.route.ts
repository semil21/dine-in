import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  getAllVariationsOfItem,
  newItemVariation,
} from "../../../controller/super-admin/item-variation/item-varistion.controller";

const itemVariationSuperAdminRouter = express.Router();

itemVariationSuperAdminRouter.post(
  "/create",
  verifySuperAdminToken,
  newItemVariation,
);

itemVariationSuperAdminRouter.get(
  "/get-variations/:itemId",
  verifySuperAdminToken,
  getAllVariationsOfItem,
);

export default itemVariationSuperAdminRouter;
