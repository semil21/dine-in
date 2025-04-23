import mongoose from "mongoose";
export const populateNewCategoryUtils = (newCreatedCategoryId: string) => [
  {
    $match: {
      _id: new mongoose.Types.ObjectId(newCreatedCategoryId),
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
    $unwind: {
      path: "$category_result",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $project: {
      restaurant: 1,
      category: 1,
      category_id: "$category_result._id",
      category_name: "$category_result.name",
      category_status: "$category_result.status",
    },
  },
];
