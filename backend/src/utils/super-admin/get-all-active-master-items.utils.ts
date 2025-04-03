export const getAllActiveMasterItemsPipeline = [
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
