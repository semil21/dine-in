import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  getAllRestaurantsOfSuperAdmin,
  saveNewRestaurant,
  updateRestaurant,
  updateRestaurantStatus,
} from "../../../controller/super-admin/restaurant/restaurant-super-admin.controller";

const restaurantSuperAdminRouter = express.Router();

restaurantSuperAdminRouter.get(
  "/",
  verifySuperAdminToken,
  getAllRestaurantsOfSuperAdmin,
);

restaurantSuperAdminRouter.post(
  "/create",
  verifySuperAdminToken,
  saveNewRestaurant,
);

restaurantSuperAdminRouter.put(
  "/update/:restaurantId",
  verifySuperAdminToken,
  updateRestaurant,
);

restaurantSuperAdminRouter.put(
  "/update-status/:restaurantId",
  verifySuperAdminToken,
  updateRestaurantStatus,
);

export default restaurantSuperAdminRouter;
