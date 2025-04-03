import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  createNewTable,
  getAllTablesOfRestaurant,
  updateTable,
  updateTableStatus,
} from "../../../controller/super-admin/table/table.controller";

const tableRouter = express.Router();

tableRouter.get(
  "/get-tables/:restaurantId",
  verifySuperAdminToken,
  getAllTablesOfRestaurant,
);

tableRouter.post("/create", verifySuperAdminToken, createNewTable);

tableRouter.put("/update-table/:tableId", verifySuperAdminToken, updateTable);

tableRouter.put(
  "/update-status/:tableId",
  verifySuperAdminToken,
  updateTableStatus,
);

export default tableRouter;
