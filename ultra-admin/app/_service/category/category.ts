import axios from "axios";

export const getAllMasterCategoryService = async () => {
  try {
    const base_url = process.env.NEXT_PUBLIC_DB_URL;
    const auth_token = localStorage.getItem("session_id");

    const fetchAllCategoriesRecord = await axios.get(
      `${base_url}/ultra-admin/master-category/all-categories`,
      {
        headers: {
          authorization: auth_token,
        },
      },
    );

    return fetchAllCategoriesRecord?.data?.result;
  } catch (error) {
    throw error;
  }
};
