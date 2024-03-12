import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useFetchCategories } from "@/hooks/product/useFetchCategory";
import CardCategory from "@/components/molecules/CardCategory";
import { useFetchProductsByLimit } from "@/hooks/product/useFetchProducts";
import ProductList from "@/components/organism/ProductList";

export default function MainPage() {
  const { data: categories, isLoading: categoryIsLoading } =
    useFetchCategories();
  // const { data: products, isLoading: productIsLoading } =
  //   useFetchProductsByLimit(4);
  // console.table(products?.data);

  return (
    <>
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <h1 className="text-balance font-semibold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-none">
          An open source e-commerce project built by{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            haikal-r
          </span>
        </h1>
        <p className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Buy and sell from independent brands and stores around the world with
          ease
        </p>

        <div className="flex  flex-wrap items-center justify-center gap-4">
          <Link to="/products">
            <Button size="md">Buy now</Button>
          </Link>
          <Link to="/products">
            <Button size="md" variant="outline">
              Sell now
            </Button>
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
            {categories?.data.map((category, index) =>
              categoryIsLoading ? (
                <p className="text-9xl">LOADING</p>
              ) : (
                <CardCategory category={category} key={index} />
              )
            )}
          </div>
      </section>

      <section className="py-8">
        <div className="flex flex-col gap-2 mb-7">
          <h1 className="font-heading text-3xl font-semibold tracking-tight leading-[1] md:text-4xl">
            Popular Products
          </h1>
          <p className="text-muted-foreground sm:text-xl">
            Explore products from around the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* {products?.data.map((product, index) =>
            productIsLoading ? (
              <p className="text-9xl">LOADING</p>
            ) : (
              <ProductList product={product} key={index} />
            )
          )} */}
        </div>
      </section>
    </>
  );
}
