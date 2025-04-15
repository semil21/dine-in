import express from "express";
import verifyUltraAdminToken from "../../../middleware/ultra-admin/ultra-admin.middleware";
import { getDashBoardCount } from "../../../controller/ultra-admin/dashboard/ultra-admin-dashboard.controller";

const ultraAdminDashboardRouter = express.Router();

ultraAdminDashboardRouter.get("/", verifyUltraAdminToken, getDashBoardCount);

export default ultraAdminDashboardRouter;
