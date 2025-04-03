import mongoose from "mongoose";

export const fetchAllUserCategoriesUtils = (restaurantId: string) => [
  {
    $match: {
      restaurant: new mongoose.Types.ObjectId(restaurantId),
    },
  },
  {
    $lookup: {
      from: "mastercategories",
      localField: "category",
      foreignField: "_id",
      as: "result",
    },
  },
  {
    $unwind: {
      path: "$result",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $project: {
      _id: 1,
      restaurant: 1,
      name: "$result.name",
      status: 1,
    },
  },
];
