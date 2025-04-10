import express from "express";
import verifyUltraAdminToken from "../../../middleware/ultra-admin/ultra-admin.middleware";
import {
  getAllACtiveMasterCategory,
  getAllCategories,
  saveNewMasterCategory,
  updateMasterCategoryStatus,
} from "../../../controller/ultra-admin/master-category/master-category.controller";

const masterCategoryRouter = express.Router();

masterCategoryRouter.post(
  "/create",
  verifyUltraAdminToken,
  saveNewMasterCategory,
);

masterCategoryRouter.get(
  "/all-categories",
  verifyUltraAdminToken,
  getAllCategories,
);

masterCategoryRouter.get(
  "/active-categories",
  verifyUltraAdminToken,
  getAllACtiveMasterCategory,
);

masterCategoryRouter.put(
  "/update-status/:categoryId",
  verifyUltraAdminToken,
  updateMasterCategoryStatus,
);

export default masterCategoryRouter;
