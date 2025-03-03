import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const LandiingFooter = () => {
  return (
    <footer className="border-t py-12 flex flex-col items-center justify-center">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3">
        <div className="space-y-4">
          <Link className="flex items-center gap-2 font-bold" href="#">
            <ShoppingCart className="h-6 w-6" />
            <span>TrendMart Admin</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Empowering businesses with powerful e-commerce solutions.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          <nav className="space-y-2">
            <h3 className="font-bold">Product</h3>
            <Link className="block text-sm hover:underline" href="#">
              Features
            </Link>
            <Link className="block text-sm hover:underline" href="#">
              Pricing
            </Link>
            <Link className="block text-sm hover:underline" href="#">
              Integrations
            </Link>
          </nav>
          <nav className="space-y-2">
            <h3 className="font-bold">Company</h3>
            <Link className="block text-sm hover:underline" href="#">
              About
            </Link>
            <Link className="block text-sm hover:underline" href="#">
              Blog
            </Link>
            <Link className="block text-sm hover:underline" href="#">
              Careers
            </Link>
          </nav>
          <nav className="space-y-2">
            <h3 className="font-bold">Resources</h3>
            <Link className="block text-sm hover:underline" href="#">
              Documentation
            </Link>
            <Link className="block text-sm hover:underline" href="#">
              Support
            </Link>
            <Link className="block text-sm hover:underline" href="#">
              API Reference
            </Link>
          </nav>
          <nav className="space-y-2">
            <h3 className="font-bold">Legal</h3>
            <Link className="block text-sm hover:underline" href="#">
              Privacy
            </Link>
            <Link className="block text-sm hover:underline" href="#">
              Terms
            </Link>
            <Link className="block text-sm hover:underline" href="#">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
      <div className="container mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrendMart Admin. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link className="text-sm hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default LandiingFooter;
