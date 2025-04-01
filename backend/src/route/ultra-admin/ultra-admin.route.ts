import express from "express";
import {
  saveNewUltraAdmin,
  ultraAdminLogin,
} from "../../controller/ultra-admin/ultra-admin.controller";

const ultraAdminRouter = express.Router();

ultraAdminRouter.post("/create", saveNewUltraAdmin);

ultraAdminRouter.post("/login", ultraAdminLogin);
export default ultraAdminRouter;
