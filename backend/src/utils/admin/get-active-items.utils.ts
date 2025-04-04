import mongoose from "mongoose";

export const getActiveItemsUtils = (restaurantId: string) => [
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
      as: "category_result",
    },
  },
  {
    $lookup: {
      from: "masteritems",
      localField: "master_item",
      foreignField: "_id",
      as: "item_result",
    },
  },
  {
    $unwind: {
      path: "$category_result",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $unwind: {
      path: "$item_result",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $project: {
      _id: 1,
      description: 1,
      category_id: "$category_result._id",
      category_name: "$category_result.name",
      item_id: "$item_result._id",
      item_name: "$item_result.name",
    },
  },
];
