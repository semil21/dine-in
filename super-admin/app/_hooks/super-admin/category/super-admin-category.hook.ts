import {
  addNewCategoryService,
  getAllActiveMAsterCategoriesService,
  getUserRestaurantCategoriesService,
} from "@/app/_service/super-admin/category/super-admin-category.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetUserCategoriesHook = () => {
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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addNewCategoryService,
    onSuccess: (newData) => {
      queryClient.setQueryData(["all-categories"], (oldData: any) => {
        const updatedData = oldData?.map((item: any) => {
          if (item._id === newData.restaurant) {
            return {
              ...item,
              categories: [
                ...item.categories,
                {
                  category_id: newData._id,
                  category_name: newData.category_name,
                  category_status: newData.category_status,
                },
              ],
            };
          }
          return item;
        });

        return updatedData;
      });
    },
  });
};
