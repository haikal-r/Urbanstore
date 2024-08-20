import { useQuery } from "@tanstack/react-query"
import { axiosPrivate } from "../../lib/axios"

export const useFetchStores = () => {
  return useQuery({
    queryFn: async () => { 
      const response =  await axiosPrivate.get('/api/v1/stores/user');

      return response.data.data
    },
    queryKey: ["fetch.stores"],
  })
}

export const useFetchStoreByParam = (param) => {
  return useQuery({
    queryFn: async () => { 
      const response =  await axiosPrivate.get(`/api/v1/stores/${param}`);

      return response.data.data
    },
    queryKey: ["fetch.stores-slug", param],
  })
}


