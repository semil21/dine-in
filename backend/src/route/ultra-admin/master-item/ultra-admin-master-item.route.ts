import express from "express";
import verifyUltraAdminToken from "../../../middleware/ultra-admin/ultra-admin.middleware";
import {
  createNewMasterItem,
  getAllMasterItems,
  updateMasterItemStatus,
} from "../../../controller/ultra-admin/master-item/ultra-admin-master-item.controller";

const ultraAdminMasterItemRouter = express.Router();

ultraAdminMasterItemRouter.get("/", verifyUltraAdminToken, getAllMasterItems);

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
