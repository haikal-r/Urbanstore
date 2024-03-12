import { axiosInstance } from "@/lib/axios"
import { getProductsResponse } from "@/services/product.service"
import { useQuery } from "@tanstack/react-query"

export const useFetchProductById = (id) => {
  return useQuery({
    queryFn: async () => {
      const productResponse = await getProductsResponse(`products/${id}`)

      return productResponse
    },
    queryKey: ['fetch.product'],
  })
}

