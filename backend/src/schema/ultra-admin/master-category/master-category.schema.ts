import mongoose from "mongoose";

const masterCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const MasterCategory = mongoose.model("Master_Category", masterCategorySchema);

export default MasterCategory;
