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
    $group: {
      _id: "$restaurant",
      restaurant_name: { $first: "$restaurant_result.name" },
      restaurant_address: { $first: "$restaurant_result.address" },
      restaurant_area: { $first: "$restaurant_result.area" },
      restaurant_city: { $first: "$restaurant_result.city" },
      categories: {
        $push: {
          category_id: "$category_result._id",
          category_name: "$category_result.name",
        },
      },
    },
  },
];
