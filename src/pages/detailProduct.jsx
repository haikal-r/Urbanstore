import { useParams } from "react-router-dom";
import DetailProductSkeleton from "@/components/skeletons/DetailProductSkeleton";
import { useFetchProductById } from "@/hooks/product/useFetchProductById";
import Gallery from "@/components/molecules/Gallery";
import Info from "@/components/molecules/Info";

const DetailProductPage = () => {
  const { id: stringId } = useParams();
  console.log(stringId)
  const id = parseInt(stringId);
  console.log(typeof id)
  
  const { data: products, isLoading, isFetching } = useFetchProductById(id);
  console.table(products)

  return (
    <div className="p-4 sm:p-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-3 lg:gap-y-6 lg:grid-cols-2 lg:items-start lg:gap-x-8 border rounded-md">
        {isLoading || isFetching ? (
          <DetailProductSkeleton />
        ) : (
          <>
            <Gallery product={products?.data} />
            <Info product={products?.data} />`
          </>
        )}
        
      </div>
    </div>
  );
};

export default DetailProductPage;
