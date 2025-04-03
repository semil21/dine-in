import mongoose from "mongoose";

export const fetchAllTablesOfRestaurantUtils = (restaurantId: string) => [
  {
    $match: {
      restaurant: new mongoose.Types.ObjectId(restaurantId),
    },
  },
];
