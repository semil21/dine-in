import axios from "axios";
import { siteConfig } from "@/app/config/site.config";

export const getDashboardCount = async () => {
  try {
    const fetchRecords = await axios.get(
      `${siteConfig.base_url}/ultra-admuin/dashboard`,
      {
        headers: {
          Authorization: siteConfig.auth_token,
        },
      },
    );

    return fetchRecords?.data;
  } catch (error) {
    throw error;
  }
};
