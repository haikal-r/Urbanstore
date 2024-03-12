import ProductCard from "@/components/molecules/CardProduct";

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
