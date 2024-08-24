import { EditProductForm } from "@/components/forms/form-edit-product";
import StoreLayouts from "@/components/layouts/store-layout";
import { useFetchProductByUuid } from "@/features/product/use-fetch-products";
import { useParams } from "react-router-dom";

const EditProductPage = () => {
  const { uuid } = useParams();

  const { data } = useFetchProductByUuid(uuid);

  return (
    <StoreLayouts title="Edit Product" description="Edit your product here">
      <EditProductForm data={data} />
    </StoreLayouts>
  );
};

export default EditProductPage;
