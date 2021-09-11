import { useAuthState } from "src/contexts/auth.context";

import SplashScreen from "@components/layouts/SplashScreen";

export default function Home() {
  const { loading, user } = useAuthState();
  console.log({ loading, user });

  if (loading) return <SplashScreen />;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {user ? "logged in" : "not logged in"}
    </div>
  );
}
