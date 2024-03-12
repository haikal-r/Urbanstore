import { axiosInstance } from "@/lib/axios"
import { getProductsResponse } from "@/services/product.service"
import { useQuery } from "@tanstack/react-query"

export const useFetchProducts = () => {
  return useQuery({
    queryFn: async () => {
      const productsResponse = await axiosInstance.get("/products")
      return productsResponse
      // const productsResponse = await getProductsResponse("products")

      // return productsResponse
    },
    queryKey: ["fetch.products"],
  })
}

export const useFetchProductsByLimit = (query) => {
  return useQuery({
    queryFn: async () => {
      const productsLimitResponse = await getProductsResponse("products", `limit=${query}`)

      return productsLimitResponse
    },
    queryKey: ["fetch.products-limit"],
  })
}


