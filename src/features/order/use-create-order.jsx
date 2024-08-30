import { axiosPrivate } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateOrderItem = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosPrivate.post("/api/v1/orders");
      const { data } = response

      return data?.data
    },
    mutationKey: ["create.orderItem"],
    onSuccess,
    onError
  });
};
