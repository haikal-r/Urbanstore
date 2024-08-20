import AddToCart from "@/components/molecules/add-to-cart";
import { ProductImageCarousel } from "@/components/layouts/product-image-carousel";
import DetailProductSkeleton from "@/components/skeletons/detail-product-skeleton";
import { Shell } from "@/components/ui/shell";
import { useFetchProductByUuid } from "@/features/product/use-fetch-products";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import { formatPriceIDR } from "@/lib/utils";

const DetailProductPage = () => {
  const { uuid } = useParams();
  const { data: product, isLoading, isFetching } = useFetchProductByUuid(uuid);

  return (
    <Shell className="pb-12 md:pb-14">
      <div className="flex flex-col md:flex-row md:gap-16 ">
        {isLoading || isFetching ? (
          <DetailProductSkeleton />
        ) : (
          <>
            <ProductImageCarousel
              className="w-full md:w-1/2"
              images={product.images || []}
              name={product.name}
              options={{
                loop: true,
              }}
            />

            {/* Product information */}
            <div className="w-full md:w-1/2">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {product.name}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                {formatPriceIDR(product.price)}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-5">
                Review /5
              </div>
              <p className="text-sm text-slate-700">{product.description}</p>

              <Separator className="my-5" />

              <AddToCart data={product} />
            </div>
          </>
        )}

      </div>
    </Shell>
  );
};

export default DetailProductPage;
