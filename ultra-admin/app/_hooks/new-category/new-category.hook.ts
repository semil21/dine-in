import { getAllNewCategoriesService } from "@/app/_service/new-category/new-category";
import { useQuery } from "@tanstack/react-query";

export const useFetchAllNEwCategoriesHook = () => {
  return useQuery({
    queryKey: ["all-new-categories"],
    queryFn: getAllNewCategoriesService,
  });
};
