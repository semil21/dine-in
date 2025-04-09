import { loginType } from "@/_types/login.types";
import axios from "axios";
const ultraAdminLoginService = async (data: loginType) => {
  const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const adminLogin = await axios.post(`${base_url}/ultra-admin/login`, data);
    if (adminLogin?.status === 200) {
      localStorage.setItem("session_id", adminLogin?.data?.result);
    }

    return adminLogin;
  } catch (error) {
    throw error;
  }
};

export default ultraAdminLoginService;
