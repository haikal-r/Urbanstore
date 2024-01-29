import { Skeleton } from "../ui/skeleton";

const CartSkeleton = () => {
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-lg overflow-hidden sm:h-48 sm:w-48">
        <Skeleton className='aspect-square w-full' />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <Skeleton className='w-10 h-10 rounded-full' />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
           <Skeleton className='w-[500px] h-[60px]' />
          </div>
          <div className="mt-1 text-sm">
            <Skeleton className='w-[100px] h-[30px]' />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartSkeleton;
