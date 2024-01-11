import Button from ".";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CartButton = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const navigate = useNavigate();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <Button
      onClick={() => navigate("/cart")}
      classname="flex justify-between items-center gap-1"
    >
      <ShoppingCart width={17} />
      <p className="text-sm">{totalCart}</p>
    </Button>
  );
};

export default CartButton;
