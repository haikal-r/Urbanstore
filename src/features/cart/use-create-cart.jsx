import { axiosPrivate } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateCartItem = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await axiosPrivate.post("/api/v1/carts", body);

      return response.data
    },  
    mutationKey: ["create.cartItem"],
    onSuccess,
    onError
  });
};
