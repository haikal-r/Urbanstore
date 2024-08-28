import { getPrivateApiResponse } from "@/lib/api";
import { axiosPrivate } from "@/lib/axios";

export const getOrderItem = async (status) => {
  try {
    const response = await getPrivateApiResponse(
      "orders",
      `status=${status || ""}`
    );

    return response;
  } catch (error) {
    throw error
  }
};

export const updateOrderItem = async () => {
  try {
    const response = await axiosPrivate.patch("/api/v1/orders");

    return response;
  } catch (error) {
    throw error
  }
};

export const postOrderItem = async () => {
  try {
    const response = await axiosPrivate.post("orders");

    return response;
  } catch (error) {
    throw error
  }
};

export const deleteOrderItem = async () => {
  try {
    const response = await axiosPrivate.delete("orders");

    return response;
  } catch (error) {
    throw error
  }
};
