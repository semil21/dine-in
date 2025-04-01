import { Request, Response } from "express";
import Restaurant from "../../../schema/super-admin/restaurant/restaurant.schema";

export const saveNewRestaurant = async (req: Request, res: Response) => {
  try {
    const { role, id } = req.body;

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
};

export const getAllRestaurantsOfSuperAdmin = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.body;

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
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const { role, id } = req.body;

    const { restaurantId } = req.params;

    const updateRestaurantRecord = await Restaurant.findByIdAndUpdate(
      { _id: restaurantId },
      req.body,
      { new: true },
    );

    if (updateRestaurantRecord) {
      res.status(200).send({
        response: updateRestaurantRecord,
        message: "Restaurant updated successfully",
      });
    } else {
      res.status(400).send({ response: "Failed to update restaurant" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error,failed to update restaurant" });
  }
};

export const updateRestaurantStatus = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;

    const { status } = req.body;

    const updatedStatus = status === true ? false : true;

    const updateStatus = await Restaurant.findByIdAndUpdate(
      { _id: restaurantId },
      { status: updatedStatus },
      { new: true },
    );

    if (updateStatus) {
      res.status(200).send({
        status: updateStatus?.status,
        message: "Restaurant status updated successfully.",
      });
    } else {
      res.status(400).send({ response: "Failed to update restaurant status " });
    }
  } catch (error) {
    res.status(500).send({ response: "Failed to update restaurat status" });
  }
};
