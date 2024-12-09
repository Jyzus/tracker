import { MdCalendarMonth, MdTrackChanges } from "react-icons/md";
import { ISidebarItem } from "./sidebar.interface";

export const SidebarContent: ISidebarItem[] = [
  {
    label: "Tracker",
    link: "/tracker",
    icon: MdTrackChanges,
  },
  {
    label: "Calendario",
    link: "/calendar",
    icon: MdCalendarMonth,
  },
];
