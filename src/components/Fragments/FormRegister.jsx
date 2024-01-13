import InputForm from "../Elements/Input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const FormRegister = () => {
    return(
        <form className="mx-auto" >
            <Card className=" xl:w-[500px]">
                <CardHeader className="space-y-1">
                <CardTitle>Sign up</CardTitle>
                <CardDescription>Choose your preferred sign up method</CardDescription>
                </CardHeader>
                <CardContent>
                    <InputForm
                        label="Email"
                        type="email"
                        placeholder=""
                        name="email"
                    />
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
                    aria-label='Sign in'
                    to='/sign-in'
                    className='text-primary underline-offset-4 transition-colors hover:underline text-sm'>
                    Sign in
                    </Link>
                    </div>
                    <Button className="px-7">Next</Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default FormRegister;