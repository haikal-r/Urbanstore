import { useQuery } from "@tanstack/react-query"
import { getPrivateApiResponse } from "@/lib/api"

export const useFetchCartItems = () => {
  return useQuery({
    queryFn: async () => {
      const response = await getPrivateApiResponse("carts")

      return response.data
    
    },
    
    queryKey: ["fetch.carts"],
  })
}