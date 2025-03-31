import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectDatabase = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGODB_URL ?? "");

    if (connectDB) {
      console.log("Database connected");
    } else {
      console.log("failed to connect with database");
    }
  } catch (error) {
    console.log("Failed to connect with database");
    throw error;
  }
};
