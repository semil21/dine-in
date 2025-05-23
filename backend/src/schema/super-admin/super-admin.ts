import mongoose from "mongoose";

const superAdminSchema = new mongoose.Schema({
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
    default: "super-admin",
  },
});

const SuperAdmin = mongoose.model("Super_Admins", superAdminSchema);

export default SuperAdmin;
