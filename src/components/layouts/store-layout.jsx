import { useFetchStoreByParam } from "@/features/store/use-fetch-stores";
import DashboardLayouts from "@/pages/dashboard/layout";
import { useNavigate, useParams } from "react-router-dom";
import { Separator } from "../ui/separator";
import { StoreTabs } from "../pagers/store-tabs";
import { ErrorCard } from "../cards/error-card";
import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import { Icons } from "../atoms/icons";

const StoreLayouts = ({ children, title, description }) => {
  const { slug } = useParams();
  const {
    data: store,
    isLoading,
    isFetching,
  } = useFetchStoreByParam(slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isFetching && !store) {
      navigate("/dashboard");
    }
  }, [store, isLoading, isFetching]);

  return (
    <DashboardLayouts>
      {store ? (
        <>
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-3xl">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          <Separator className="my-4" />

          <div className="space-y-8 overflow-auto">
            <StoreTabs slug={store?.slug} />
            {children}
          </div>
        </>
      ) : (
        <div className="h-full flex justify-center items-center">
          <Icons.spinner
            className="mr-2 size-10 animate-spin"
            aria-hidden="true"
          />
        </div>
      )}
    </DashboardLayouts>
  );
};

export default StoreLayouts;
