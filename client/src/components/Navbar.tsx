import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/useMobile";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SignUpModal from "@/components/SignUpModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Ambassadors", href: "/ambassadors" },
    { name: "Mobile App", href: "/app-features" },
    { name: "News", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "Benefits", href: "/#benefits" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith("/#")) {
      // If we're not on home page, navigate to home first
      if (location !== "/") {
        setLocation("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          const elementId = href.substring(2);
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const elementId = href.substring(2);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      setLocation(href);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen || location !== "/" || isMobile
          ? isMobile ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 relative">
          <div className="h-14 md:h-20 w-auto">
            <img src="/upload/Logo-1.svg" alt="RHYA Logo" className="h-full w-auto" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent relative group",
                scrolled || location !== "/" || isMobile ? "text-gray-800" : "text-white drop-shadow-md"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
          <SignUpModal 
            trigger={
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Join Now
              </Button>
            }
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 rounded-full hover:bg-black/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={cn("h-6 w-6", "text-gray-800")} />
          ) : (
            <Menu className={cn("h-6 w-6", scrolled || location !== "/" || isMobile ? "text-gray-800" : "text-white drop-shadow-md")} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 lg:hidden transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-6 w-full px-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-2xl font-bold text-gray-900 hover:text-primary transition-colors w-full text-center py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <SignUpModal 
              trigger={
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 py-6 text-lg mt-4 w-full max-w-xs shadow-xl"
                >
                  Join Now
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
