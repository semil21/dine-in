import mongoose from "mongoose";

const newOrderSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      require: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
    },
    contact: {
      type: Number,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed", "cancelled"],
    },
  },
  { timestamps: true },
);

const NewOrders = mongoose.model("NewOrders", newOrderSchema);

export default NewOrders;
