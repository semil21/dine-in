import mongoose from "mongoose";
export const fetchAllUserCategoriesUtils = (adminId: string) => [
  {
    $match: {
      user: new mongoose.Types.ObjectId(adminId),
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
    $project: {
      _id: 1,
      restaurant: 1,
      restaurant_name: "$restaurant_result.name",
      restaurant_address: "$restaurant_result.address",
      restaurant_area: "$restaurant_result.area",
      restaurant_city: "$restaurant_result.city",
      category_name: "$category_result.name",
      category_id: "$category_result._id",
    },
  },
];
