import express from "express";
import { createNewCategory } from "../../../../controller/super-admin/category/new-category/new-category.controller";
import verifySuperAdminToken from "../../../../middleware/super-admin/super-admin.middleware";
import { approveNewCategory } from "../../../../controller/ultra-admin/new-category/new-category.controller";

const newCategorySuperAdminRouter = express.Router();

newCategorySuperAdminRouter.post(
  "/create",
  verifySuperAdminToken,
  createNewCategory,
);

export default newCategorySuperAdminRouter;
