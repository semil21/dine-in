import mongoose from "mongoose";

const masterCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const MasterCategory = mongoose.model("MasterCategory", masterCategorySchema);

export default MasterCategory;
