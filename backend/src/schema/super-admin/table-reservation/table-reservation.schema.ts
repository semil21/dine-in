import mongoose from "mongoose";

const tableReservationSchema = new mongoose.Schema({
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
  },
  time: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

const TableReservation = mongoose.model(
  "table_reservations",
  tableReservationSchema,
);

export default TableReservation;
