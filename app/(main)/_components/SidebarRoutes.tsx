"use client";

import { ArrowLeft, BarChart, Compass, icons, List, Plus } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import { MdOutlineLeaderboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { BiShoppingBag } from "react-icons/bi";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

const guestRoutes = [
  {
    icon: PiStudent,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: Compass,
    label: "Pitch Submission",
    href: "/search"
  },
  {
    icon: MdOutlineLeaderboard,
    label: "Live Pitch",
    href: "/leaderboard"
  },
  {
    icon: ChatBubbleIcon,
    label: "SoulsAI",
    href: "https://newchatbotgit-kdsykwg8tjcj4so6wm4qn8.streamlit.app/"
  },
  // {
  //   icon: BiShoppingBag,
  //   label: "Shop",
  //   href: "/shop"
  // },
]
const teacherRoutes = [
  // {
  //   icon: ArrowLeft,
  //   label: "Student Dashboard",
  //   href: "/dashboard"
  // },
  {
    icon: Plus,
    label: "Submit Pitch",
    href: "/teacher/create"
  },
  {
    icon: List,
    label: "My Pitches",
    href: "/teacher/courses"
  },
  {
    icon: BarChart,
    label: "Review",
    href: "/teacher/analytics"
  },
  {
    icon: ChatBubbleIcon,
    label: "SoulsAI",
    href: "https://newchatbotgit-kdsykwg8tjcj4so6wm4qn8.streamlit.app/"
  }
]

const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTecacherPage = pathname?.includes("/teacher");
  const routes = isTecacherPage ? teacherRoutes : guestRoutes;

  return ( 
    <div className={cn("flex flex-col w-full py-6 gap-2")}>
      {routes.map((route, index) => (
        <SidebarItem
          key={index}
          icon={icons.CircleOff}
            label={route.label}
          href={route.href}
        />
      ))}
    </div>
   );
}
 
export default SidebarRoutes;