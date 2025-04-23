import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  getAllActiveMasterCategories,
  getAllCategoriesOfRestaurant,
  saveNewCategory,
  updateRestaurantCategoryStatus,
} from "../../../controller/super-admin/category/category-super-admin.controller";

const categorySuperAdminRouter = express.Router();

categorySuperAdminRouter.get(
  "/get-categories",
  verifySuperAdminToken,
  getAllCategoriesOfRestaurant,
);

categorySuperAdminRouter.get(
  "/active-master-categories",
  verifySuperAdminToken,
  getAllActiveMasterCategories,
);

categorySuperAdminRouter.post(
  "/create",
  verifySuperAdminToken,
  saveNewCategory,
);

categorySuperAdminRouter.put(
  "/update-status/:categoryId",
  verifySuperAdminToken,
  updateRestaurantCategoryStatus,
);

export default categorySuperAdminRouter;
