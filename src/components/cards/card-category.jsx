import { Link } from "react-router-dom";
import { Card, CardTitle } from "@/components/ui/card";

const CardCategory = ({ category }) => {
  return (
    <Link to={`/category/${category.slug}`}>
      <Card className="relative flex size-full flex-col bg-white p-4 transition-colors hover:bg-muted/50">
        <div className="flex justify-center items-center py-4">
          <CardTitle className="capitalize text-lg md:text-xl font-medium tracking-tighter">
            {category.name}
          </CardTitle>
        </div>
      </Card>
    </Link>
  );
};

export default CardCategory;
