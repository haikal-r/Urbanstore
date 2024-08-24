import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { getRandomPatternStyle } from '@/lib/generate-pattern'
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const StoreCard = ({ data }) => {
  return (
    <Link to={`/dashboard/stores/${data.slug}`}>
      <Card className="h-full overflow-hidden">
        <AspectRatio ratio={21 / 9}>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-zinc-950/50" />
          <div className="h-full rounded-t-md border-b" />
        </AspectRatio>
        <CardHeader>
          <CardTitle className="line-clamp-1 text-lg">{data.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {data.description}
          </CardDescription>
        </CardHeader>
        <CardContent >
          <p
            className={cn(
              buttonVariants({
                className: "w-full rounded-lg",
              })
            )}
          >
            Add Product
          </p>
        </CardContent>
      </Card>
      <span className="sr-only">{data.name}</span>
    </Link>
  );
};

export default StoreCard;
