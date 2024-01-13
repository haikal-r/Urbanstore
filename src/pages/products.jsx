import { Fragment, useState, useEffect } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";
import { getUsers } from "@/services/auth.service";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getUsers((data) => {
//         data.map((user) => (
//             console.log(user.email)
//     ))
//     })
//   }, []);

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
              products.map((product, index) => (
                <CardProduct id={product.id} key={index}>
                  <CardProduct.Header images={product.image}  />
                  <CardProduct.Body name={product.title} category={product.category} />
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
