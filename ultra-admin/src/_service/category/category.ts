import axios from "axios";

export const getAllMasterCategoryService = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const auth_token = localStorage.getItem("session_id");

  try {
    const fetchAllMasterCategoriesRecord = await axios.get(
      `${baseUrl}/ultra-admin/master-category/all-categories`,
      {
        headers: {
          Authorization: auth_token,
        },
      },
    );

    return fetchAllMasterCategoriesRecord?.data?.result;
  } catch (error) {
    throw error;
  }
};
