import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem('email', event.target.email.value)
        // localStorage.setItem('password', event.target.password.value)
        // window.location.href = '/products'
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        login(data, (status, res) => {
            if(status) {
                localStorage.setItem("token", res)
            }else {
                console.log(res)
            }
        })
    }

    return(
        <form onSubmit={handleLogin}>
          <InputForm
            label="Username"
            type="text"
            placeholder="jhon doe"
            name="username"
          />
          <InputForm
            label="password"
            type="password"
            placeholder="******"
            name="password"
          />
          <Button classname="bg-blue-600 w-full mb-2" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin;