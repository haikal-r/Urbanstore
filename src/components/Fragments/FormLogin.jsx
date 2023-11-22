import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";

const FormLogin = () => {
    return(
        <form action="">
          <InputForm
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="******"
            name="password"
          />
          <Button classname="bg-blue-600 w-full mb-2">Login</Button>
        </form>
    )
}

export default FormLogin;