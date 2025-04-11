import {
  addMasterCategoryService,
  getAllMasterCategoryService,
  updateCategoryStatusService,
} from "@/app/_service/category/category";
import { categoryType } from "@/app/_types/category";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAllCategoryHook = () => {
  return useQuery({
    queryKey: ["all-categories"],
    queryFn: getAllMasterCategoryService,
  });
};

export const useAddNewMasterCategoryHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addMasterCategoryService,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["all-categories"],
        (oldData: categoryType[] = []) => {
          return [...oldData, data];
        },
      );
    },
  });
};

export const useUpdateCategoryStatusHooko = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategoryStatusService,
    onSuccess: (_, variables) => {
      queryClient.setQueryData(
        ["all-categories"],
        (oldData: categoryType[]) => {
          if (!oldData) return oldData;

          return oldData?.map((item: categoryType) => {
            if (item._id === variables._id) {
              return {
                ...item,
                status: !variables.status,
              };
            }
            return item;
          });
        },
      );
    },
  });
};
