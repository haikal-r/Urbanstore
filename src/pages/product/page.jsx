import ProductCard from "@/components/cards/card-product";
import { ErrorCard } from "@/components/cards/error-card";
import { Shell } from "@/components/ui/shell";
import { CardSkeleton } from "@/components/ui/skeleton";
import { axiosClient } from "@/lib/axios";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { ref: lastAnimeRef, entry } = useIntersection({
    threshold: 1,
    root: null,
  });

  const { item } = useParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["infinite-query", item],
    queryFn: async ({ pageParam = 1 }) => {
      if (item) {
        const { data } = await axiosClient.get(
          `/api/v1/products/category/${item}?limit=4&page=${pageParam}`
        );
        return data;
      }
      const { data } = await axiosClient.get(
        `/api/v1/products?limit=4&page=${pageParam}`
      );
      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (data, allPages) => {
      const pagination = data?.data?.pagination;
      return pagination.hasNextPage ? pagination.currentPage + 1 : undefined;
    },
    enabled: false,
  });

  React.useEffect(() => {
    fetchNextPage();
  }, []);

  React.useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [entry?.isIntersecting, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === "error") {
    return (
      <Shell className="max-w-6xl gap-0">
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <ErrorCard title="Something wrong..." description={error.message} />
        </div>
      </Shell>
    );
  }

  return (
    <Shell className="max-w-6xl gap-0">
      <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.pages?.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.data.length > 0 ? (
              page.data.data.map((product, index) => (
                <ProductCard
                  key={index}
                  ref={
                    i === data.pages.length - 1 &&
                    index === page.data.data.length - 1
                      ? lastAnimeRef
                      : null
                  }
                  product={product}
                />
              ))
            ) : (
              <div className="col-span-full">
                <ErrorCard
                  title="Product not found"
                  description="Product not found. Try checking other categories or searching again."
                  retryLink="/"
                />
              </div>
            )}
          </React.Fragment>
        ))}
        {isFetching || isLoading || isFetchingNextPage
          ? Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)
          : null}
      </div>
    </Shell>
  );
};

export default ProductPage;
