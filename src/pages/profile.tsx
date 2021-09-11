import protectRoute from "@libs/protectRoute";
import { GetServerSidePropsContext } from "next";

const ProfilePage = () => {
  return <div className="flex flex-col items-center justify-center min-h-screen py-2">Profile Page</div>;
};

export default ProfilePage;

export const getServerSideProps = async function (context: GetServerSidePropsContext) {
  return protectRoute(context);
};
