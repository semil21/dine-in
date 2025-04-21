import {
  addNewRestaurantService,
  getAllRestaurantsOfUserService,
  updateRestaurantStatusService,
} from "@/app/_service/super-admin/restaurant/restaurant.controller";
import { RestaurantType } from "@/app/_types/restaurant.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetRestaurantHook = () => {
  return useQuery({
    queryKey: ["all-restaurants"],
    queryFn: getAllRestaurantsOfUserService,
  });
};
export const useUpdateRestaurantStatusHook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRestaurantStatusService,
    onSuccess: (_, variables) => {
      queryClient.setQueryData(["all-restaurants"], (oldData: any[]) => {
        if (!oldData) return oldData;

        return oldData?.map((item) => {
          if (item?._id === variables.id) {
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

export const useAddNewRestaurantHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addNewRestaurantService,

    onSuccess: (data) => {
      queryClient.setQueryData(
        ["all-restaurants"],
        (oldData: RestaurantType[]) => {
          return [...oldData, data];
        },
      );
    },
  });
};
