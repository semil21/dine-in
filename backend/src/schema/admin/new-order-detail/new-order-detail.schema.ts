import mongoose from "mongoose";

const newOrderDetailSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "New_Orders",
    require: true,
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items",
  },
  quantity: {
    type: Number,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
    enum: ["served", "pending", "preparing", "cancelled"],
  },
});

const NewOrderDetail = mongoose.model(
  "new_order_details",
  newOrderDetailSchema,
);

export default NewOrderDetail;
