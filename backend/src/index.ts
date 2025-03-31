import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./database/database";

dotenv.config();

const app = express();

connectDatabase();

app.listen(process.env.MONGODB_PORT, () => {
  console.log(`Server running on port ${process.env.MONGODB_PORT}`);
});
