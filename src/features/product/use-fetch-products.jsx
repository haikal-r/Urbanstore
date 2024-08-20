import { getApiResponse } from "@/lib/api"
import { axiosPrivate } from "@/lib/axios"
import { getAllProducts, getProductByUuid } from "@/services/product.service"
import { useQuery } from "@tanstack/react-query"

export const useFetchProducts = (query) => {
  return useQuery({
    queryFn: async () =>{ 
      return await getAllProducts(query)
    } ,
    queryKey: ["fetch.products", query],
  })
}



export const useFetchProductByUuid = (uuid) => {
  return useQuery({
    queryFn: async () => {
      return await getProductByUuid(uuid)
    },
    queryKey: ['fetch.product', uuid],
  })
}


export const useFetchProductByCategory = (slug) => {
  return useQuery({
    queryFn: async () => {
      return await getApiResponse(`products/category/${slug}`)
    },
    queryKey: ['fetch.productByCategory', slug]
  })
}

export const useFetchProductsByStore = (slug) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/stores/${slug}/products`)

      return response.data.data
    },
    queryKey: ['fetch.productByCategory', slug]
  })
}

