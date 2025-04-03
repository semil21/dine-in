import express from "express";

import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  createNewItemDetail,
  getAllItemsOfUser,
} from "../../../controller/super-admin/items/items-super-admin.controller";

const itemRouter = express.Router();

itemRouter.get("/items/:userId", verifySuperAdminToken, getAllItemsOfUser);

itemRouter.post("/create", verifySuperAdminToken, createNewItemDetail);

export default itemRouter;
