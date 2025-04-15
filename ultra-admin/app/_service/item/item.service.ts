import axios from "axios";
import { siteConfig } from "@/app/config/site.config";

export const getAllItemsService = async () => {
  try {
    const fetchAllItemsService = await axios.get(
      `${siteConfig.base_url}/ultra-admuin/master-item`,
      {
        headers: {
          Authorization: siteConfig.auth_token,
        },
      },
    );

    return fetchAllItemsService?.data?.result;
  } catch (error) {
    throw error;
  }
};
