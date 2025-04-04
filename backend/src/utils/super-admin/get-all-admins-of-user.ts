import mongoose from "mongoose";

export const getAllAdminsOFUserUtils = (userId: string) => [
  {
    $match: {
      user: new mongoose.Types.ObjectId(userId),
    },
  },
];
