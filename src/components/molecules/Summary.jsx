import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { formatPrice } from "@/lib/utils";

const Summary = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty * item.price;
    }, 0);
    setTotalPrice(sum);
  }, [cart]);

  return (
    <div className="sticky bottom-0 lg:right-0 lg:top-32 z-10 mt-16 rounded-lg bg-gray-100 lg:px-4 lg:py-6 p-3 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="hidden lg:block text-lg font-medium text-gray-900">
        Order Summary
      </h2>
      <div className="lg:mt-6 space-y-4">
        <div className="flex items-center lg:flex-col justify-end gap-3 lg:border-t lg:border-gray-200 lg:pt-4">
          <div className="flex flex-col lg:w-full lg:flex-row lg:justify-between text-sm lg:text-base">
            <span className="font-medium text-gray-900">Order total</span>
            <span className="font-bold">{formatPrice(totalPrice)}</span>
          </div>
          <Button
            className="lg:w-full mt-6 my-auto hover:before:-translate-x-[500px] rounded-lg"
            disabled={totalPrice === 0}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
