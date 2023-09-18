import React, { useState, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../validation/RegisterForm";
import { Register } from "@/actions/register";
import { Login } from "@/actions/login";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  role: string;
}

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const router = useRouter();

  // Initialize state for the "LOGIN" variant and user role.
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [role, setRole] = useState<string>("user");

  // Define a function to toggle between variants.
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  // Function to handle form submission.
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { email, password } = data;
    data.role = role;

    // If "REGISTER" variant is selected, perform registration.
    if (variant === "REGISTER") {
      Register(data).then((res) => {
        const { isSuccess, message } = res;
        if (isSuccess) {
          toast.success("Registered successfully please login.");
          setVariant("LOGIN");
        } else {
          toast.error(message);
        }
      });
    }
    // If "LOGIN" variant is selected, perform login.
    else {
      Login(email, password).then((res) => {
        const { isSuccess, message, user } = res;
        if (isSuccess) {
          document.cookie = `token=${user.token}`;
          if (user.role === "user") router.push("/home");
          else if (user.role === "admin") router.push("/admin");
        } else {
          toast.error(message);
        }
      });
    }
  };

  return (
    <div className="bg-white p-7 rounded-xl w-[350px]">
      <div className="py-8">
        <h1 className="font-semibold text-2xl">
          {variant === "LOGIN" ? "Sign in to" : "Create"} your account
        </h1>
        <h2 className="text-gray-500">to continue to this app.</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {variant === "REGISTER" && (
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block font-semibold text-gray-500 text-sm"
            >
              Username
            </label>
            <input
              {...register("username", usernameValidation)}
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:border-purple-500  transition-all duration-300"
            />
            {errors.username && (
              <p className="text-red-600 text-xs" role="alert">
                {errors.username.message}
              </p>
            )}
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-semibold text-gray-500 text-sm"
          >
            Email
          </label>
          <input
            {...register("email", emailValidation)}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:border-purple-500  transition-all duration-300"
          />
          {errors.email && (
            <p className="text-red-600 text-xs" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block font-semibold text-gray-500 text-sm"
          >
            Password
          </label>
          <input
            {...register("password", passwordValidation)}
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:border-purple-500  transition-all duration-300"
          />
          {errors.password && (
            <p className="text-red-600 text-xs" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>
        {variant === "REGISTER" && (
          <div>
            <h5 className="text-center mb-2 text-gray-600 font-semibold tracking-widest">
              REGISTER AS
            </h5>
            <div className="mb-4 flex items-center justify-between font-semibold">
              <button
                onClick={() => setRole("user")}
                value="user"
                type="button"
                className={`border-2 p-2 rounded-lg w-32 ${
                  role === "user" && "bg-green-500"
                }`}
              >
                USER
              </button>

              <button
                onClick={() => setRole("admin")}
                value="admin"
                type="button"
                className={`border-2 p-2 rounded-lg w-32 ${
                  role === "admin" && "bg-green-500"
                }`}
              >
                ADMIN
              </button>
            </div>
          </div>
        )}
        <div className="mb-4">
          <input
            type="submit"
            value={variant === "LOGIN" ? "Sign in" : "Register"}
            className="w-full hover:bg-purple-800 font-semibold px-4 py-2 bg-purple-700 text-white rounded-lg cursor-pointer"
          />
        </div>
        <div className=" flex gap-2 justify-center text-sm mt-6  px-2  text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to this app?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </form>
    </div>
  );
};
export default AuthForm;
