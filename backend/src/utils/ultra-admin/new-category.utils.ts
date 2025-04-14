export const fetchNewCategoryUtils = [
  {
    $lookup: {
      from: "super_admins",
      localField: "user",
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
      name: 1,
      isApproved: 1,
      user: 1,
      user_email: "$result.email",
    },
  },
];
