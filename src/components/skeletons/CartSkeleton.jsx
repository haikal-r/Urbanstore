import { Skeleton } from "../ui/skeleton";

const CartSkeleton = () => {
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-lg overflow-hidden sm:h-48 sm:w-48">
        <Skeleton className="aspect-square w-full" />
      </div>
      <div className="relative ml-4 flex gap-4 flex-col flex-1 sm:ml-6">
        <Skeleton className="w-full h-[35px]" />
        <Skeleton className="w-full h-[25px]" />
      </div>
    </li>
  );
};

export default CartSkeleton;
