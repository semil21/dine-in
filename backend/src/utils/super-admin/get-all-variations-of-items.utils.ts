import mongoose from "mongoose";

export const fetchItemsVariationsUtils = (itemId: string) => [
  {
    $match: {
      item: new mongoose.Types.ObjectId(itemId),
    },
  },
];
