import FormUpdateStore from "@/components/forms/form-update-store";
import StoreLayouts from "@/components/layouts/store-layout";
import { useFetchStoreByParam } from "@/features/store/use-fetch-stores";
import { useParams } from "react-router-dom";

const SettingStorePage = () => {
  const { slug } = useParams();
  const { data } = useFetchStoreByParam(slug);

  return (
    <StoreLayouts title="Settings" description="Manage your store here">
      <FormUpdateStore data={data} />
    </StoreLayouts>

    
  );
};

export default SettingStorePage;
