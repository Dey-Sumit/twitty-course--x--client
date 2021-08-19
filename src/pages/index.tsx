import type { NextPage } from "next";
import Head from "next/head";
import { useAuthState } from "src/contexts/auth.context";
import logo from "@public/logo.svg";
import Image from "next/image";

const Home: NextPage = () => {
  const { loading, user } = useAuthState();
  console.log({ loading, user });

  if (loading)
    return (
      <div className="grid h-screen place-items-center">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
    );

  return (
    <div>
      <main className="text-primary">
        {user ? <h1>Logged In</h1> : <h1>Unauthorized</h1>}
        <button onClick={() => console.log("clicked")}>Click me</button>
      </main>
    </div>
  );
};

export default Home;
