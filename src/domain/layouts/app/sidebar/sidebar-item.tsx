import { NavLink } from "react-router-dom";
import { ISidebarItem } from "./sidebar.interface";
import clsx from "clsx";

export const SidebarItem = ({ label, link, icon }: ISidebarItem) => {
  const Icon = icon;
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        clsx(
          "relative hover:bg-primary-900 p-2 rounded-lg duration-200 m-auto group",
          isActive && "bg-primary-600"
        )
      }
    >
      <span className="absolute left-12 bg-primary-700  text-sm rounded-lg w-0 overflow-hidden transition-all duration-300 group-hover:w-auto group-hover:duration-200 group-hover:px-2 group-hover:py-1">
        {label}
      </span>
      <Icon size={25} />
    </NavLink>
  );
};
