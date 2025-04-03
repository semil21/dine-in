import mongoose from "mongoose";

const tableReservationSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
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
  "TableReservation",
  tableReservationSchema,
);

export default TableReservation;
