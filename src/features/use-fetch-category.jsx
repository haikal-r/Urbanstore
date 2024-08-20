import { getApiResponse } from '@/lib/api'
import { getCategoryResponse } from '@/services/category.service'
import { useQuery } from "@tanstack/react-query"

export const useFetchCategory = () => {
  return useQuery({
    queryFn: async () => {
      const categoryResponse = await getApiResponse("products")
      console.log(categoryResponse)

      return categoryResponse;
    },
    queryKey: ["fetch.category"]
  })
}

export const useFetchCategories = () => {
  return useQuery({
    queryFn: async () => {
      const categoriesResponse = await getApiResponse('products/categories')
      console.log(categoriesResponse)

      return categoriesResponse
    },
    queryKey: ['fetch.categories']
  })
}