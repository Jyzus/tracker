import { useAtomValue, useSetAtom } from "jotai";
import { authState } from "../../../../shared/stores/auth/auth.store";
import { SidebarContent } from "./sidebar-content";
import { SidebarItem } from "./sidebar-item";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useState } from "react";

export const Sidebar = () => {
  const [isErrorImage, setIsErrorImage] = useState(false);
  const user = useAtomValue(authState)?.user;
  const setAuth = useSetAtom(authState);

  const firstLetter = user?.given_name[0].toUpperCase();
  return (
    <div className="p-4">
      <div className="bg-gray-900 h-full w-20 rounded-lg p-4 flex flex-col">
        <Link to={"/"}>
          {!isErrorImage ? (
            <img
              src={user?.picture}
              className="mx-auto rounded-full border-2 border-primary-500 hover:border-primary-600 duration-200 cursor-pointer hover:animate-pulse"
              alt={user?.given_name}
              onError={() => setIsErrorImage(true)}
            />
          ) : (
            <div className="mx-auto size-12 flex items-center justify-center rounded-full border-4 border-primary-500 text-primary-500 text-center font-semibold text-xl bg-gray-800">
              {firstLetter}
            </div>
          )}
        </Link>
        <div className="mt-8 flex flex-col gap-4 justify-center grow">
          {SidebarContent.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              link={item.link}
            />
          ))}
          <div className="grow flex flex-col justify-end">
            <button
              className="p-2 mx-auto rounded-lg hover:text-red-500 hover:bg-gray-700 duration-200"
              onClick={() => setAuth(null)}
            >
              <MdLogout size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
