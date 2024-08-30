import { Icons } from "@/components/atoms/icons";
import Summary from "@/components/molecules/summary";
import CartSkeleton from "@/components/skeletons/cart-skeleton";
import CartTable from "@/components/tables/cart/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useDeleteCartItem } from "@/features/cart/use-delete-cart";
import { useFetchCartItems } from "@/features/cart/use-fetch-cart";
import { formatPriceIDR, navigate } from "@/lib/utils";
import { fetchCart, removeItem } from "@/store/slices/cart-slice";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.data.email);
  if (!user) return navigate("/sign-in");

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const columns = [
    {
      id: "select",
      header: ({ table }) => {
        const handleSelectAll = (value) => {
          table.toggleAllRowsSelected(!!value);

          if (value) {
            const quantity = table.getRowModel().rows.map((row) => ({
              id: row.original.id,
              quantity: row.original.quantity,
            }));

            const prices = table.getRowModel().rows.map((row) => ({
              id: row.original.id,
              price: row.original.price,
            }));

            const productData = quantity.map((q) => {
              const p = prices.find((p) => p.id === q.id);
              return {
                id: q.id,
                quantity: q.quantity,
                price: p ? p.price : 0,
              };
            });

            const items = productData.map((item) => item.quantity * item.price);

            setSelectedPrices(items);
          } else {
            setSelectedPrices([]);
          }
        };
        return (
          <div className="flex items-center">
            <Checkbox
              checked={
                table.getIsAllRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={handleSelectAll}
              aria-label="Select all"
            />
          </div>
        );
      },
      cell: ({ row }) => {
        const handleSelect = (value) => {
          row.toggleSelected(!!value);
          if (value) {
            const price = parseInt(row.original.price);
            const quantity = row.original.quantity;

            setSelectedPrices((prevPrice) => [...prevPrice, price * quantity]);
          } else {
            setSelectedPrices((prevPrice) =>
              prevPrice.filter(
                (p) =>
                  p !== parseInt(row.original.price) * row.original.quantity
              )
            );
          }
        };
        return (
          <div className="flex items-center">
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={handleSelect}
              aria-label="Select row"
            />
          </div>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "Product",
      header: () => <div className="text-left">Product</div>,
      cell: ({ row }) => {
        const onRemove = (id) => {
          dispatch(removeItem(row.original));
          deleteCartItem({ productId: id });
        };
        return (
          <div className="flex gap-2 items-center">
            {row.original.images[0] ? (
              <img
                src={row.original.images[0]}
                alt="images"
                className="max-w-[100px]"
              />
            ) : (
              <div
                aria-label="Product Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex aspect-square size-full flex-1 items-center justify-center bg-secondary max-w-[100px]"
              >
                <Icons.placeholder
                  className="size-5 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}

            <div className="flex flex-col items-start gap-2">
              <p>{row.original.name}</p>
              <button
                onClick={() => onRemove(row.original.productId)}
                className="hover:underline text-[13px]"
              >
                Remove
              </button>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "price",
      header: () => <div className="text-center">Price</div>,
      cell: ({ row }) => {
        return (
          <div className="flex justify-center items-center">
            <p>{formatPriceIDR(row.original.price)}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "quantity",
      header: () => <div className="text-center">Quantity</div>,
      cell: ({ row }) => {
        const id = row.original.id;
        const [quantity, setQuantity] = useState(row.original.quantity);

        return (
          <div className="flex items-center justify-center ">
            <Button
              id={`${id}-increment`}
              type="button"
              variant="outline"
              size="icon"
              className="size-8 shrink-0 rounded-r-none"
              onClick={() => setQuantity(quantity - 1)}
            >
              <MinusIcon className="size-3" aria-hidden="true" />
              <span className="sr-only">Remove one item</span>
            </Button>

            <Input
              type="number"
              inputMode="numeric"
              min={0}
              className="h-8 w-16 rounded-none pointer-events-none border-x-0 text-center"
              value={quantity}
              onChange={(e) => {
                const value = e.target.value;
                const parsedValue = parseInt(value);
                if (isNaN(parsedValue)) return;
              }}
              readOnly
            />

            <Button
              id={`${id}-decrement`}
              type="button"
              variant="outline"
              size="icon"
              className="size-8 shrink-0 rounded-l-none"
              onClick={() => setQuantity(quantity + 1)}
              readOnly
            >
              <PlusIcon className="size-3" aria-hidden="true" />
              <span className="sr-only">Add one item</span>
            </Button>
          </div>
        );
      },
    },
  ];

  const {
    data: carts,
    isLoading: cartItemsIsLoading,
    isFetching,
    refetch: refetchCartItems,
    error,
  } = useFetchCartItems();

  const { mutate: deleteCartItem, isLoading: deleteCartItemIsLoading } =
    useDeleteCartItem({
      onSuccess: (response) => {
        refetchCartItems();
      },
    });

  const totalPrice =
    selectedPrices.length >= 1
      ? selectedPrices.reduce((acc, curr) => acc + curr, 0)
      : selectedPrices[0];

  return (
    <div className="md:grid md:grid-cols-12  mx-auto gap-x-12 w-auto py-8 px-6  max-w-6xl">
      <div className="col-span-full mb-4">
        <h1 className="font-bold mb-4 text-3xl">Shopping Cart</h1>
      </div>
      {cartItemsIsLoading || isFetching || deleteCartItemIsLoading ? (
        <CartSkeleton />
      ) : (
        <>
          <div className="md:col-span-8">
            <CartTable columns={columns} data={carts?.cartItems || []} />
          </div>

          <div className="md:col-span-4">
            <Summary totalPrice={totalPrice || 0} />
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
