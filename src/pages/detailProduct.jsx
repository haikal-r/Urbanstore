import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { Fragment } from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import DetailProductSkeleton from "@/components/skeletons/DetailProductSkeleton";

const Gallery = lazy(() => import('@/components/Fragments/Gallery'));
const Info = lazy(() => import('@/components/Fragments/Info'));

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
            <Suspense fallback={<DetailProductSkeleton />}>
              <Gallery product={product} />
              <Info product={product} />
            </Suspense>
          </Fragment>
        }
        </div>
        
      </div>
      <Footer />
    </Fragment>
  );
};

export default DetailProductPage;
