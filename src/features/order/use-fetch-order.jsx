import { getApiResponse } from "@/lib/api";
import { getOrderItem } from "@/services/order.service";
import { getProductByUuid } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useFetchOrders = (status) => {
  const queryStatus = status || "all";

  return useQuery({
    queryFn: async () => {
      if (status) {
        return await getOrderItem(status);
      } else {
        return await getOrderItem();
      }
    },
    queryKey: ["fetch.orders", queryStatus],
  });
};

export const useFetchProductByUuid = (uuid) => {
  return useQuery({
    queryFn: async () => {
      return await getProductByUuid(uuid);
    },
    queryKey: ["fetch.product", uuid],
  });
};

export const useFetchProductByCategory = (slug) => {
  return useQuery({
    queryFn: async () => {
      return await getApiResponse(`products/category/${slug}`);
    },
    queryKey: ["fetch.productByCategory", slug],
  });
};
