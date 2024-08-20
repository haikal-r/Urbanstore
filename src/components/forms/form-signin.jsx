// import component
import { Icons } from "@/components/atoms/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// import react-redux
import { getProfile } from "@/store/slices/auth-slice";
import { useDispatch, useSelector } from "react-redux";

// import react-router-dom
import { useNavigate } from "react-router-dom";

import { useLogin } from "@/features/auth/use-login";
import { authSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate: login, isLoading: loginIsLoading } = useLogin({
    onSuccess: () => {
      dispatch(getProfile());
      toast.success("Success Sign in");
      navigate("/");
    },
    onError: (error) => {
      toast.error('Sign in failed. Please check your email and password and try again.');
    },
  });

  const form = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isLoading: stateIsLoading } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="rodneymullen180@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2" disabled={loginIsLoading && stateIsLoading}>
          {loginIsLoading && stateIsLoading && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Continue
          <span className="sr-only">Continue to email verification page</span>
        </Button>
      </form>
    </Form>
  );
};

export default FormLogin;
