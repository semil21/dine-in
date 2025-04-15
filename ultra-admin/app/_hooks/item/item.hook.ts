import {
  addNewMasterItemService,
  getAllItemsService,
  itemStatusUpdateService,
} from "@/app/_service/item/item.service";
import { itemType } from "@/app/_types/item.type";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetAllMasterItemsHook = () => {
  return useQuery({
    queryKey: ["all-master-items"],
    queryFn: getAllItemsService,
  });
};

export const useAddMasterItemHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addNewMasterItemService,
    onSuccess: (data) => {
      queryClient.setQueryData(["all-master-items"], (oldData: itemType[]) => {
        return [...oldData, data];
      });
    },
  });
};

export const useItemStatusHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: itemStatusUpdateService,
    onSuccess: (_, variables) => {
      queryClient.setQueryData(["all-master-items"], (oldData: itemType[]) => {
        if (!oldData) return oldData;

        return oldData?.map((item: itemType) => {
          if (item._id === variables?._id) {
            return {
              ...item,
              status: !variables.status,
            };
          }
          return item;
        });
      });
    },
  });
};
