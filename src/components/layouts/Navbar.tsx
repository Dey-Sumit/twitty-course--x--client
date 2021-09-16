import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

import { BiSearchAlt } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import { useAuthDispatch, useAuthState } from "src/contexts/auth.context";
import { useLayoutDispatch } from "src/contexts/layout.context";
// https://smiley.cool/emoticons.php
const Navbar = () => {
  const { user } = useAuthState();
  const { push } = useRouter();
  const layoutDispatch = useLayoutDispatch();

  return (
    <div className="sticky top-0 left-0 z-10 flex items-center h-[10vh] justify-between p-3 space-x-4 bg-dark-600 text-dark-100 md:px-10 lg:px-16">
      <SiTwitter
        className="cursor-pointer text-primary sm:hidden"
        size={40}
        onClick={() => layoutDispatch({ type: "TOGGLE_NAVBAR" })}
      />
      {/* search bar */}
      <div className="relative flex items-center justify-center w-full px-3 py-1 space-x-3 md:w-2/3 bg-dark-700">
        <BiSearchAlt />
        <input type="text" placeholder="Search" className="w-full bg-transparent text-dark-100 focus:outline-none" />
      </div>
      {/* username and icon */}

      {!user ? (
        <button onClick={() => push("/auth")} className="flex-shrink-0 p-1 border text-primary border-primary">
          Log in
        </button>
      ) : (
        <div
          className="flex items-center flex-shrink-0 p-2 space-x-3 rounded-md cursor-pointer hover:bg-dark-700"
          onClick={() => push(`/user/${user._id}`)}
        >
          {<span className="hidden mr-2 sm:block">Hey {user?.username}!</span>}
          <div className="nextImage">
            <Image
              width={40}
              height={40}
              layout="fixed"
              src={user?.profilePictureURL}
              alt=""
              className="border-2 rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
