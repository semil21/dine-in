import axiosInstance from "@/app/config/api-instance";

export const getUserRestaurantCategoriesService = async () => {
  try {
    const fetchCategoriesRecord = await axiosInstance.get(
      "/super-admin/category/get-categories",
    );

    return fetchCategoriesRecord?.data?.result;
  } catch (error) {
    throw error;
  }
};

export const updateCategoryStatusService = async (data: {
  id: string;
  status: boolean;
}) => {
  const { id } = data;
  try {
    const updateCategoryStatus = await axiosInstance.put(
      `/super-admin/category/update-status/${id}`,
      { status },
    );

    return updateCategoryStatus?.data?.result;
  } catch (error) {
    throw error;
  }
};
