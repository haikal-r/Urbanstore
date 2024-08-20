import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateCartItem } from "@/features/cart/use-create-cart";
import { useFetchCartItems } from "@/features/cart/use-fetch-cart";
import { cartItemSchema } from "@/lib/validations/cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Icons } from "@/components/atoms/icons";
import { Input } from "@/components/ui/input";

const AddToCart = ({ data }) => {
  const id = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);
  const { refetch: refetchCartItem } = useFetchCartItems();
  const { mutate: createCartItem } = useCreateCartItem({
    onSuccess: (response) => {
      toast.success(response.message)
      refetchCartItem();
      
    },
    onError: (error) => {
      toast.error(error.response.data.message)
    },
  });

  const form = useForm({
    resolver: zodResolver(cartItemSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    createCartItem({
      productId: data.id,
      storeId: data.productId,
      quantity: form.getValues("quantity"),
    });
    setIsAddingToCart(false);
    navigate("/cart");
    
  };

  const handleBuyingNow = () => {
    setIsBuyingNow(true);

    createCartItem({
      productId: data.id,
      storeId: data.productId,
      quantity: form.getValues("quantity"),
    })

    setIsBuyingNow(false);
    navigate("/cart");

  };

  return (
    <Form {...form}>
      <form
        className="flex-auto "
        onSubmit={form.handleSubmit(handleAddToCart)}
      >
        <div className="flex items-center mb-3">
          <Button
            id={`${id}-increment`}
            type="button"
            variant="outline"
            size="icon"
            className="size-8 shrink-0 rounded-r-none"
            onClick={() =>
              form.setValue(
                "quantity",
                Math.max(0, form.getValues("quantity") - 1)
              )
            }
            disabled={isAddingToCart}
          >
            <MinusIcon className="size-3" aria-hidden="true" />
            <span className="sr-only">Remove one item</span>
          </Button>

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="sr-only">Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    className="h-8 w-16 rounded-none pointer-events-none border-x-0 text-center"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;
                      const parsedValue = parseInt(value);
                      if (isNaN(parsedValue)) return;
                      field.onChange(parsedValue);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            id={`${id}-decrement`}
            type="button"
            variant="outline"
            size="icon"
            className="size-8 shrink-0 rounded-l-none"
            onClick={() =>
              form.setValue("quantity", form.getValues("quantity") + 1)
            }
            disabled={isAddingToCart}
          >
            <PlusIcon className="size-3" aria-hidden="true" />
            <span className="sr-only">Add one item</span>
          </Button>
        </div>

        <div className="flex space-x-4 mb-6">
          <div className="flex-auto flex space-x-4 ">
            <Button
              className="w-full "
              type="button"
              onClick={handleBuyingNow}
              disabled={isBuyingNow}
            >
              {isBuyingNow && (
                <Icons.spinner
                  className="mr-2 size-5 animate-spin"
                  aria-hidden="true"
                />
              )}
              Buy now
            </Button>
            <Button
              className="w-full"
              type="submit"
              variant="outline"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              {isAddingToCart && (
                <Icons.spinner
                  className="mr-2 size-5 animate-spin"
                  aria-hidden="true"
                />
              )}
              Add to cart
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AddToCart;
