import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  createMasterItem,
  getAllActiveMAsterItems,
} from "../../../controller/super-admin/master-item/super-admin-master-item.controller";

const superAdminMasterItemRouter = express.Router();

superAdminMasterItemRouter.get(
  "/",
  verifySuperAdminToken,
  getAllActiveMAsterItems,
);

superAdminMasterItemRouter.post(
  "/create",
  verifySuperAdminToken,
  createMasterItem,
);

export default superAdminMasterItemRouter;
