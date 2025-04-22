import { getUserRestaurantCategoriesService } from "@/app/_service/super-admin/category/super-admin-category.service";
import { useQuery } from "@tanstack/react-query";

export const useGetUSerCategoriesHoook = () => {
  return useQuery({
    queryKey: ["all-categories"],
    queryFn: getUserRestaurantCategoriesService,
  });
};
