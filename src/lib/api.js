import { axiosClient, axiosPrivate } from "@/lib/axios"

export const getApiResponse = async (resource, query) => {
  const response = await axiosClient.get(`api/v1/${resource}?${query}`)
  const { data: nestedData } = response

  return nestedData.data
}

export const getPrivateApiResponse = async (resource, query) => {
  const response = await axiosPrivate.get(`api/v1/${resource}?${query}`)
  const { data: nestedData } = response

  return nestedData.data
}

export const getNestedApiResponse = async (resource, objectProperty) => {
  const getApiResponse = await getApiResponse(resource)

  return response.data.flatMap(item => item[objectProperty])
}