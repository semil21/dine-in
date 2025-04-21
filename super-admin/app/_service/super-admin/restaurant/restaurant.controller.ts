import axiosInstance from "@/app/config/api-instance";
export const getAllRestaurantsOfUserService = async () => {
  try {
    const response = await axiosInstance.get("/super-admin/restaurant");
    return response.data?.result;
  } catch (error) {
    throw error;
  }
};

export const updateRestaurantStatusService = async (data: {
  id: string;
  status: boolean;
}) => {
  try {
    const { id, status } = data;

    const updateRestaurantStatus = await axiosInstance.put(
      `/super-admin/restaurant/update-status/${id}`,
      { status },
    );

    return updateRestaurantStatus?.data?.status;
  } catch (error) {
    throw error;
  }
};

export const addNewRestaurantService = async (data) => {
  try {
    const saveNewRestaurant = await axiosInstance.post(
      "/super-admin/restaurant/create",
      data,
    );

    return saveNewRestaurant?.data?.result;
  } catch (error) {
    throw error;
  }
};
