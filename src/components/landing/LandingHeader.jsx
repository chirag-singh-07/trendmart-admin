import { Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated } = useAuthStore();
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 shadow-md ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link className="flex items-center gap-2 font-bold" href="#">
              <ShoppingCart className="h-6 w-6" />
              <span>TrendMart Admin</span>
            </Link>
          </div>
          {/* <nav className="hidden md:flex md:items-center md:gap-6">
            <Link className="text-sm font-medium hover:underline" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Contact
            </Link>
          </nav> */}
          <div className="flex items-center gap-4">
            <Link
              className="hidden text-sm font-medium hover:underline md:inline-block"
              to="/login"
            >
              Sign In
            </Link>
            <Link to={isAuthenticated ? "/dashboard" : "/register"}>
              <Button>{isAuthenticated ? "Dashboard" : "Get Started"}</Button>
            </Link>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
