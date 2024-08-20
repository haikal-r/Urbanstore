import { Skeleton } from "../ui/skeleton";

const CategoryCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton className="w-full h-[100px] rounded-2xl" key={i} />
      ))}
    </>
  );
};

export default CategoryCardSkeleton;
