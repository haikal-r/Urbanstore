import { axiosPrivate } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateOrderItem = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async () => {
      return await axiosPrivate.post("/api/v1/orders");
    },
    mutationKey: ["create.orderItem"],
    onSuccess,
    onError
  });
};
