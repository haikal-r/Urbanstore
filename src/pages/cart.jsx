import { useSelector } from "react-redux";
import Summary from "@/components/molecules/Summary";
import CartItem from "@/components/molecules/CartItem";
import { useFetchProducts } from "@/hooks/product/useFetchProducts";
import CartSkeleton from "@/components/skeletons/CartSkeleton";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.data);
  const { data: products, isLoading, isFetching } = useFetchProducts();

  return (
    <section className="px-4 sm:px-6 py-10">
      <h1 className="font-bold text-3xl">Shopping Cart</h1>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
        <div className="lg:col-span-7">
          <ul>
            {isLoading || isFetching ? (
              <CartSkeleton />
            ) : (
              cart.map((item) => {
                const product = products?.data.find(
                  (product) => product.id === item.id
                );
                return <CartItem key={product.id} data={product} />;
              })
            )}
          </ul>
        </div>
        <Summary />
      </div>
    </section>
  );
};

export default CartPage;
