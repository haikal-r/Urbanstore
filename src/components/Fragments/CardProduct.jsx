import { Link } from "react-router-dom";
import Button from "../Elements/Buttons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { Icon } from "@iconify/react";
import { ShoppingCart } from "lucide-react";
import IconButton from "../ui/iconButton";

const CardProduct = (props) => {
  const { children, id } = props;
  return (
    <Link to={`/product/${id}`} className="group flex justify-center">
      <div className="w-full max-w-80 h-full space-y-4 bg-white border rounded-2xl shadow-lg hover:shadow-2xl duration-300 transition-all">
        {children}
      </div>
    </Link>
  );
};

const Header = (props) => {
  const { images } = props;
  return (
    <div className="aspect-square m-3 rounded-2xl bg-gray-100 relative">
      <img
        src={images}
        alt=""
        className="aspect-square object-cover rounded-2xl"
      />
    </div>
  );
};

const Body = (props) => {
  const { name, category } = props;
  return (
    <div className="px-5 space-y-2 pb-5">
      <p className="text-sm font-medium text-gray-500">{category}</p>
      <p className="font-semibold text-lg text-black tracking-tight truncate group-hover:text-emerald-800">
        {name.substring(0, 20)}
      </p>
      <p className="text-sm text-black"></p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center px-5 pb-5">
      <h1 className="text-xl text-emerald-800 font-semibold">
        $
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </h1>
      <div className="flex justify-center group/icon">
        <IconButton
          aria-label="add-to-cart"
          className="bg-emerald-50 group-hover/icon:bg-emerald-500"
          icon={
            <ShoppingCart
              size={20}
              className="text-emerald-600 group-hover/icon:text-emerald-50"
            />
          }
        />
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
