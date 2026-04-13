import { type FC } from "react";
import { NavLink } from "react-router-dom";

export const NavBar: FC = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#222831] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between md:justify-center gap-12 relative">
        <NavLink to="/" className="absolute left-0 ">
          <span className="text-xl font-bold text-white">Xciora Tech</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="#home"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="#about"
            className="text-slate-300 hover:text-white transition-colors"
          >
            About Us
          </NavLink>
          <NavLink
            to="#services"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Services
          </NavLink>
          <NavLink
            to="#contact"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
