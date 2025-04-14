import mongoose from "mongoose";

const itemVariationSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items",
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const ItemVariation = mongoose.model("Item_Variation", itemVariationSchema);

export default ItemVariation;
