import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { Fragment } from "react";
import Navbar from "@/components/Layouts/Navbar";
import Gallery from "@/components/Fragments/Gallery";
import Info from "@/components/Fragments/Info";
import Footer from "@/components/Layouts/Footer";

const DetailProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  
  return (
    <Fragment>
      <Navbar />
      <div className="p-4 sm:p-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-3 lg:gap-y-6 lg:grid-cols-2 lg:items-start lg:gap-x-8 border rounded-md">
        {Object.keys(product).length > 0 && 
          <Fragment>
            <Gallery product={product} />
            <Info product={product} />
          </Fragment>
        }
        </div>
        
      </div>
      <Footer />
    </Fragment>
  );
};

export default DetailProductPage;
