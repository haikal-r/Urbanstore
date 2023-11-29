import { Fragment, useState } from "react";
import Button from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect } from "react";
import { getProducts } from "../services/product.service";


const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([])

  useEffect(() =>{
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  },[])

  useEffect(() => {
    getProducts((data) => {
        setProducts(data)
    })
  },[])

  useEffect(() => {
    if(products.length > 0 && cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id)
            return acc + product.price * item.qty;
        }, 0)
        setTotalPrice(sum);
        localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, products])      // Mengecek apakah ada perubahan dalam usestate carts dan products


  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    
    if(cart.find((item) => item.id === id)) {
        setCart(
            cart.map((item)=>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        )
    } else {
        setCart([...cart, { id, qty: 1 }])
    }
  }

  return (
    <Fragment>
      <div className="bg-blue-600 flex justify-end items-center gap-4 h-20 px-5 text-xl text-white font-bold mb-4 w-full">
        {email}
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5 px-3">
        <div className="w-3/5 flex flex-wrap gap-4">
          {products.length > 0 && products.map((product) => (
            <CardProduct>
              <CardProduct.Header images={product.image} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} handleAddToCart={handleAddToCart} id={product.id} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/5">
          <h1 className="font-bold text-2xl">Cart</h1>
          <table className="table-auto text-left border-separate border-spacing-x-5">
            <thead>
                <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && cart.map((item) => {
                    const product = products.find(
                        (product) => product.id === item.id
                        );
                    return (
                        <tr key={item.id}>
                            <td>{product.name}</td>
                            <td>${" "}{product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</td>
                            <td>{item.qty}</td>
                            <td>${" "}{(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan={3}><b>Total Price</b></td>
                    <td>$ {" "}{totalPrice.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
            }



export default ProductPage;
