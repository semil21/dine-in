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
    isCompleted: {
      type: String,
    },
    paymentCompleted: {
      type: Boolean,
      default: false,
    },
    paymentMode: {
      type: String,
      default: false,
    },
  },
  { timestamps: true },
);

const NewOrders = mongoose.model("NewOrders", newOrderSchema);

export default NewOrders;
