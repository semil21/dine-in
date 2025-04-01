import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  getAllCategoriesOfRestaurant,
  saveNewCategory,
  updateRestaurantCategoryStatus,
} from "../../../controller/super-admin/category/category-super-admin.controller";

const categorySuperAdminRouter = express.Router();

categorySuperAdminRouter.get(
  "/get-categories/:restaurantId",
  verifySuperAdminToken,
  getAllCategoriesOfRestaurant,
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
