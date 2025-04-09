import { useMutation } from "@tanstack/react-query";
import ultraAdminLoginService from "@/_service/login/login";

export const useLoginHook = () => {
  return useMutation({
    mutationFn: ultraAdminLoginService,
    mutationKey: ["login"],
  });
};
