import { type FC } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const footerColumnData = [
  {
    title: "Services",
    links: [
      "Web Development",
      "App Development",
      "UI/UX Design",
      "SaaS Products",
      "Digital Marketing",
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/about-us" },
      { name: "Portfolio", url: "/portfolio" },
      { name: "Join Our Team", url: "/careers" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms & Service", url: "/terms-of-service" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/xciora-tech",
        icon: <FaLinkedinIn className="w-4 h-4 text-[#101419]" />,
      },
      {
        name: "Behance",
        url: "https://www.behance.net/xciora-tech",
        icon: <FaBehance className="w-4 h-4 text-[#101419]" />,
      },
    ],
  },
];

export const Footer: FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#101419] backdrop-blur-md">
      <div className="mx-auto container !py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start mb-4">
              <img
                src="/assets/logo_image.png"
                alt="XCiora Tech"
                className="w-24 md:w-32 h-auto"
              />
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <span className="text-xl md:text-2xl font-bold text-[#E2D1B3] uppercase">
                Xciora Tech
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm ">
              Crafting premium digital
              <br />
              solutions.
            </p>
          </div>

          {footerColumnData.map((col, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <h4 className="font-semibold text-[#E2D1B3] mb-4 text-sm md:text-base">
                {col.title}
              </h4>

              {/* Connect column: render icons only in a row */}
              {col.title === "Connect" ? (
                <div className="flex justify-center sm:justify-start items-center gap-2">
                  {col.links.map((link, i) => {
                    if (typeof link === "string" || !("icon" in link))
                      return null;
                    return (
                      <Link
                        key={i}
                        to={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className={`h-8 w-8 bg-[#677D6A] rounded-sm flex items-center justify-center hover:bg-[#7a9480] transition-colors`}
                      >
                        {link.icon}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <ul className="space-y-2">
                  {col.links.map((link, i) => {
                    if (typeof link === "string") {
                      return (
                        <li key={i}>
                          <span
                            // to="#"
                            className="text-slate-400 transition-colors text-xs md:text-sm"
                          >
                            {link}
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={i}>
                        <Link
                          to={link.url}
                          className="text-slate-400 hover:text-slate-300 transition-colors text-xs md:text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F39F5A] py-3 md:py-4">
        <p className="text-center text-[#101419] text-xs md:text-sm px-4 font-bold">
          © 2026 XCiora Tech. Crafted with love from the heart.
        </p>
      </div>
    </footer>
  );
};
