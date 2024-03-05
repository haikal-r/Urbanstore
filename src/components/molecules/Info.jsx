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
  const [checked, setChecked] = useState(false)

  const handleOnChange = () => {
    if(!checked){
      setChecked(true)
    }
    
  }

  useEffect(() => {
    if(!checked){
      handleOnChange
    }
    
  },[checked])

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
            className="h-10 px-6 font-semibold rounded-lg border-emerald-600 text-emerald-600 hover:text-emerald-600"
            variant="outline"
            type="submit"
          >
            Buy now
          </Button>
          <Button
            className="h-10 px-6 font-semibold rounded-lg text-white"
            type="button"
            onClick={() => dispatch(addToCart({ id: parsedId, qty:1 }))}
          >
            + Add to cart
          </Button>
        </div>
        <button
          className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
          type="button"
          aria-label="Like"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
     
    </form>
  )
}

export default Info