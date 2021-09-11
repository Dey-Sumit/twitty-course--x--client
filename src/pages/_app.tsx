import "@styles/globals.css";
import { AuthProvider } from "src/contexts/auth.context";

import axios from "axios";
import { useRouter } from "next/router";
import LayoutContainer from "@components/layouts/LayoutContainer";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT || "http://localhost:4000"; // the prefix of the URL only for the client side
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <AuthProvider>
      {pathname !== "/auth" ? (
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
