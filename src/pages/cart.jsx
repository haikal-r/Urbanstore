import Navbar from "../components/Layouts/Navbar";
import { useSelector } from "react-redux";
import { getProducts } from "../services/product.service";
import { Fragment, useState, useEffect, lazy, Suspense } from "react";
import Footer from "@/components/Layouts/Footer";
import CartSkeleton from "@/components/skeletons/CartSkeleton";
import Summary from "@/components/Fragments/Summary";
import { formatPrice } from "@/lib/utils";

const CartItem = lazy(() => import("@/components/Fragments/CartItem"));

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
      <div className="max-w-7xl mx-auto">
        <section className="px-4 sm:px-6 py-10">
          <h1 className="font-bold text-3xl">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              <ul>
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <Suspense fallback={<CartSkeleton />} key={product.id}>
                        <CartItem key={product.id} data={product} />
                      </Suspense>
                    );
                  })}
              </ul>
            </div>
          <Summary totalPrice={formatPrice(totalPrice)} />
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CartPage;
