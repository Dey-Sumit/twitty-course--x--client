import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

import Input from "./common/Input";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full p-2 mx-auto space-y-4 md:max-w-max">
      <form className="flex flex-col space-y-3">
        <div className="space-y-3 md:space-y-0 md:flex md:space-x-4 md:items-center">
          {/* Input Wrapper   */}

          {!isLogin && <Input label="Name" />}
          <Input label="Username" />
        </div>
        {!isLogin && <Input label="Email" />}
        <Input label="Password" />

        <button
          className="flex items-center justify-center p-2 text-lg font-bold text-white bg-blue-700 rounded-md focus:outline-none"
          type="submit"
        >
          {loading ? <BiLoaderAlt className="mr-2 animate-spin" /> : isLogin ? "Log in" : "Sign up"}
        </button>
      </form>

      <p className="p-1 text-center text-red-600 ">Something went wrong</p>

      <p className="text-lg tracking-wide text-center text-white">
        {!isLogin ? "Already a member?" : "Don't have an account yet?"}
        <span className="cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
          {!isLogin ? " Sign In" : " Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default Auth;
