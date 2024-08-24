import { getApiResponse } from "@/lib/api";
import { getCategoryResponse } from "@/services/category.service";
import { useQuery } from "@tanstack/react-query";

export const useFetchCategory = () => {
  return useQuery({
    queryFn: async () => {
      const categoryResponse = await getApiResponse("products");

      return categoryResponse;
    },
    queryKey: ["fetch.category"],
  });
};

export const useFetchCategories = () => {
  return useQuery({
    queryFn: async () => {
      const categoriesResponse = await getApiResponse("products/categories");

      return categoriesResponse;
    },
    queryKey: ["fetch.categories"],
  });
};
