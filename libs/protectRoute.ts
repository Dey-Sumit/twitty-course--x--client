import axios from "axios";
import { GetServerSidePropsContext } from "next";

const protectRoute = async (context: GetServerSidePropsContext) => {
  try {
    const cookie = context.req.headers.cookie;
    if (!cookie) throw new Error("Missing auth token cookie");

    // it returns 401 if the user is not authenticated
    const { data: user } = await axios.get(`http://localhost:4000/api/auth/me`, {
      headers: { cookie },
      withCredentials: true,
    });

    // go back to home page
    if (user) {
      return {
        props: { user },
      };
    }
    throw new Error("User not available"); // might trigger
  } catch (error) {
    console.log("ERROR", error.message);

    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
};
export default protectRoute;
