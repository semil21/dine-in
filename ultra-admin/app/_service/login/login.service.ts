import { loginType } from "@/app/_types/login.type";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const loginService = async (data: loginType) => {
  try {
    const login = await axios.post(
      `${process.env.NEXT_PUBLIC_DB_URL}/ultra-admin/login`,
      data,
    );

    if (login?.status === 200) {
      localStorage.setItem("session_id", login?.data?.result);
    }

    return login?.data?.token;
  } catch (error) {
    throw error;
  }
};
