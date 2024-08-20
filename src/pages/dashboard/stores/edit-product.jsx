import { EditProductForm } from "@/components/forms/form-edit-product";
import StoreLayouts from "@/components/layouts/store-layout";
import { useFetchProductByUuid } from "@/features/product/use-fetch-products";
import { useParams } from "react-router-dom";

const EditProductPage = () => {
  const { uuid } = useParams();
  console.log(uuid);
  const { data } = useFetchProductByUuid(uuid);

  console.log(data);

  return (
    <StoreLayouts title="Edit Product" description="Edit your product here">
      <EditProductForm data={data} />
    </StoreLayouts>
  );
};

export default EditProductPage;
