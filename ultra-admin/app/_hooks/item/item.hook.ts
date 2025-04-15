import { getAllItemsService } from "@/app/_service/item/item.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllMasterItemsHook = () => {
  return useQuery({
    queryKey: ["all-master-items"],
    queryFn: getAllItemsService,
  });
};
