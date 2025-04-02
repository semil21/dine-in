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

const Category = mongoose.model("Category", superAdminCategorySchema);

export default Category;
