import axiosInstance from "@/app/config/api-instance";
export const getAllRestaurantsOfUserService = async () => {
  try {
    const response = await axiosInstance.get("/super-admin/restaurant");
    return response.data?.result;
  } catch (error) {
    throw error;
  }
};
