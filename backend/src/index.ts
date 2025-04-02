import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./database/database";
import superAdminRouter from "./route/super-admin/super-admin.route";
import restaurantSuperAdminRouter from "./route/super-admin/restaurant/restaurant-super-admin.route";
import ultraAdminRouter from "./route/ultra-admin/ultra-admin.route";
import masterCategoryRouter from "./route/ultra-admin/master-category/master-category.route";
import categorySuperAdminRouter from "./route/super-admin/category/category-super-admin.route";
import newCategoryRouter from "./route/super-admin/category/new-category/new-category.route";

dotenv.config();

const app = express();
app.use(express.json());

connectDatabase();

// ultra admin routes
app.use("/ultra-admin", ultraAdminRouter);
app.use("/ultra-admin/master-category", masterCategoryRouter);

// super admin routes
app.use("/super-admin", superAdminRouter);
app.use("/super-admin/restaurant", restaurantSuperAdminRouter);
app.use("/super-admin/category", categorySuperAdminRouter);
app.use("/super-admin/new-category", newCategoryRouter);

app.listen(process.env.MONGODB_PORT, () => {
  console.log(`Server running on port ${process.env.MONGODB_PORT}`);
});
