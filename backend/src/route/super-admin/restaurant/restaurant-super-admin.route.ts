import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  getAllRestaurantsOfSuperAdmin,
  saveNewRestaurant,
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

export default restaurantSuperAdminRouter;
