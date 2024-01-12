import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";
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
                <p>Card Content</p>
                </CardContent>
                <CardFooter className="flex flex-wrap items-center gap-2">
                    <div className="text-sm text-muted-foreground">
                        <span className="inline-block">Don't have an account?</span>
                    </div>
                    <Link
                    aria-label='Sign in'
                    to='/sign-in'
                    className='text-primary underline-offset-4 transition-colors hover:underline text-sm'>
                    Sign in
                    </Link>
                </CardFooter>
            </Card>
        </form>
    )
}

export default FormRegister;