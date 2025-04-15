import axios from "axios";
import { loginType } from "../_types/login.type";
import { siteConfig } from "../config/site.config";
export const loginService = async (data: loginType) => {
  const { role } = data;
  localStorage.setItem("role", role ?? "");
  try {
    if (role === "super-admin") {
      delete data.role;
      const superAdminlogin = await axios.post(
        `${siteConfig.base_url}/super-admin/login`,
        data,
        {
          headers: {
            Authorization: siteConfig.auth_token,
          },
        },
      );

      return superAdminlogin?.data?.auth_token;
    } else {
      delete data.role;
      const adminLogin = await axios.post(
        `${siteConfig.base_url}/admin/login`,
        data,
        {
          headers: {
            Authorization: siteConfig.auth_token,
          },
        },
      );
      return adminLogin?.data?.result;
    }
  } catch (error) {
    throw error;
  }
};
