import FormLogin from "../components/molecules/FormLogin";
import AuthLayouts from "../components/organism/AuthLayouts";

const SignInPage = () => {
   
    return (
        <AuthLayouts title="Sign in" type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default SignInPage;