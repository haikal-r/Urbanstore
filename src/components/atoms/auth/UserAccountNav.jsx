import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LayoutDashboard, LogOut, User as UserIcon } from 'lucide-react'
import { Link } from "react-router-dom";


const UserAccountNav = () => {
    
    const user = useLogin()
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("password");
        window.location.href = "/";
      };

    return(
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <div className="flex justify-start p-2 gap-2">
            <div className="flex flex-col space-y-1 leading-none">
                {user && <p className="text-sm font-medium">{user.username}</p> }
                {user && <p className='w-[200px] truncate text-xs text-muted-foreground'>{user.email}</p>}
            </div>
          </div>

          <DropdownMenuSeparator />
          
          <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to='/profile'>
              <UserIcon className='mr-2 h-4 w-4' aria-hidden='true' />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to='/dashboard/stores'>
              <LayoutDashboard className='mr-2 h-4 w-4' aria-hidden='true' />
              My Dashboard
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} asChild>
          <div>
            <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
            Sign out
          </div>
        </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}

export default UserAccountNav;