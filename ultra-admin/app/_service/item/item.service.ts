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

export const addNewMasterItemService = async (name: string) => {
  try {
    const addNewMasterItemRecord = await axios.post(
      `${siteConfig.base_url}/ultra-admuin/master-item/create`,
      name,
      {
        headers: {
          Authorization: siteConfig.auth_token,
        },
      },
    );

    return addNewMasterItemRecord?.data?.result;
  } catch (error) {
    throw error;
  }
};

export const itemStatusUpdateService = async (data: {
  _id: string;
  status: boolean;
}) => {
  try {
    const { _id, status } = data;

    const updateItemStatus = await axios.put(
      `${siteConfig.base_url}/ultra-admuin/master-item/update-status/${_id}`,
      status,
      {
        headers: {
          Authorization: siteConfig.auth_token,
        },
      },
    );

    return updateItemStatus?.data?.result;
  } catch (error) {
    throw error;
  }
};
