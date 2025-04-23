export const getAllActiveMasterCategoriesUtils = async () => [
  {
    $match: {
      status: true,
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
    },
  },
];
