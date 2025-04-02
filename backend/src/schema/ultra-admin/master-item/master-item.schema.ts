import mongoose from "mongoose";

const masterItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const MasterItem = mongoose.model("MasterItem", masterItemSchema);

export default MasterItem;
