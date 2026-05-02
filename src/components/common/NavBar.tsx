import { type FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Our Services", url: "/our-service" },
  { name: "Contact Us", url: "/contact-us" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition-colors text-sm font-medium relative  ${
    isActive ? "text-[#F39F5A]" : "text-[#E2D1B3]"
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `block py-3 px-4 text-base font-medium transition-colors rounded ${
    isActive
      ? "text-[#F39F5A] bg-[#F39F5A]/10"
      : "text-[#E2D1B3] hover:bg-white/5"
  }`;

export const NavBar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#222831]/90 backdrop-blur-sm backdrop-brightness-75">
      <div className="mx-auto container py-4 flex items-center justify-between md:justify-center gap-12 relative">
        <NavLink to="/" className="md:absolute left-0">
          <span className="text-xl font-bold text-[#E2D1B3]">Xciora Tech</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ name, url }) => (
            <NavLink
              key={url}
              to={url}
              end={url === "/"}
              className={navLinkClass}
            >
              {name}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-[#E2D1B3] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#222831]/95 backdrop-blur-md">
          <div className="container mx-auto py-4 space-y-1">
            {navLinks.map(({ name, url }) => (
              <NavLink
                key={url}
                to={url}
                end={url === "/"}
                className={mobileNavLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
