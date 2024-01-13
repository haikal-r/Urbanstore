import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const SignInPage = () => {
   
    return (
        <AuthLayouts title="Sign in" type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default SignInPage;