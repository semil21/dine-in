import express from "express";
import verifySuperAdminToken from "../../../middleware/super-admin/super-admin.middleware";
import {
  deleteReservation,
  newTableReservation,
  updateTableReservation,
} from "../../../controller/super-admin/table-reservation/table-reservation.controller";

const tableReservationRouter = express.Router();

tableReservationRouter.post(
  "/create",
  verifySuperAdminToken,
  newTableReservation,
);

tableReservationRouter.put(
  "/update-reservation/:tableReservationId",
  verifySuperAdminToken,
  updateTableReservation,
);

tableReservationRouter.delete(
  "/delete-reservation/:tableReservationId",
  verifySuperAdminToken,
  deleteReservation,
);

export default tableReservationRouter;
