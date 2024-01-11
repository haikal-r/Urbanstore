import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts"

const SignUpPage = () => {
    return(
        <AuthLayouts title="Sign Up" type="register">
            <FormRegister />
        </AuthLayouts>
        
    )
}

export default SignUpPage;