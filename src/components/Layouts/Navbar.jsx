import CartButton from "../Elements/Buttons/CartButton";
import SearchButton from "../Elements/Buttons/SearchButton";
import { Link } from "react-router-dom";
import UserAccountNav from "../Elements/auth/UserAccountNav";
import { useLogin } from "@/hooks/useLogin";
import SignInButton from "../Elements/Buttons/SignInButton";
import { Landmark } from "lucide-react";
import { useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";


const Navbar = () => {
    const user = useLogin()
  return (
    <nav className="sticky top-0 z-50 bg-white flex justify-between items-center h-16 px-4 md:px-6 border-b text-sm text-black font-normal w-full">
      <div className="text-base font-bold ">
        <DesktopNavbar />
        
      </div>
      <div className=" flex justify-end items-center gap-2">
        <SearchButton />
        <CartButton />
        { user.username ? <UserAccountNav /> : <SignInButton /> }
        
      </div>
    </nav>
  );
};

export default Navbar;
