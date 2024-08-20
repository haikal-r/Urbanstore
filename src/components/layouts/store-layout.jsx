import { useFetchStoreByParam } from "@/features/store/use-fetch-stores";
import DashboardLayouts from "@/pages/dashboard/layout";
import { useNavigate, useParams } from "react-router-dom";
import { Separator } from "../ui/separator";
import { StoreTabs } from "../pagers/store-tabs";
import { ErrorCard } from "../cards/error-card";
import { useEffect } from "react";

const StoreLayouts = ({ children, title, description }) => {
  const { slug } = useParams();
  const {
    data: store,
    isLoading,
    isFetching,
    error,
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
        <ErrorCard
          title="Something went wrong."
          description="Please refresh the page or try again later."
          retryLink="/"
        />
      )}
    </DashboardLayouts>
  );
};

export default StoreLayouts;
