// import component
import OAuthButton from "@/components/molecules/google-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import react-redux
import { useSelector } from "react-redux";

// import react-router-dom
import { Link } from "react-router-dom";

import FormLogin from "@/components/forms/form-signin";
import { navigate } from "@/lib/utils";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: { name: user } } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const googleHandler = () => {
    setIsLoading(true);
    window.open(`${API_URL}/auth/google`, "_self");
  };


  return (
    <Card className="w-full lg:w-[500px]">
      <CardHeader className="space-y-1">
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Choose your preferred sign in method</CardDescription>
      </CardHeader>
      <CardContent className="md:pb-4 pb-2">
        <FormLogin />
      </CardContent>

      <CardContent className="flex flex-wrap gap-5">
        <div className="w-full flex justify-between items-center">
          <div className="text-sm text-muted-foreground ">
            <span className="inline-block mr-1">Doesn't have an account?</span>

            <Link
              aria-label="Sign up"
              to="/sign-up"
              className="text-primary underline-offset-4 transition-colors hover:underline text-sm"
            >
              Sign up
            </Link>
          </div>
          <Link
            aria-label="Reset password"
            to="/signin/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Reset password
          </Link>
        </div>
      </CardContent>

      <CardFooter className="grid gap-4 my-0 md:my-2">
        <div className="relative mb-0 md:mb-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <OAuthButton
          onClick={googleHandler}
          isLoading={isLoading}
        />
      </CardFooter>
    </Card>
  );
};

export default SignInPage;
