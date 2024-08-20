import { Skeleton } from "../ui/skeleton";

const CartSkeleton = () => {
  return (
    <>
      <div className="md:col-span-8">
        <Skeleton className="aspect-square h-[146px] w-full" />
      </div>
      <div className="md:col-span-4">
        <Skeleton className="aspect-square md:mt-0 mt-8 md:h-[189px] h-16 w-full" />
      </div>
    </>
  );
};

export default CartSkeleton;
