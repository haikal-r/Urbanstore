import { getApiResponse } from "@/lib/api";

export const getAllProducts = async (query) => {
  try {
    const response = await getApiResponse("products", query)
  
    
    return response.data  
  } catch (error) {
    throw error
  }
};

export const getProductByUuid = async (uuid) => {
  try {
    const response = await getApiResponse(`products/${uuid}`)

    return response
  } catch (error) {
    throw error
  }
}