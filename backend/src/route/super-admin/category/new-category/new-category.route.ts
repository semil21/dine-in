import express from "express";
import { createNewCategory } from "../../../../controller/super-admin/category/new-category/new-category.controller";
import verifySuperAdminToken from "../../../../middleware/super-admin/super-admin.middleware";

const newCategoryRouter = express.Router();

newCategoryRouter.post("/create", verifySuperAdminToken, createNewCategory);

export default newCategoryRouter;
