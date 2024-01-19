import { Fragment, useState, useEffect } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import { getCategory } from "@/services/category.service";
import ProductList from "@/components/Layouts/ProductList";
import { useParams } from "react-router-dom";
import { getProducts } from "@/services/product.service";

const ProductPage = () => {
  const { item } = useParams()
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([])
  let data
  
  if(item){
    data = category
  }else{
    data = products
  }

  useEffect(() => {
    getProducts( data => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    getCategory(item, (data) => {
      setCategory(data);
    });
  }, [item]);

  return (
    <Fragment>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <section className="px-4 sm:px-6 py-8">
          
          <ProductList products={data} />
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductPage;
