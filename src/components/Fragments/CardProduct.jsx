import { Link } from "react-router-dom"
import Button from "../Elements/Buttons"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"

const CardProduct = (props) => {
    const { children } = props
    return(
        <div className="w-full max-w-xs bg-gray-900 border border-gray-700 rounded-lg shadow">
        {children}
      </div>
    )
}

const Header = (props) => {
    const { images, id } = props;
    return(
        <Link to={`/product/${id}`}>
          <img src={images} alt="" className="p-8 rounded-t-lg w-50 h-60 object-cover" />
        </Link>
    )
}

const Body = (props) => {
    const { children,name } = props;
    return(
        <div className="px-5 pb-5">
          <h1 className="text-2xl text-white font-bold tracking-tight">
           {name.substring(0,20)}
          </h1>
          <p className="text-sm text-white">
           {children.substring(0,100)}
          </p>
        </div>
    )
}

const Footer = (props) => {
    const { price, id } = props;
    const dispatch = useDispatch()
    return(
        <div className="flex justify-between items-center px-5 pb-5">
            <h1 className="text-xl text-white font-semibold">${price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</h1>
            <Button classname="bg-blue-600" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>Add to Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;