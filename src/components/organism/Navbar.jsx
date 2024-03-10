import CartButton from "../atoms/Buttons/CartButton";
import SearchButton from "../atoms/Buttons/SearchButton";
import UserAccountNav from "../atoms/auth/UserAccountNav";
import { useLogin } from "@/hooks/useLogin";
import SignInButton from "../atoms/Buttons/SignInButton";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar"
import { Separator } from "@/components/ui/separator";


const Navbar = () => {
    const user = useLogin()
  return (
    <nav className="sticky top-0 z-50 bg-white flex justify-between items-center h-16 px-4 md:px-6 border-b text-sm text-black font-normal w-full">
      {/* Left */}
      <div className="text-base font-bold ">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
      {/* Right */}
      <div className="flex justify-end items-center gap-2 h-5">
        <SearchButton />
        <CartButton />
        <Separator orientation="vertical" className='mx-2'/>
        { user.username ? <UserAccountNav /> : <SignInButton /> }
      </div>
    </nav>
  );
};

export default Navbar;
