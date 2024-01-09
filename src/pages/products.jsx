import { Fragment, useState, useEffect } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-center py-5 px-3">
        <div className="w-3/5 flex flex-wrap gap-4">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct>
                <CardProduct.Header images={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
