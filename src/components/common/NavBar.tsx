import { type FC } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Services", url: "/services" },
  { name: "Contact Us", url: "/contact-us" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition-colors text-sm font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#F39F5A] after:transition-all after:duration-300 ${
    isActive
      ? "text-[#F39F5A] after:w-full"
      : "text-[#E2D1B3] hover:text-white after:w-0 hover:after:w-full"
  }`;

export const NavBar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#222831]/90 backdrop-blur-sm backdrop-brightness-75">
      <div className="mx-auto container py-4 flex items-center justify-between md:justify-center gap-12 relative">
        <NavLink to="/" className="absolute left-0">
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
      </div>
    </nav>
  );
};
