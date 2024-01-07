import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Buttons";

const Navbar = () => {
  const username = useLogin();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  
  return (
    <nav className="sticky top-0 bg-white flex justify-end items-center gap-4 h-16 px-5 border-b text-lg text-black text-medium mb-4 w-full">
      {username}
      <Button onClick={handleLogout}>Logout</Button>
    </nav>
  );
};

export default Navbar;
