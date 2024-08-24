import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { axiosClient, axiosPrivate } from "@/lib/axios";
import { formatPriceIDR, navigate } from "@/lib/utils";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const columns = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button variant="ghost">
          Product
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex">
          {row.original.orderItems.map((item) => (
            <p key={item.id} className="flex">
              {item.productName},
            </p>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "totalPrice",
    header: () => <div className="text-right">Total Price</div>,
    cell: ({ row }) => {
      const totalPrice = parseFloat(row.getValue("totalPrice"));

      return (
        <div className="text-right font-medium">
          {formatPriceIDR(totalPrice)}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original;

      const [loading, setLoading] = useState(false);
      const [open, setOpen] = useState(false);

      const onDelete = async () => {
        try {
          setLoading(true);
          await axiosClient.delete(`/api/v1/orders/${order.id}/cancel`);
          toast.success("Order canceled.");
        } catch (error) {
          if (error) {
            return toast.error(error.response?.data);
          }
          toast.error("Something went wrong");
        } finally {
          setLoading(false);
          setOpen(false);
        }
      };

      const onPay = () => {
        if (order.token) {
          window.snap.pay(order.token, {
            onSuccess: async () => {
              await axiosPrivate.patch(`/api/v1/orders/${order.id}`)
              toast.success("Payment success!");
            },
            onPending:async () => {
              await axiosPrivate.patch(`/api/v1/orders/${order.id}`)
              toast("Waiting your payment..");
            },
            onError:async () => {
              await axiosPrivate.patch(`/api/v1/orders/${order.id}`)
              toast.error("Payment failed, something went wrong");
            },
            onClose: async () => {
              await axiosPrivate.patch(`/api/v1/orders/${order.id}`)
              toast.error("You have not completed the payment.");
            },
          });
        }
      };

      useEffect(() => {
        const midtransUrl = 'https://app.sandbox.midtrans.com/snap/snap.js'
    
        let scriptTag = document.createElement('script')
        scriptTag.src = midtransUrl
        scriptTag.setAttribute('data-client-key', import.meta.env.VITE_MIDTRANS_CLIENT_KEY)
    
        document.body.appendChild(scriptTag)
    
        return () => {
          document.body.removeChild(scriptTag)
        }
      }, [])

      return (
        <>
        <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {order.status === "PENDING" && (
              <>
                <DropdownMenuItem onClick={onPay}>
                  Complete payment
                </DropdownMenuItem>
                <DropdownMenuItem>Cancel payment</DropdownMenuItem>
              </>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </>
      );
    },
  },
];
