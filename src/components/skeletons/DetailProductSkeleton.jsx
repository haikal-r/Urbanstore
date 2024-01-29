import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";
import { Fragment } from "react";

const DetailProductSkeleton = () => {
  return (
    <Fragment>
     
        <div className="p-5">
          <Skeleton className="aspect-square w-full" />
          <div className="mt-6 w-full">
            <div className="grid grid-cols-4 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="aspect-square w-full" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 p-5">
          <Skeleton className="w-full h-[50px]" />
          <Skeleton className="w-[250px] h-[50px]" />
          <Skeleton className="w-[400px] h-[50px]" />
          <Separator />
          <div className="flex gap-3 py-3">
            <Skeleton className="w-[200px] h-[50px]" />
            <Skeleton className="w-[200px] h-[50px]" />
          </div>
          <Skeleton className="w-full h-[200px] rounded full" />
        </div>
    
    </Fragment>
  );
};

export default DetailProductSkeleton;
