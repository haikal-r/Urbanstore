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
      <div className="max-w-7xl mx-auto">
        <section className="px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct>
                  <CardProduct.Header images={product.image} id={product.id} />
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
              ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ProductPage;
