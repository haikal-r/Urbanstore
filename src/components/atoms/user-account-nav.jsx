import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogOut, User as UserIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { reset as resetAuth } from "@/store/slices/auth-slice";

import { axiosClient } from "@/lib/axios";
import { getInitials } from "@/lib/utils";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const UserAccountNav = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await axiosClient.post('/logout');
      dispatch(resetAuth());
      navigate("/");

      toast.success("Logout successful.");
    } catch (error) {
      toast.error('Logout failed. Please try again.');
    }
  
  };

  const initials = getInitials(user.name);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={user?.picture ?? "https://github.com/shadcn.png"}
            alt="profile"
          />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <div className="flex justify-start p-2 gap-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="w-[200px] truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/profile">
              <UserIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/stores">
              <LayoutDashboard className="mr-2 h-4 w-4" aria-hidden="true" />
              My Dashboard
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} asChild>
          <div>
            <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
            Sign out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
