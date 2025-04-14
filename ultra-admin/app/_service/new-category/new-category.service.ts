import axios from "axios";
import { siteConfig } from "@/app/config/site.config";
export const getAllNewCategoriesService = async () => {
  try {
    const fetchAllNewCategories = await axios.get(
      `${siteConfig.base_url}/ultra-admin/new-category`,
      {
        headers: {
          Authorization: siteConfig.auth_token,
        },
      },
    );

    return fetchAllNewCategories?.data?.result;
  } catch (error) {
    throw error;
  }
};

export const approveNewCategoryService = async (newCategoryId: string) => {
  try {
    const updateNewCategoryStatus = await axios.put(
      `${siteConfig.base_url}/ultra-admin/new-category/approve-category/${newCategoryId}`,
      {},
      {
        headers: {
          Authorization: siteConfig.auth_token,
        },
      },
    );

    return updateNewCategoryStatus?.data?.result;
  } catch (error) {
    throw error;
  }
};
