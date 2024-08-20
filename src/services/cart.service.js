import { getPrivateApiResponse } from "@/lib/api";
import { axiosPrivate } from "@/lib/axios";

export const getCartItem = async () => {
  try {
    // const response = await axiosPrivate.get("/api/v1/carts")
    const response = await getPrivateApiResponse("carts")

    return response
  } catch (e) {
    throw e
  }
}

export const updateCartItem = async () => {
  try {
    const response = await axiosPrivate.patch("/api/v1/carts")

    return response 
  } catch (error) {
    console.error(error.message)
  }
}

export const postCartItem = async () => {
  try {
    const response = await axiosPrivate.post("carts")

    return response
  } catch (error) {
    console.error(error)
  }
}

export const deleteCartItem = async () => {
  try {
    const response = await axiosPrivate.delete("carts")

    return response
  } catch (error) {
    console.error(error)
  }
}