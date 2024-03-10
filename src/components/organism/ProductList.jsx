import ProductCard from "@/components/molecules/ProductCard";
import { Suspense } from "react";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

const ProductList = ({ product }) => {
  return (
    <ProductCard id={product.id} key={product.id}>
      <ProductCard.Header images={product.image} />
      <ProductCard.Body name={product.title} category={product.category} />
      <ProductCard.Footer price={product.price} id={product.id} />
    </ProductCard>
  );
};

export default ProductList;
