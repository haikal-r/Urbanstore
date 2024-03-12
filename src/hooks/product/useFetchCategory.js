import { axiosInstance } from '@/lib/axios'
import { useQuery } from "@tanstack/react-query"

export const useFetchCategory = (item) => {
  return useQuery({
    queryFn: async () => {
      const categoryResponse = await axiosInstance.get(`/products/category/${item}`)

      return categoryResponse;
    },
    queryKey: ["fetch.category"]
  })
}

export const useFetchCategories = () => {
  return useQuery({
    queryFn: async () => {
      const categoriesResponse = await axiosInstance.get("/products/categories")

      return categoriesResponse
    },
    queryKey: ['fetch.categories']
  })
}