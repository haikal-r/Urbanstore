import { useState, useEffect } from "react";
import CardProduct from "@/components/Fragments/CardProduct";
import { getProducts } from "@/services/product.service";

const ProductList = ({ products }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getProducts(data => {
  //     setProducts(data);
  //   });
  // }, []);

  return(
    <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.length > 0 &&
        products.map((product, index) => (
          <CardProduct id={product.id} key={index}>
            <CardProduct.Header images={product.image}  />
            <CardProduct.Body name={product.title} category={product.category} />
            <CardProduct.Footer price={product.price} id={product.id} />
          </CardProduct>
        ))}
    </div>
  )
}

export default ProductList