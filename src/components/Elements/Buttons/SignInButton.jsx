import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SignUpButton = () => {
  return (
    <Link to="/sign-in">
      <Button className="text-white font-medium rounded-xl" size="sm">
        Sign In
      </Button>
    </Link>
  );
};

export default SignUpButton;
