import mongoose from "mongoose";

export const getAllUserItemsUtils = (userId: string) => [
  {
    $match: {
      user: new mongoose.Types.ObjectId(userId),
    },
  },
  {
    $lookup: {
      from: "master_categories",
      localField: "category",
      foreignField: "_id",
      as: "category_result",
    },
  },

  {
    $lookup: {
      from: "restaurants",
      localField: "restaurant",
      foreignField: "_id",
      as: "restaurant_result",
    },
  },

  {
    $lookup: {
      from: "master_items",
      localField: "master_item",
      foreignField: "_id",
      as: "items_result",
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
      path: "$restaurant_result",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $unwind: {
      path: "$items_result",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $project: {
      _id: 1,
      user: 1,
      restaurant: {
        _id: "$restaurant_result._id",
        name: "$restaurant_result.name",
        area: "$restaurant_result.area",
        city: "$restaurant_result.city",
        status: "$restaurant_result.status",
      },
      item: {
        _id: "$items_result._id",
        name: "$items_result.name",
        status: "$items_result.status",
      },
      category: {
        _id: "$category_result._id",
        name: "$category_result.name",
        status: "$category_result.status",
      },
    },
  },
];
