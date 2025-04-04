import express from "express";
import { getActiveItems } from "../../../controller/admin/items/items.controller";
import verifyAdminToken from "../../../middleware/admin/admin.middleware";

const adminItemRouter = express.Router();

adminItemRouter.get("/get-items", verifyAdminToken, getActiveItems);

export default adminItemRouter;
