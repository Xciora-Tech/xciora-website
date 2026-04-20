import { type FC } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
      {
        name: "Email Us",
        url: "mailto:info@xciora.com",
        icon: <HiOutlineMail className="w-4 h-4 text-[#101419]" />,
      },
    ],
  },
];

export const Footer: FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#101419] backdrop-blur-md">
      <div className="mx-auto container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/assets/logo_image.png"
              alt="XCiora Tech"
              className="w-32 h-auto mb-2"
            />
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[#E2D1B3] uppercase">
                Xciora Tech
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Crafting premium digital
              <br />
              solutions.
            </p>
          </div>

          {footerColumnData.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-[#E2D1B3] mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => {
                  if (typeof link === "string") {
                    return (
                      <li key={i}>
                        <Link
                          to="#"
                          className="text-slate-400 hover:text-slate-300 transition-colors text-sm"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={i}>
                      <Link
                        to={link.url}
                        className="text-slate-400 hover:text-slate-300 transition-colors text-sm"
                      >
                        {"icon" in link ? (
                          <div className="flex items-center gap-2">
                            <span className="h-5 w-5 bg-[#677D6A] rounded-sm flex items-center justify-center">
                              {link.icon}
                            </span>
                            <span>{link.name}</span>
                          </div>
                        ) : (
                          link.name
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F39F5A] py-4">
        <p className="text-center text-[#101419] text-sm">
          © 2026 XCiora Tech. Crafted with love from the heart.
        </p>
      </div>
    </footer>
  );
};
