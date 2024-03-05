import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SignUpButton = () => {
  return (
    <Link to="/sign-in">
      <Button className="text-white text-xs font-medium rounded-lg" size="sm">
        Sign In
      </Button>
    </Link>
  );
};

export default SignUpButton;
