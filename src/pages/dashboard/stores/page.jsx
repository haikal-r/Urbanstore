import StoreCard from "@/components/cards/card-store";
import { ErrorCard } from "@/components/cards/error-card";
import { AddStoreForm } from "@/components/forms/form-add-store";
import { Modal } from "@/components/modals/modal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useFetchStores } from "@/features/store/use-fetch-stores";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import DashboardLayouts from "../layout";
import { StoreCardSkeleton } from "@/components/skeletons/store-card-skeleton";

const StorePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: stores, isLoading, isFetching, error } = useFetchStores();
  console.log(stores);

  return (
    <DashboardLayouts>
      <>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={"Create a New Store"}
          description={"Fill out the form below to set up a new store."}
        >
          <AddStoreForm />
        </Modal>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl">Stores</h1>
            <p>Manage your stores</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <PlusCircleIcon className="mr-2 h-4 w-4" aria-hidden="true" />
            New
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading || isFetching ? (
            <>
              {Array.from({ length: 3 }).map((_, i) => (
                <StoreCardSkeleton key={i} />
              ))}
            </>
          ) : stores.length > 0 ? (
            stores.map((item, index) => <StoreCard data={item} key={index} />)
          ) : (
            <div className="col-span-full">
              <ErrorCard
                title="You don't have any store"
                description="Click new button to create new store"
                retryLink="/"
                
              />
            </div>
          )}
        </div>
      </>
    </DashboardLayouts>
  );
};

export default StorePage;
