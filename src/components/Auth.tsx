import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "./common/Input";
import { loginSchema, signupSchema } from "@libs/schemaValidation";
import axios from "axios";
import { useAuthDispatch } from "src/contexts/auth.context";
import { useRouter } from "next/dist/client/router";
import apiClient from "helpers/apiClient";
import { GetServerSidePropsContext } from "next";

export interface Inputs {
  name: string;
  username: string;
  password: string;
  email: string;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useAuthDispatch();

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    mode: "onTouched",
    resolver: yupResolver(isLogin ? loginSchema : signupSchema),
  });

  const handleAuth = async (data: any) => {
    const url = isLogin ? "/api/auth/login" : "/api/auth/signup";

    try {
      setLoading(true);
      const { data: responseData } = await apiClient({
        method: "POST",
        url,
        data,
      });

      console.log({ responseData });
      dispatch({
        type: "SET_USER",
        payload: responseData,
      });

      router.push("/");
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-2 mx-auto space-y-4 md:max-w-max">
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit(handleAuth)}>
        <div className="space-y-3 md:space-y-0 md:flex md:space-x-4 md:items-center">
          {/* Input Wrapper   */}

          {!isLogin && <Input label="Name" register={register} fieldName="name" errors={errors} />}
          <Input label="Username" register={register} fieldName="username" errors={errors} />
        </div>
        {!isLogin && <Input label="Email" register={register} fieldName="email" errors={errors} />}
        <Input
          label="Password"
          register={register}
          fieldName="password"
          errors={errors}
          type="password"
        />

        <button
          className="flex items-center justify-center p-2 text-lg font-bold text-white bg-blue-700 rounded-md focus:outline-none"
          type="submit"
        >
          {loading ? <BiLoaderAlt className="mr-2 animate-spin" /> : isLogin ? "Log in" : "Sign up"}
        </button>
      </form>

      {errorMessage && <p className="p-1 text-center text-red-600 ">{errorMessage}</p>}

      <p className="text-lg tracking-wide text-center text-white">
        {!isLogin ? "Already a member?" : "Don't have an account yet?"}
        <span
          className="cursor-pointer"
          onClick={() => {
            setIsLogin(!isLogin);
            setErrorMessage(null);
          }}
        >
          {!isLogin ? " Sign In" : " Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default Auth;
