import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/eaefcd9b-6477-4fe1-a7db-0e4ff448e520.png" alt="Logo" className="h-8 w-auto" />
            </Link>
            <div className="ml-10 flex items-center space-x-6">
              <Link to="/marketplace" className="text-foreground/70 hover:text-foreground transition-colors">
                Marketplace
              </Link>
              <Link to="/blog" className="text-foreground/70 hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">
                About Us
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;