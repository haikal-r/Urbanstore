import { useState, useEffect, Suspense, lazy } from "react";
import { getCategory } from "@/services/category.service";
import { useParams } from "react-router-dom";
import { getProducts } from "@/services/product.service";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";

const ProductList = lazy(() => import("@/components/organism/ProductList"));

const ProductPage = () => {
  const { item } = useParams();
  const [category, setCategory] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  let filteredProduct;

  if (item) {
    filteredProduct = category;
  } else {
    filteredProduct = initialProducts;
  }

  useEffect(() => {
    getProducts((data) => {
      setInitialProducts(data);
    });
  }, []);

  useEffect(() => {
    getCategory(item, (data) => {
      setCategory(data);
    });
  }, [item]);

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <section className="px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProduct.map((product) => (
            <Suspense fallback={<ProductCardSkeleton />} key={product.id}>
              <ProductList product={product} />
            </Suspense>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
