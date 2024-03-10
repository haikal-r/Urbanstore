import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { useState, useEffect } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const Info = ({ product }) => {
  const { id } = useParams()
  const parsedId = parseInt(id)
  const dispatch = useDispatch()

  return(
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-lg font-semibold text-slate-900">
          {product.title}
        </h1>
        <div className="text-lg font-semibold text-slate-500">
          ${product.price}
        </div>
        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-5">
          Review {product.rating.rate}/5
        </div>
        <p className="text-sm text-slate-700">{product.description}</p>
      </div>
     <Separator className='my-5' />
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <Button
            className="h-10 px-6 font-semibold rounded-lg "
            variant="outline"
            type="submit"
          >
            Buy now
          </Button>
          <Button
            className="h-10 px-6 font-semibold rounded-lg text-white"
            type="button"
            onClick={() => dispatch(addToCart({ id: parsedId, qty:1, price: product.price }))}
          >
            + Add to cart
          </Button>
        </div>
      </div>
     
    </form>
  )
}

export default Info