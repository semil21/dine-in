import axios from "axios";
import { siteConfig } from "@/app/config/site.config";

export const getAllMasterCategoryService = async () => {
  try {
    const fetchAllCategoriesRecord = await axios.get(
      `${siteConfig.base_url}/ultra-admin/master-category/all-categories`,
      {
        headers: {
          Authorization: siteConfig.auth_token,
        },
      },
    );

    return fetchAllCategoriesRecord?.data?.result;
  } catch (error) {
    throw error;
  }
};

export const updateCategoryStatusService = async (data: {
  _id: string;
  status: boolean;
}) => {
  const { _id, status } = data;

  const updateCategoryRecordStatus = await axios.put(
    `${siteConfig.base_url}/ultra-admin/master-category/update-status/${_id}`,
    { status },
    {
      headers: {
        Authorization: siteConfig.auth_token,
      },
    },
  );

  return updateCategoryRecordStatus;
};

export const addMasterCategoryService = async (name: string) => {
  try {
    const addNewMasterCategory = await axios.post(
      `${siteConfig.base_url}/ultra-admin/master-category/create`,
      name,
      {
        headers: {
          Authorization: siteConfig.auth_token,
        },
      },
    );

    return addNewMasterCategory?.data?.result;
  } catch (error) {
    throw error;
  }
};
