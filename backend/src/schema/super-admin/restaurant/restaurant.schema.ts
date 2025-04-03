import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SuperAdmin",
  },
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  area: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  contact: {
    type: Number,
    require: true,
  },
  alternateContact: {
    type: Number,
  },
  gst: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
