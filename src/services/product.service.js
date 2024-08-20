import { getApiResponse } from "@/lib/api";

export const getAllProducts = async (query) => {
  try {
    const response = await getApiResponse("products", query)
    console.log(response)
    
    return response.data  
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductByUuid = async (uuid) => {
  try {
    const response = await getApiResponse(`products/${uuid}`)

    return response
  } catch (error) {
    console.log(error.message)
  }
}