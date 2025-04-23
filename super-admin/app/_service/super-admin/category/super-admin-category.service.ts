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

export const getAllActiveMAsterCategoriesService = async () => {
  try {
    const fetchActiveCategoryRecords = await axiosInstance.get(
      "/super-admin/category/active-master-categories",
    );

    return fetchActiveCategoryRecords?.data?.result;
  } catch (error) {
    throw error;
  }
};

export const addNewCategoryService = async (data: {
  restaurant: string;
  category: string;
}) => {
  try {
    const addNewCategory = await axiosInstance.post(
      "/super-admin/category/create",
      data,
    );

    return addNewCategory?.data?.result?.[0];
  } catch (error) {
    throw error;
  }
};
