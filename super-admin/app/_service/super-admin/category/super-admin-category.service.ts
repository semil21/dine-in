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
