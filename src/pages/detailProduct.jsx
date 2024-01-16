import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { Fragment } from "react";
import Navbar from "@/components/Layouts/Navbar";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Gallery from "@/components/Fragments/Gallery";
import Info from "@/components/Fragments/Info";


const DetailProductPage = () => {
  const { id } = useParams()
  const parsedId = parseInt(id)
  const [product, setProduct] = useState({});
  const dispatch = useDispatch()

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  
  return (
    <Fragment>
      <Navbar />
      <div className="p-4 sm:p-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-start lg:gap-x-8 border rounded-md">
        {Object.keys(product).length > 0 && 
          <Fragment>
            <Gallery product={product} />
            <Info product={product} />
          </Fragment>
        }
        </div>
        
      </div>
    </Fragment>
  );
};

export default DetailProductPage;
