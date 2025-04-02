import express from "express";
import verifyUltraAdminToken from "../../../middleware/ultra-admin/ultra-admin.middleware";
import {
  approveNewCategory,
  getNewCategoriesRequest,
} from "../../../controller/ultra-admin/new-category/new-category.controller";

const newCategoryUlttraAdminRouter = express.Router();

newCategoryUlttraAdminRouter.get(
  "/",
  verifyUltraAdminToken,
  getNewCategoriesRequest,
);

newCategoryUlttraAdminRouter.put(
  "/approve-category/:categoryId",
  verifyUltraAdminToken,
  approveNewCategory,
);

export default newCategoryUlttraAdminRouter;
