import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./database/database";
import superAdminRouter from "./route/super-admin/super-admin.route";
import restaurantSuperAdminRouter from "./route/super-admin/restaurant/restaurant-super-admin.route";
import ultraAdminRouter from "./route/ultra-admin/ultra-admin.route";
import masterCategoryRouter from "./route/ultra-admin/master-category/master-category.route";
import categorySuperAdminRouter from "./route/super-admin/category/category-super-admin.route";
import newCategorySuperAdminRouter from "./route/super-admin/category/new-category/new-category.route";
import newCategoryUlttraAdminRouter from "./route/ultra-admin/new-category/new-category.route";
import ultraAdminMasterItemRouter from "./route/ultra-admin/master-item/ultra-admin-master-item.route";
import superAdminMasterItemRouter from "./route/super-admin/master-item/super-admin-master-item.route";
import itemRouter from "./route/super-admin/items/items-super-admin.route";
import itemVariationSuperAdminRouter from "./route/super-admin/item-variation/item-variation.route";
import tableRouter from "./route/super-admin/table/table.route";
import tableReservationRouter from "./route/super-admin/table-reservation/table-reservation.route";
import adminSuperAdminRouter from "./route/super-admin/admin/admin-super-admin.route";

dotenv.config();

const app = express();
app.use(express.json());

connectDatabase();

// ultra admin routes
app.use("/ultra-admin", ultraAdminRouter);
app.use("/ultra-admin/master-category", masterCategoryRouter);
app.use("/ultra-admin/new-category", newCategoryUlttraAdminRouter);
app.use("/ultra-admuin/master-item", ultraAdminMasterItemRouter);

// super admin routes
app.use("/super-admin", superAdminRouter);
app.use("/super-admin/restaurant", restaurantSuperAdminRouter);
app.use("/super-admin/category", categorySuperAdminRouter);
app.use("/super-admin/new-category", newCategorySuperAdminRouter);
app.use("/super-admin/master-item", superAdminMasterItemRouter);
app.use("/super-admin/items-detail", itemRouter);
app.use("/super-admin/item-variation", itemVariationSuperAdminRouter);
app.use("/super-admin/table", tableRouter);
app.use("/super-admin/table-reservation", tableReservationRouter);
app.use("/super-admin/admin", adminSuperAdminRouter);

app.listen(process.env.MONGODB_PORT, () => {
  console.log(`Server running on port ${process.env.MONGODB_PORT}`);
});
