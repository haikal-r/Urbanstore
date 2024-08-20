import { Separator } from "@/components/ui/separator";
import DashboardLayouts from "./layout";
import StoreCard from "@/components/cards/card-store";

const DashboardPage = () => {
  return (
    <DashboardLayouts>
      <div className="w-full flex justify-between ">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-3xl">Stores</h1>
          <p>Manage your stores</p>
        </div>
        <button>cretae store</button>
      </div>
      <Separator className="my-4" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard /> */}
      </div>
    </DashboardLayouts>
  );
};

export default DashboardPage;
