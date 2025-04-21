import { loginType } from "../_types/login.type";
import axiosInstance from "../config/api-instance";
export const loginService = async (data: loginType) => {
  const { role } = data;
  localStorage.setItem("role", role ?? "");
  try {
    if (role === "super-admin") {
      const superAdminlogin = await axiosInstance.post(
        "/super-admin/login",
        data,
      );

      return superAdminlogin?.data?.auth_token;
    } else {
      delete data.role;

      const adminLogin = await axiosInstance.post("/admin/login", data);
      return adminLogin?.data?.result;
    }
  } catch (error) {
    throw error;
  }
};
