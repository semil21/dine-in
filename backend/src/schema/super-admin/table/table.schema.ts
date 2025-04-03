import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SuperAdmin",
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  number: {
    type: String,
    require: true,
  },
  capacity: {
    type: Number,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Table = mongoose.model("Table", tableSchema);

export default Table;
