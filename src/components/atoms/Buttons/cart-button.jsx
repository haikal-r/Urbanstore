import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CartButton = ({ cart }) => {
  const [totalCart, setTotalCart] = useState(0);
  
  const navigate = useNavigate();
  console.log(cart)

  useEffect(() => {
    setTotalCart(cart.length)
  }, [cart])

  return (
    <Button
      onClick={() => navigate("/cart")}
      variant="outline"
      className="gap-1 shadow-sm"
      size="sm"
    >
      <ShoppingCart width={17} />
      {totalCart > 0 && <p className="text-sm">{totalCart}</p>}
    </Button>
  );
};

export default CartButton;

