import { cn } from "@/lib/utils";
import {
  ChevronDown,
  CreditCard,
  Home,
  Package,
  Settings,
  ShoppingCart,
  User,
  Users,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";

const DashboardSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { user, logout } = useAuthStore();
  return (
    <div
      className={cn(
        "fixed inset-y-0 z-50 flex w-64 flex-col border-r bg-card transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <Link
          to={"/dashboard"}
          className="flex items-center gap-2 font-semibold"
        >
          <Package className="h-6 w-6" />
          <span>TrendMart Admin</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-3 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Main
          </h2>
          <div className="space-y-1">
            <Link
              to={"/dashboard"}
              className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground font-semibold"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to={"/dashboard/orders"}
              className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground font-semibold"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
              <Badge className="ml-auto">24</Badge>
            </Link>
            <Link
              to={"/dashboard/products"}
              className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground font-semibold"
            >
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground font-semibold"
            >
              <Users className="h-5 w-5" />
              Users
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Settings
          </h2>
          <div className="space-y-1">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground font-semibold"
            >
              <CreditCard className="h-5 w-5" />
              Payment
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground font-semibold"
            >
              <User className="h-5 w-5" />
              Account
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground font-semibold"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </div>
        </div>
      </nav>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>
              {user.fullName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user.fullName}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logout()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
