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
      type: Boolean,
      default: false,
    },
    paymentCompleted: {
      type: Boolean,
      default: false,
    },
    paymentMode: {
      type: String,
      default: false,
    },
    total: {
      type: Number,
      default: 0,
    },
    netPayment: {
      type: Number,
      default: 0,
    },
    GST: {
      type: Number,
      defaut: 0,
    },
    IGST: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const NewOrders = mongoose.model("New_Orders", newOrderSchema);

export default NewOrders;
