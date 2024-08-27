import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";

const DetailProductSkeleton = () => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <Skeleton className="aspect-square w-full" />

      </div>
      <div className="md:w-1/2 w-full md:mt-0 mt-4 flex flex-col gap-y-3 p-5">
        <Skeleton className="w-full h-[30px] mb-2" />
        <Skeleton className="w-full h-[30px] mb-2" />
        <Skeleton className="w-full h-[30px] mb-2" />
        <Skeleton className="w-full h-[30px] mb-2" />
        <Separator />
        <div className="flex w-full gap-3 py-3">
          <Skeleton className="w-full h-[30px]" />
          <Skeleton className="w-full h-[30px]" />
        </div>
        
      </div>
    </>
  );
};

export default DetailProductSkeleton;
