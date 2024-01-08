import { useLogin } from "../../hooks/useLogin";
import CartButton from "../Elements/Buttons/CartButton";
import SearchButton from "../Elements/Buttons/SearchButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  const username = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center  h-16 px-5 border-b text-base text-black font-normal mb-4 w-full">
      <div className="text-2xl font-bold text-gradient-to-r from-purple-500 via-blue-500 to-green-500">
        <Link to="/">
            Next JS
        </Link>
      </div>
      <div className=" flex justify-end items-center gap-3">
        {username}
        <SearchButton />
        <CartButton />
      </div>
    </nav>
  );
};

export default Navbar;
