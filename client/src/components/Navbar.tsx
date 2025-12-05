import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Priority Areas", href: "#priority-areas" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="h-10 w-auto">
            <svg
              viewBox="0 0 296 184"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-auto"
            >
              <path
                d="M143.657 53.991C143.657 53.991 136.828 73.336 132.275 86.991C127.723 100.646 116.343 100.646 116.343 100.646C116.343 100.646 104.964 100.646 100.411 86.991C95.859 73.336 89.03 53.991 89.03 53.991H143.657Z"
                fill="#00D4FF"
              />
              <path
                d="M116.343 53.991C125.445 53.991 132.275 46.698 132.275 38.501C132.275 30.304 125.445 23.011 116.343 23.011C107.242 23.011 100.411 30.304 100.411 38.501C100.411 46.698 107.242 53.991 116.343 53.991Z"
                fill="#00D4FF"
              />
              <path
                d="M174.383 80.163C174.383 80.163 167.553 99.508 163 113.163C158.448 126.818 147.069 126.818 147.069 126.818C147.069 126.818 135.689 126.818 131.137 113.163C126.584 99.508 119.755 80.163 119.755 80.163H174.383Z"
                fill="#FFFFFF"
              />
              <path
                d="M147.069 80.163C156.171 80.163 163 72.87 163 64.673C163 56.476 156.171 49.183 147.069 49.183C137.967 49.183 131.137 56.476 131.137 64.673C131.137 72.87 137.967 80.163 147.069 80.163Z"
                fill="#FFFFFF"
              />
              <path
                d="M82.206 64.673C91.308 64.673 98.137 57.38 98.137 49.183C98.137 40.986 91.308 33.693 82.206 33.693C73.105 33.693 66.275 40.986 66.275 49.183C66.275 57.38 73.105 64.673 82.206 64.673Z"
                fill="#00D4FF"
              />
              <path
                d="M109.52 80.163C109.52 80.163 102.691 99.508 98.138 113.163C93.586 126.818 82.207 126.818 82.207 126.818C82.207 126.818 70.827 126.818 66.275 113.163C61.723 99.508 54.893 80.163 54.893 80.163H109.52Z"
                fill="#00D4FF"
              />
              <path
                d="M193.725 49.183L184.623 58.285L170.968 44.63L184.623 30.975L193.725 49.183Z"
                fill="#C1FF00"
              />
              <path
                d="M193.725 49.183L166.416 76.492L148.208 58.285L175.517 30.975L193.725 49.183Z"
                fill="#00B050"
              />
              <path
                d="M148.208 58.285L120.899 85.594L102.691 67.386L130 40.077L148.208 58.285Z"
                fill="#1A1F3A"
              />
              <path
                d="M102.691 67.386L75.382 94.695L57.174 76.487L84.483 49.178L102.691 67.386Z"
                fill="#1A1F3A"
              />
              <path
                d="M57.174 76.487L48.072 85.589L34.417 71.934L43.519 62.832L57.174 76.487Z"
                fill="#1A1F3A"
              />
              <path
                d="M166.416 76.492L175.517 85.594L161.862 99.249L152.761 90.147L166.416 76.492Z"
                fill="#00B050"
              />
              <path
                d="M120.899 85.594L130 94.695L116.345 108.35L107.243 99.249L120.899 85.594Z"
                fill="#1A1F3A"
              />
              <path
                d="M75.382 94.695L84.483 103.797L70.828 117.452L61.727 108.35L75.382 94.695Z"
                fill="#1A1F3A"
              />
              <path
                d="M21.899 135.92H32.139V153.2H39.819V161.52H32.139V184H21.899V161.52H14.219V153.2H21.899V135.92ZM54.939 135.92H65.179V184H54.939V135.92ZM46.619 159.92C46.619 169.52 54.299 177.2 63.899 177.2C73.499 177.2 81.179 169.52 81.179 159.92C81.179 150.32 73.499 142.64 63.899 142.64C54.299 142.64 46.619 150.32 46.619 159.92ZM87.979 135.92H104.619C114.219 135.92 121.899 143.6 121.899 153.2C121.899 162.8 114.219 170.48 104.619 170.48H98.219V184H87.979V135.92ZM98.219 144.24V162.16H104.619C109.419 162.16 111.659 159.92 111.659 153.2C111.659 146.48 109.419 144.24 104.619 144.24H98.219ZM128.699 135.92H145.339V144.24H138.939V153.2H145.339V161.52H138.939V175.68H145.339V184H128.699V135.92Z"
                fill="#1A1F3A"
              />
              <path
                d="M21.899 109.92H32.139V127.2H39.819V135.52H32.139V158H21.899V135.52H14.219V127.2H21.899V109.92ZM54.939 109.92H65.179V158H54.939V109.92ZM46.619 133.92C46.619 143.52 54.299 151.2 63.899 151.2C73.499 151.2 81.179 143.52 81.179 133.92C81.179 124.32 73.499 116.64 63.899 116.64C54.299 116.64 46.619 124.32 46.619 133.92ZM87.979 109.92H104.619C114.219 109.92 121.899 117.6 121.899 127.2C121.899 136.8 114.219 144.48 104.619 144.48H98.219V158H87.979V109.92ZM98.219 118.24V136.16H104.619C109.419 136.16 111.659 133.92 111.659 127.2C111.659 120.48 109.419 118.24 104.619 118.24H98.219ZM128.699 109.92H145.339V118.24H138.939V127.2H145.339V135.52H138.939V149.68H145.339V158H128.699V109.92Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn("font-bold text-lg tracking-tight", scrolled ? "text-primary" : "text-white")}>RENEWED HOPE</span>
            <span className={cn("text-[10px] font-medium tracking-widest", scrolled ? "text-gray-600" : "text-gray-200")}>YOUTH AMBASSADORS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-gray-800" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6"
            onClick={() => window.open("https://web.rhp.com.ng/", "_blank")}
          >
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={cn("h-6 w-6", scrolled ? "text-gray-800" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", scrolled ? "text-gray-800" : "text-white")} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-2xl font-bold text-white hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-8 py-6 text-lg mt-4"
              onClick={() => window.open("https://web.rhp.com.ng/", "_blank")}
            >
              Join Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
