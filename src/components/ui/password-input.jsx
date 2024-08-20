import InputForm from "../atoms/input";
import * as React from "react";
import { Button } from "./button";
import { useState } from "react";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Input } from "./input";
import { cn } from "@/lib/utils";

const PasswordInput =
  React.forwardRef <
  HTMLInputElement >
  ((
    {
      className,
      label,
      placeholder,
      onChange,
      value,
      name,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);


    return (
      <div className="relative">
        <InputForm
          type={showPassword ? "text" : "password"}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          ref={ref}
          {...props}
        />

        <Button
          type="button"
          variant="ghost"
          className="absolute right-0 top-0 h-full px-3 py-1 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          size="sm"
          disabled={value === "" || disabled}
        >
          {showPassword ? (
            <EyeNoneIcon className="size-4" aria-hidden="true" />
          ) : (
            <EyeOpenIcon className="size-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    );
  });



export default PasswordInput;
