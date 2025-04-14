import mongoose from "mongoose";

const ultraAdminSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "ultra-admin",
  },
});

const UltraAdmin = mongoose.model("Ultra_Admins", ultraAdminSchema);

export default UltraAdmin;
