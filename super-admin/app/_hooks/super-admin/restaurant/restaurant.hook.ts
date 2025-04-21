import { getAllRestaurantsOfUserService } from "@/app/_service/super-admin/restaurant/restaurant.controller";
import { useQuery } from "@tanstack/react-query";

export const useGetRestaurantHook = () => {
  return useQuery({
    queryKey: ["all-restaurants"],
    queryFn: getAllRestaurantsOfUserService,
  });
};
