import express from "express";
import {
  adminLogin,
  createNewSuperAdmin,
} from "../../controller/super-admin/super-admin.controller";

const superAdminRouter = express.Router();

superAdminRouter.post("/create", createNewSuperAdmin);
superAdminRouter.post("/login", adminLogin);

export default superAdminRouter;
