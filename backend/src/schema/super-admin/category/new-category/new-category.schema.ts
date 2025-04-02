import mongoose from "mongoose";

const newCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      rquire: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SuperAdmin",
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const NewCategory = mongoose.model("NewCategory", newCategorySchema);

export default NewCategory;
