import mongoose from "mongoose";

const superAdminCategorySchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MasterCategory",
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const SuperAdminCategory = mongoose.model(
  "SuperAdminCategory",
  superAdminCategorySchema,
);

export default SuperAdminCategory;
