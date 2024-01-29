import InputForm from "../Elements/Input";
import { Link } from "react-router-dom";
import { login } from "../../services/auth.service";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        login(data, (status, res) => {
            if(status) {
                localStorage.setItem("token", res)
                window.location.href = '/'
            }else {
                console.log(res)
            }
        })
    }

    return(
        <form onSubmit={handleLogin} className="mx-auto" >
            <Card className="w- xl:w-[500px]">
                <CardHeader className="space-y-1">
                <CardTitle>Sign in</CardTitle>
                <CardDescription>Choose your preferred sign in method</CardDescription>
                </CardHeader>
                <CardContent>
                    <InputForm
                        label="Username"
                        type="text"
                        placeholder=""
                        name="username"
                    />
                    <InputForm
                        label="Password"
                        type="password"
                        placeholder=""
                        name="password"
                    />
                </CardContent>
                <CardFooter className="flex flex-wrap justify-between items-center gap-2">
                    <div className="text-sm text-muted-foreground sm:w-[60%]">
                        <span className="inline-block mr-1">Don't have an account?</span>
                        <Link
                        aria-label='Sign up'
                        to='/sign-up'
                        className='text-primary underline-offset-4 transition-colors hover:underline text-sm'>
                        Sign up
                        </Link>
                    </div>
                    <Button className="px-7 rounded-lg">Next</Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default FormLogin;