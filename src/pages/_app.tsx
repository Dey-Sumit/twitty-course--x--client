import "@styles/globals.css";
import { AuthProvider } from "src/contexts/auth.context";

import axios from "axios";
import { useRouter } from "next/router";
import LayoutContainer from "@components/layouts/LayoutContainer";
import { LayoutProvider } from "src/contexts/layout.context";
import NextNProgress from "nextjs-progressbar";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT || "http://localhost:4000"; // the prefix of the URL only for the client side
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <AuthProvider>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={100} height={3} options={{ showSpinner: false }} />
      {pathname !== "/auth" ? (
        <LayoutProvider>
          <LayoutContainer>
            <Component {...pageProps} />
          </LayoutContainer>
        </LayoutProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
