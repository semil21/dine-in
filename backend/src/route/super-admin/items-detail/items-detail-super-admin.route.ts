import express from "express";
import {
  createNewItemDetail,
  getAllItemsOfUser,
} from "../../../controller/super-admin/items-detail/items-detail-super-admin.controller";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";

const itemDetailRouter = express.Router();

itemDetailRouter.get(
  "/items/:userId",
  verifySuperAdminToken,
  getAllItemsOfUser,
);

itemDetailRouter.post("/create", verifySuperAdminToken, createNewItemDetail);

export default itemDetailRouter;
