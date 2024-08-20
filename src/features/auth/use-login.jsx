import { loginAPI } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useLogin = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (user) => {
      const response = await loginAPI(user)

      return response.data.data
    },
    mutationKey: ['login'],
    onSuccess,
    onError
  })
}