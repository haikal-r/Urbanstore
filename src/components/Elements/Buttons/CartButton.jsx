import Button from "."
import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = () => {
    const cart = useSelector((state) => state.cart.data.length);
    const navigate = useNavigate();

    return(
        <Button
        onClick={() => navigate("/cart")}
        classname="flex justify-between items-center gap-1"
      >
        <Icon icon="f7:cart" width={20} />
        <p className="text-sm">{cart}</p>
      </Button>
    )
}

export default CartButton;