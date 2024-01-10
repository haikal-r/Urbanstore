import CartButton from "../Elements/Buttons/CartButton";
import SearchButton from "../Elements/Buttons/SearchButton";
import { Link } from "react-router-dom";
import UserAccountNav from "../Elements/auth/UserAccountNav";
import { useLogin } from "@/hooks/useLogin";
import SignUpButton from "../Elements/Buttons/SignupButton";


const Navbar = () => {
    const user = useLogin()
  return (
    <nav className="sticky top-0 z-50 bg-white flex justify-between items-center  h-16 px-5 border-b text-base text-black font-normal mb-4 w-full">
      <div className="text-2xl font-bold  ">
        <Link to="/">Next JS</Link>
      </div>
      <div className=" flex justify-end items-center gap-3">
        <SearchButton />
        <CartButton />
        { user ? <UserAccountNav /> : <SignUpButton /> }
      </div>
    </nav>
  );
};

export default Navbar;
