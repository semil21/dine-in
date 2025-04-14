import {
  getAllNewCategoriesService,
  approveNewCategoryService,
} from "@/app/_service/new-category/new-category";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useFetchAllNEwCategoriesHook = () => {
  return useQuery({
    queryKey: ["all-new-categories"],
    queryFn: getAllNewCategoriesService,
  });
};

export const useApproveNewCategoryHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: approveNewCategoryService,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-new-categories"] });
    },
  });
};
