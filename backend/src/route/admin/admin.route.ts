import express from "express";
import { adminLogin } from "../../controller/admin/admin.controller";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

export default adminRouter;
