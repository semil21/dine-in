import { getAllMasterCategoryService } from "@/_service/category/category";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategoriesHook = () => {
  return useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getAllMasterCategoryService,
  });
};
