import { Link } from "react-router-dom";
import { ISidebarItem } from "./sidebar.interface";

export const SidebarItem = ({ label, link, icon }: ISidebarItem) => {
  const Icon = icon;
  return (
    <Link
      to={link}
      className="relative hover:bg-primary-900 p-2 rounded-lg duration-200 m-auto group"
    >
      <span className="absolute left-12 bg-primary-700  text-sm rounded-lg w-0 overflow-hidden transition-all duration-300 group-hover:w-auto group-hover:duration-200 group-hover:px-2 group-hover:py-1">
        {label}
      </span>
      <Icon size={25} />
    </Link>
  );
};
