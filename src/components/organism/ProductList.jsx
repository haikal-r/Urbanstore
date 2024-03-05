import CardProduct from "@/components/molecules/CardProduct";
import { Suspense } from "react";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

const ProductList = ({ product }) => {
  return (
    <CardProduct id={product.id} key={product.id}>
      <CardProduct.Header images={product.image} />
      <CardProduct.Body name={product.title} category={product.category} />
      <CardProduct.Footer price={product.price} id={product.id} />
    </CardProduct>
  );
};

export default ProductList;
