import AuthLayouts from "@/pages/auth/layout"
import SignInPage from "@/pages/auth/sign-in/page";

const SignInLayout = () => {
    return(
        <AuthLayouts title="Sign Up" type="register">
            <SignInPage />
        </AuthLayouts>
    )
}

export default SignInLayout;