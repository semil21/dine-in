import mongoose from "mongoose";

export const getAllPendingOrdersOfRestaurantUtils = (restaurantId: string) => [
  {
    $match: {
      restaurant: new mongoose.Types.ObjectId(restaurantId),
    },
  },
  {
    $match: {
      status: "pending",
    },
  },
  {
    $project: {
      _id: 1,
      admin: 1,
      restaurant: 1,
      table: 1,
      contact: 1,
      status: 1,
    },
  },
];
