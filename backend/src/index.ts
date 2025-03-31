import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./database/database";
import superAdminRouter from "./route/super-admin/super-admin.route";

dotenv.config();

const app = express();
app.use(express.json());

connectDatabase();

// super admin routes
app.use("/super-admin", superAdminRouter);

app.listen(process.env.MONGODB_PORT, () => {
  console.log(`Server running on port ${process.env.MONGODB_PORT}`);
});
