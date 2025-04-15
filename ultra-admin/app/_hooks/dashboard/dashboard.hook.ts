import { getDashboardCount } from "@/app/_service/dashboard/dashboard.service";
import { useQuery } from "@tanstack/react-query";

export const useGetAllDashboardCountHook = () => {
  return useQuery({
    queryKey: ["all-dashboard-count"],
    queryFn: getDashboardCount,
    refetchInterval: 5 * 60 * 1000,
  });
};
