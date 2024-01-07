import Navbar from "../components/Layouts/Navbar";
import { useSelector } from "react-redux";
import { getProducts } from "../services/product.service";
import { Fragment, useState, useEffect } from "react";


const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]); // Mengecek apakah ada perubahan dalam usestate carts dan products

  return (
    <Fragment>
      <Navbar />
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
            {products.length > 0 &&
              cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      ${" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      ${" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td colSpan={3}>
                <b>Total Price</b>
              </td>
              <td>
                ${" "}
                {totalPrice.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default CartPage;
