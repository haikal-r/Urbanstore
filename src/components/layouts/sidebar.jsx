import { MENU_ITEMS } from "@/constants/menu";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ShoppingBag, Store } from "lucide-react";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="absolute top-0 left-0 border-r p-4 w-64 h-full hidden md:flex">
      <ul className="w-full flex flex-col gap-3">
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <Link aria-label="Orders" to={item.href} className="w-full">
              <span
                className={cn(
                  "hidden md:flex items-center rounded-lg py-2 px-4 gap-[1px] hover:text-neutral-900 hover:bg-neutral-100 group",
                  currentPath.startsWith(item.href)
                    ? "bg-neutral-100 "
                    : "text-neutral-700 "
                )}
              >
                <div>{item.icon}</div>
                <span className="text-neutral-700 text-[14.5px] hover:text-neutral-900 group-hover:translate-x-1 transition-all">
                  {item.title}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;

