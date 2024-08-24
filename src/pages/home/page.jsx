import CardCategory from "@/components/cards/card-category";
import ProductCard from "@/components/cards/card-product";
import CategoryCardSkeleton from "@/components/skeletons/category-card-skeleton";
import ProductCardSkeleton from "@/components/skeletons/product-card-skeleton";
import { Button } from "@/components/ui/button";
import { Shell } from "@/components/ui/shell";
import { useFetchProducts } from "@/features/product/use-fetch-products";
import { useFetchCategories } from "@/features/use-fetch-category";
import { navigate } from "@/lib/utils";
import { getProfile } from "@/store/slices/auth-slice";
import Cookies from "js-cookie";
import { ChevronsRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function MainPage() {
  const {
    data: categories,
    isLoading: categoryIsLoading,
    isFetching: categoryIsFetching,
  } = useFetchCategories();

  const {
    data: products,
    isLoading: productIsLoading,
    isFetching: productIsFetching,
  } = useFetchProducts();

  return (
    <Shell className="max-w-6xl gap-0 ">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <h1 className=" text-balance font-semibold text-3xl sm:text-5xl md:text-6xl tracking-tighter leading-none">
          An open source e-commerce project built by{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            haikal-r
          </span>
        </h1>
        <p className="max-w-[42rem] text-sm md:text-balance tracking-normal leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Buy and sell from independent brands and stores around the world with
          ease
        </p>

        <div className="flex  flex-wrap items-center justify-center gap-4">
          <Link to="/products">
            <Button>Buy now</Button>
          </Link>
          <Link to="/dashboard/stores">
            <Button variant="outline">Sell now</Button>
          </Link>
        </div>
      </section>

      <section className="pb-10">
        <div className="flex flex-col gap-2 mb-7">
          <h1 className="font-heading text-3xl font-semibold tracking-tight leading-[1] md:text-4xl">
            Featured Categories
          </h1>
          <p className="text-muted-foreground sm:text-xl">
            Explore categories from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categoryIsLoading || categoryIsFetching ? (
            <CategoryCardSkeleton />
          ) : (
            categories?.map((category, index) => (
              <CardCategory category={category} key={index} />
            ))
          )}
        </div>
      </section>

      <section className="py-8">
        <div className="flex flex-col gap-2 mb-7">
          <h1 className="font-heading text-3xl font-semibold tracking-tight leading-[1] md:text-4xl">
            Popular Products
          </h1>
          <div className="flex justify-between">
            <p className="text-muted-foreground sm:text-xl">
              Explore products from around the world
            </p>

            <Link
              to="/products"
              className="hidden md:flex gap-1  hover:translate-x-1 transition-all me-3"
            >
              View all products <ChevronsRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {productIsLoading || productIsFetching ? (
            <ProductCardSkeleton skeleton="4" />
          ) : (
            products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </Shell>
  );
}
