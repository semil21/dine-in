import { getAllMasterCategoryService } from "@/app/_service/category/category";
import { useQuery } from "@tanstack/react-query";

export const useAllCategoryHook = () => {
  return useQuery({
    queryKey: ["all-categories"],
    queryFn: getAllMasterCategoryService,
  });
};
