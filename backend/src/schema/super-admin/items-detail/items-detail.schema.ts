import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SuperAdmin",
    require: true,
  },
  master_item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MasterItem",
    require: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    require: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    require: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const ItemDetails = mongoose.model("Items", itemsSchema);

export default ItemDetails;
