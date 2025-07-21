import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/UserContext.jsx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { user, loading } = useAuth();
  const location = useLocation();
  
  const randomSeed = user?.name + Math.floor(Math.random() * 10000);
  const avatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${randomSeed}`;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Medicines", href: "/medicines" },
    { name: "Diseases", href: "/diseases" },
    { name: "Profile", href: "/profile" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading...
      </div>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "glass-card rounded-full px-6 py-3 shadow-2xl"
              : "bg-transparent px-6 py-4"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold gradient-text">
                MediCore
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    location.pathname === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 gradient-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <Link to="/auth">
                  <img
                    src={avatar}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border-2 border-indigo-500"
                  />
                </Link>
              ) : (
                <Link to="/auth">
                  <Button className="gradient-primary hover:opacity-90 transition-all duration-300 rounded-full px-6">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
