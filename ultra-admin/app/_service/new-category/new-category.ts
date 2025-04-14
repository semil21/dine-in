import axios from "axios";
import { siteConfig } from "@/app/config/site.config";
export const getAllNewCategoriesService = async () => {
  try {
    const fetchAllNewCategories = await axios.get(
      `${siteConfig.base_url}/ultra-admin/new-category`,
      {
        headers: {
          authorization: siteConfig.auth_token,
        },
      },
    );

    return fetchAllNewCategories?.data?.result;
  } catch (error) {
    throw error;
  }
};
