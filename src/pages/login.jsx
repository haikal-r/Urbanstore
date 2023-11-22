import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default LoginPage;