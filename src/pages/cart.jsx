import { useSelector } from "react-redux";
import { getProducts } from "../services/product.service";
import { useState, useEffect } from "react";
import CartSkeleton from "@/components/skeletons/CartSkeleton";
import Summary from "@/components/molecules/Summary";
import CartItem from "@/components/molecules/CartItem";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      setIsMounted(true);
    });
  }, []);

  if (!isMounted) {
    return <CartSkeleton />;
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
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
                  return <CartItem key={product.id} data={product} />;
                })}
            </ul>
          </div>
          <Summary />
        </div>
      </section>
    </div>
  );
};

export default CartPage;
