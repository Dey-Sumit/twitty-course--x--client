import Image from "next/image";
import heroImage from "@public/hero.png";
import logo from "@public/logo.svg";
import AuthComponent from "@components/Auth";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useAuthState } from "src/contexts/auth.context";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Auth = () => {
  const { loading, user } = useAuthState();
  //console.log({ loading, user });
  // const router = useRouter();

  // useEffect(() => {
  //   if (loading && user) {
  //     router.back();
  //   }
  // }, [loading, user]);

  // if (loading)
  //   return (
  //     <div className="grid h-screen place-items-center">
  //       <Image src={logo} alt="logo" width={100} height={100} />
  //     </div>
  //   );

  return (
    <div className="grid h-screen grid-cols-8 text-white">
      {/* left part */}
      <div className="hidden col-span-3 p-4 bg-blue-700 md:grid place-items-center">
        <h1 className="mb-5 text-3xl font-semibold">
          Tweety helps you connect and share with the people in your life.
        </h1>
        <div className="w-full h-full ">
          <Image placeholder="blur" layout="responsive" src={heroImage} alt="" />
        </div>
      </div>

      {/* right part */}
      <div className="grid col-span-8 p-2 bg-dark-700 md:col-span-5 place-items-center">
        <div className="flex flex-col justify-center space-y-8">
          <Image src={logo} width={40} height={40} alt="logo" />
          <h3 className="mb-10 text-lg md:text-2xl">Come on! Let's waste time on Social Media</h3>

          {/* AuthComponent */}

          <Auth />
        </div>
      </div>
    </div>
  );
};

export default Auth;

// // TODO make this function reusable
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   try {
//     const cookie = context.req.headers.cookie;

//     // it returns 401 if the user is not authenticated
//     const { data: user } = await axios.get(`${process.env.API_BASE_ENDPOINT}/api/auth/me`, {
//       headers: { cookie },
//       withCredentials: true,
//     });

//     console.log({ user });

//     return {
//       redirect: {
//         destination: "/",
//         statusCode: 302,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {},
//     };
//   }
// }
