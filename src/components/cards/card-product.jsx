import { Link } from "react-router-dom";
import { formatPriceIDR } from "@/lib/utils";
import { Icons } from "../atoms/icons";
import React from "react";

const ProductCard = React.forwardRef(({ product }, ref) => {
  return (
    <div
      className="group w-full h-full space-y-4 bg-white border rounded-2xl shadow-lg hover:shadow-2xl duration-300 transition-all"
      ref={ref}
    >
      <Link to={`/product/${product.uuid}`}>
        {/* header */}
        <div className="aspect-square m-3 rounded-2xl relative flex justify-center items-center">
          <div className="absolute inset-0 z-10 bg-zinc-950/5 rounded-lg" />
          {product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="object-cover rounded-2xl h-full"
            />
          ) : (
            <div
              aria-label="Product Placeholder"
              role="img"
              aria-roledescription="placeholder"
              className="flex aspect-square size-full flex-1 items-center justify-center bg-secondary"
            >
              <Icons.placeholder
                className="size-9 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {/* body */}
        <div className="px-5 space-y-2 pb-5">
          <p className="text-sm font-medium text-gray-500">{product.category}</p>
          <p className="font-semibold text-md md:text-lg text-black tracking-tight truncate ">
            {product.name}
          </p>
          <p className="text-sm text-black"></p>
        </div>

        {/* footer */}
        <div className="flex justify-between items-center px-5 pb-5">
          <h1 className="text-sm md:text-xl  font-semibold">
            {formatPriceIDR(product.price)}
          </h1>
        </div>
      </Link>
    </div>
  );
});

export default ProductCard;
