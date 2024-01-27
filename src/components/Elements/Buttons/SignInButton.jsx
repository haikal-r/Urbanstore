import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const SignUpButton = () => {
    return(
        <Link to="/sign-in">
         <Button 
          classname="bg-emerald-600 text-white font-medium border-0 hover:bg-emerald-600"
          size="sm"
          >
            Sign In
          </Button>
        </Link>
    )
}

export default SignUpButton