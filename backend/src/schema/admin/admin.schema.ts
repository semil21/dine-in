import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  contact: {
    type: Number,
    require: true,
  },
  alternateContact: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  currentAddress: {
    type: String,
    require: true,
  },
  adhaarNumber: {
    type: Number,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    reequire: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SuperAdmin",
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  joining: {
    type: Date,
  },
  leaving: {
    type: Date,
  },
  status: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ["waiter", "chef", "manager"],
  },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
