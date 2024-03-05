import FormRegister from "@/components/molecules/FormRegister";
import AuthLayouts from "@/components/organism/AuthLayouts"

const SignUpPage = () => {
    return(
        <AuthLayouts title="Sign Up" type="register">
            <FormRegister />
        </AuthLayouts>
        
    )
}

export default SignUpPage;