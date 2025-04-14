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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SuperAdmin",
  },
});

const MasterItem = mongoose.model("Master_Item", masterItemSchema);

export default MasterItem;
