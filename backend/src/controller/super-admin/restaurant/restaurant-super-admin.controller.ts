import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import Restaurant from "../../../schema/super-admin/restaurant/restaurant.schema";

export const saveNewRestaurant = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { role, id } = req.body;

      if (role != "super-admin") {
        res.statua(400).send({ response: "Unauthorized access" });
        return;
      }

      req.body.admin = id;

      const saveRestaurantRecord = await Restaurant.create(req.body);

      if (saveRestaurantRecord) {
        res.status(200).send({ response: saveRestaurantRecord });
      } else {
        res.status(400).send({ response: "Failed to add new restaurant" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed  to save new restaurant" });
    }
  },
);

export const getAllRestaurantsOfSuperAdmin = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { id, role } = req.body;

      if (role != "super-admin") {
        res.statua(400).send({ response: "Unauthorized access" });
        return;
      }

      const fetchAllRestaurants = await Restaurant.find({ admin: id });

      if (fetchAllRestaurants) {
        res.status(200).send({ response: fetchAllRestaurants });
      } else {
        res.status(400).send({ response: "Failed to fetch all restaurants" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to fetch all restaurants" });
    }
  },
);
