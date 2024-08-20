import { axiosPrivate } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateCartItem = ({ onSuccess, onError } ,slug) => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await axiosPrivate.patch(`/api/v1/stores/${slug}`, body);
      console.log(response)

      return response.data
    },  
    mutationKey: ["edit.store" ,slug],
    onSuccess,
    onError
  });
};
