import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LoginButton = () => {
  return (
    <Link to="/sign-in">
      <Button className="text-white text-xs px-4 font-medium rounded-lg" size="sm">
        Sign In
      </Button>
    </Link>
  );
};

export default LoginButton;
