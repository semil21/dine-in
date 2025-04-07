import mongoose from "mongoose";
export const getAllOrderOfOrderDetails = (orderId: string) => [
  {
    $match: {
      order: new mongoose.Types.ObjectId(orderId),
    },
  },
];
