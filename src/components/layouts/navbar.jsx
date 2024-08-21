import { useSelector } from "react-redux";
import UserAccountNav from "@/components/atoms/user-account-nav";
import CartButton from "@/components/atoms/cart-button";
import SignInButton from "@/components/atoms/login-button";
import SearchButton from "@/components/atoms/search-button";
import DesktopNavbar from "@/components/layouts/desktop-navbar";
import MobileNavbar from "@/components/layouts/mobile-navbar";

const Navbar = () => {
  const user = useSelector((state) => state.auth.data);
  const cart = useSelector((state) => state.cart.data) || [];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="flex-none relative text-sm leading-6">
        <nav className="mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-[75px]">
          <div className="flex justify-between items-center py-3.5">
            {/* Left */}
            <div className="text-base text-bal font-bold ">
              <DesktopNavbar />
              <MobileNavbar />
            </div>
            {/* Right */}
            <div className="flex justify-end items-center gap-2 h-5">
              <SearchButton />
              <CartButton cart={cart} />
              {user?.email ? <UserAccountNav user={user} /> : <SignInButton />}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
