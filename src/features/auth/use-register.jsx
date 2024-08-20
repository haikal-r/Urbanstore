import { axiosClient } from "@/lib/axios";
import { registerAPI } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useRegister = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (user) => {
      // const response = await registerAPI(user)
      const response = await axiosClient.post('/register', user)
      console.log(response)

      return response.data
    },
    mutationKey: ['register'],
    onSuccess,
    onError
  })
}