import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { useState, useEffect } from "react";

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
        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
          Review {product.rating.rate}/5
        </div>
      </div>
      <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div className="space-x-2 flex text-sm">
          <label>
            <input
              className="sr-only peer"
              name="size"
              type="radio"
              value="xs"
              onChange={handleOnChange}
              checked={checked}
            />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XS
            </div>
          </label>
          <label>
            <input
              className="sr-only peer"
              name="size"
              type="radio"
              value="s"
              onChange={handleOnChange}
              checked={checked}
            />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              S
            </div>
          </label>
          <label>
            <input
              className="sr-only peer"
              name="size"
              type="radio"
              value="m"
              onChange={handleOnChange}
              checked={checked}
            />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              M
            </div>
          </label>
          <label>
            <input
              className="sr-only peer"
              name="size"
              type="radio"
              value="l"
              onChange={handleOnChange}
              checked={checked}
            />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              L
            </div>
          </label>
          <label>
            <input
              className="sr-only peer"
              name="size"
              type="radio"
              value="xl"
              onChange={handleOnChange}
              checked={checked}
            />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XL
            </div>
          </label>
        </div>
      </div>
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button
            className="h-10 px-6 font-semibold rounded-lg bg-black text-white"
            type="submit"
          >
            Buy now
          </button>
          <button
            className="h-10 px-6 font-semibold rounded-lg border border-slate-200 text-slate-900"
            type="button"
            onClick={() => dispatch(addToCart({ id: parsedId, qty:1 }))}
          >
            Add to cart
          </button>
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
      <p className="text-sm text-slate-700">{product.description}</p>
    </form>
  )
}

export default Info