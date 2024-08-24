import { ErrorCard } from "@/components/cards/error-card";
import { columns } from "@/components/tables/order/column";
import OrderTable from "@/components/tables/order/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useFetchOrders } from "@/features/order/use-fetch-order";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import DashboardLayouts from "../layout";

const OrderPage = () => {
  const [statuses, setStatuses] = useState({
    paid: false,
    pending: false,
    canceled: false,
  });

  const status = Object.keys(statuses).find((key) => statuses[key] === true);
  const { data: orders = [], isLoading, error } = useFetchOrders(status);
  
  return (
    <DashboardLayouts>
      {orders && (
        <>
          <div className="w-full flex">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-3xl">Orders</h1>
              <p>See Your Transaction History</p>
            </div>
          </div>
          <Separator className="my-4" />

          <div className="flex flex-col justify-end gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Status Payment <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                  className="capitalize"
                  checked={statuses.paid}
                  onCheckedChange={(checked) =>
                    setStatuses((prev) => ({ ...prev, paid: checked }))
                  }
                >
                  Paid
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                  className="capitalize"
                  checked={statuses.pending}
                  onCheckedChange={(checked) =>
                    setStatuses((prev) => ({
                      ...prev,
                      pending: checked,
                    }))
                  }
                >
                  Pending
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                  className="capitalize"
                  checked={statuses.canceled}
                  onCheckedChange={(checked) =>
                    setStatuses((prev) => ({ ...prev, canceled: checked }))
                  }
                >
                  Canceled
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <OrderTable columns={columns} data={orders} />
          </div>
        </>
      )}
      {error && (
        <div className="w-full justify-center">
          <ErrorCard
            title="Something went wrong."
            description="Please refresh the page or try again later."
            retryLink="/"
          />
        </div>
      )}
    </DashboardLayouts>
  );
};

export default OrderPage;
