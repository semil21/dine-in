import express from "express";
import verifyUltraAdminToken from "../../../middleware/ultra-admin/ultra-admin.middleware";
import {
  createNewMasterItem,
  updateMasterItemStatus,
} from "../../../controller/ultra-admin/master-item/master-item.controller";

const ultraAdminMasterItemRouter = express.Router();

ultraAdminMasterItemRouter.post(
  "/create",
  verifyUltraAdminToken,
  createNewMasterItem,
);

ultraAdminMasterItemRouter.put(
  "/update-status/:masterItemId",
  verifyUltraAdminToken,
  updateMasterItemStatus,
);

export default ultraAdminMasterItemRouter;
