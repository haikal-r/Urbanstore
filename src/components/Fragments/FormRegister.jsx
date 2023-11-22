import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";


const FormRegister = () => {
    return(
        <form action="">
        <InputForm
          label="Fullname"
          type="text"
          placeholder="insert your fullname..."
          name="email"
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="Example@gmail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />
        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="*****"
          name="confirmPassword"
        />
        <Button classname="bg-blue-600 w-full">Regiser</Button>
      </form>
    )
}

export default FormRegister;