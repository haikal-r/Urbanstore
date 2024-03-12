import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import { useFetchCategory } from "@/hooks/product/useFetchCategory";
import { useFetchProducts } from "@/hooks/product/useFetchProducts";
import ProductList from "@/components/organism/ProductList";

const ProductPage = () => {
  const { item: selectedCategory } = useParams();
  const { data: products, isLoading: productIsLoading, isFetching: productIsFetching } = useFetchProducts();
  const { data: category, isLoading: categoryIsLoading, isFetching: categoryIsFetching } =useFetchCategory(selectedCategory);
  let filteredProducts;

  if (selectedCategory) {
    filteredProducts = category;
  } else {
    filteredProducts = products;
  }

  return (
    <section className="md:py-8 py-4">
      <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productIsLoading || categoryIsLoading || productIsFetching || categoryIsFetching ? (
          <ProductCardSkeleton />
        ) : (
          filteredProducts?.data.map((product) => (
            <ProductList key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default ProductPage;
