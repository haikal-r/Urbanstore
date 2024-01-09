import { Link } from "react-router-dom"
import Button from "."

const SignUpButton = () => {
    return(
        <Link to="/sign-in">
         <Button>Sign Up</Button>
        </Link>
    )
}

export default SignUpButton