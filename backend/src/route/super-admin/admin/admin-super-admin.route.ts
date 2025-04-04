import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  createNewAdmin,
  getAllAdminsOfUser,
  updateAdmin,
  updateAdminStatus,
} from "../../../controller/super-admin/admin/admin-super-admin.controller";

const adminSuperAdminRouter = express.Router();

adminSuperAdminRouter.get("/get", verifySuperAdminToken, getAllAdminsOfUser);

adminSuperAdminRouter.post("/create", verifySuperAdminToken, createNewAdmin);

adminSuperAdminRouter.put(
  "/update/:adminId",
  verifySuperAdminToken,
  updateAdmin,
);

adminSuperAdminRouter.put(
  "/update-status/:adminId",
  verifySuperAdminToken,
  updateAdminStatus,
);

export default adminSuperAdminRouter;
