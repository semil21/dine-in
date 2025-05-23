import { loginService } from "@/app/_service/login/login.service";
import { useMutation } from "@tanstack/react-query";

export const useLoginHook = () => {
  return useMutation({
    mutationFn: loginService,
  });
};
