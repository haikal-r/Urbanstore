import { getApiResponse } from "@/lib/api";

export const getCategoryResponse = async (resource) => {
  try {
    const response = await getApiResponse(resource)

    return response;
  } catch (err) {
    console.error(err.message);
  }
};
