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

// import react-router-dom
import { Link } from "react-router-dom";

import FormRegister from "@/components/forms/form-signup";
import { API_URL } from "@/constants/api";
import { navigate } from "@/lib/utils";
import { fetchUserInfo } from "@/services/auth.service";
import { setToken, setUser } from "@/store/slices/auth-slice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoading: stateIsLoading } = useSelector((state) => state.auth);

  const handleGoogleLogin = () => {
    setIsLoading(true)
    googleLogin()
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      
      const { data } = await axios.post(`${API_URL}/auth/google`, {
        code,
      });

      const { data: userProfile } = data.data;
      const token = {
        accessToken:  data.data.accessToken,
        refreshToken:  data.data.refreshToken,
      }

      dispatch(setToken(token));
      dispatch(setUser(userProfile));
      setIsLoading(false);
      toast.success("Login Success");

      navigate("/");
    },
    onError: () => {
      setIsLoading(false);
      toast.error('Something wrong. Please try again.')
    },
    flow: "auth-code",
  });

  return (
    <Card className="w-full lg:w-[500px]">
      <CardHeader className="space-y-1">
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Choose your preferred sign in method</CardDescription>
      </CardHeader>
      <CardContent className="md:pb-4 pb-2">
        <FormRegister />
      </CardContent>
      <CardContent className="flex flex-wrap gap-5">
        <div className="text-sm text-muted-foreground ">
          <span className="inline-block mr-1"> Doesn't have an account?</span>
          <Link
            aria-label="Sign in"
            to="/sign-in"
            className="text-primary underline-offset-4 transition-colors hover:underline text-sm"
          >
            Sign In
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
        <OAuthButton onClick={handleGoogleLogin} isLoading={isLoading || stateIsLoading} />
      </CardFooter>
    </Card>
  );
};

export default SignUpPage;
