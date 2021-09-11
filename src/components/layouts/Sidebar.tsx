import { FC, MouseEventHandler } from "react";

import { IoMdHome, IoMdLogOut, IoMdNotifications } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { SiTwitter } from "react-icons/si";
import { RiUserFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { useAuthDispatch, useAuthState } from "src/contexts/auth.context";
import { useRouter } from "next/router";
import { useLayoutDispatch, useLayoutState } from "src/contexts/layout.context";
import axios from "axios";

const Sidebar = () => {
  const { user } = useAuthState();
  const authDispatch = useAuthDispatch();

  const router = useRouter();

  const layoutDispatch = useLayoutDispatch();
  const { showNavbar } = useLayoutState();

  const handleLogout = async (e: any) => {
    // need to show a modal, will do later
    authDispatch({ type: "REMOVE_USER" });
    router.push("/auth");
    await axios.delete("/api/auth/logout");
  };

  return (
    <div
      className={`bg-dark-700 fixed flex-col justify-between h-screen px-3 sm:px-6 py-8 pb-20 text-lg shadow-lg flex z-10 sm:sticky top-0   max-w-max transform transition-all duration-300 ${
        showNavbar ? "  translate-x-0" : "  -translate-x-full sm:translate-x-0"
      }`}
    >
      {/* <div className="flex items-center justify-center space-x-2 font-medium "> */}
      <SiTwitter
        className="mx-auto cursor-pointer text-primary"
        size="30"
        onClick={() => layoutDispatch({ type: "TOGGLE_NAVBAR" })}
      />
      {/* </div> */}
      <div className="flex flex-col space-y-5 ">
        <SidebarItem Icon={IoMdHome} text="Home" handler={() => router.push("/")} />
        {user && <SidebarItem Icon={RiUserFill} text="Profile" handler={() => router.push(`/user/${user._id}`)} />}
        {user && <SidebarItem Icon={IoMdNotifications} text="Noti" handler={() => router.push("/notifications/")} />}
        <SidebarItem Icon={MdExplore} text="Explore" handler={() => router.push("/explore")} />

        {user && <SidebarItem Icon={IoMdLogOut} text="LogOut" handler={handleLogout} />}
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;

const SidebarItem: FC<{
  Icon: IconType;
  text: string;
  handler?: MouseEventHandler<HTMLButtonElement>;
}> = ({ Icon, text, handler }) => {
  return (
    <button className="navItem" onClick={handler}>
      <Icon size="26" className="flex-shrink-0" />
      <span className="hidden tracking-wide lg:block">{text}</span>
    </button>
  );
};
