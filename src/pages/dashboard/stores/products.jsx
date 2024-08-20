import { ErrorCard } from "@/components/cards/error-card";
import StoreLayouts from "@/components/layouts/store-layout";
import { columns } from "@/components/tables/product/column";
import ProductTable from "@/components/tables/product/table";
import { useFetchProductsByStore } from "@/features/product/use-fetch-products";
import { useParams } from "react-router-dom";

const ProductsStorePage = () => {
  const { slug } = useParams();
  const { data: products = [], error } = useFetchProductsByStore(slug);

  console.log(products);

  return (
    <StoreLayouts title="Products" description="Manage your products here">
      <div className="flex flex-col gap-3">
        <ProductTable data={products} columns={columns} searchKey="name" />
      </div>
    </StoreLayouts>
  );
};

export default ProductsStorePage;
