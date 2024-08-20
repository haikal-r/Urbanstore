import AuthLayouts from "@/pages/auth/layout"
import SignUpPage from "@/pages/auth/sign-up/page";

const SignUpLayout = () => {
    return(
        <AuthLayouts title="Sign Up" type="register">
            <SignUpPage />
        </AuthLayouts>
    )
}

export default SignUpLayout;