import {
  addNewCategoryService,
  getAllActiveMAsterCategoriesService,
  getUserRestaurantCategoriesService,
} from "@/app/_service/super-admin/category/super-admin-category.service";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetUSerCategoriesHoook = () => {
  return useQuery({
    queryKey: ["all-categories"],
    queryFn: getUserRestaurantCategoriesService,
  });
};

export const useActiveMasterCategoriesHook = () => {
  return useQuery({
    queryKey: ["active-master-categories"],
    queryFn: getAllActiveMAsterCategoriesService,
  });
};

export const useAddNewCategoryHook = () => {
  return useMutation({
    mutationFn: addNewCategoryService,
  });
};
