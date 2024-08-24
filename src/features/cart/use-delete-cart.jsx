import { axiosPrivate } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteCartItem = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const cartResponse = await axiosPrivate.delete("/api/v1/carts", {
        data: body,
      });

      return cartResponse;
    },
    mutationKey: ["delete.cartItem"],
    onSuccess,
  });
};
