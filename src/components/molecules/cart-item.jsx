import { X } from "lucide-react";
import IconButton from "../ui/iconButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "@/store/slices/cart-slice";
import { useDeleteCart } from "@/features/cart/use-delete-cart";
import { axiosPrivate } from "@/lib/axios";
import toast from "react-hot-toast";


const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const { mutate: deleteCartItem } = useDeleteCart({
    onSuccess: () => {
      toast.success("Success Delete Item")
      
    }
  })

  const onRemove = async () => {
    dispatch(removeItem(data.productId));
    await axiosPrivate.delete("/api/v1/carts", { productId: data.id  })

  };


  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-lg overflow-hidden sm:h-48 sm:w-48">
        <img
          src={data.images ? data.images[0] : "gambar"}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <Link
              to="/"
              className="sm:text-lg font-semibold text-black line-clamp-2"
            >
              {data.name}
            </Link>
          </div>
          <div className="mt-1 text-sm">
            <p className="text-gray-500 sm:text-center capitalize">
              {data.category} 
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
