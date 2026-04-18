import { type FC } from "react";
import { Link } from "react-router-dom";

const footerColumnData = [
  {
    title: "Services",
    links: ["Web Development", "App Development", "UI/UX Design"],
  },
  {
    title: "Company",
    links: ["About Us", "Portfolio", "Team"],
  },
  {
    title: "Connect",
    links: ["LinkedIn", "Twitter", "Email Us"],
  },
];

export const Footer: FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#101419] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12">
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
              Crafting digital experiences with precision and passion.
            </p>
          </div>
          {footerColumnData.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-[#E2D1B3] mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to="#"
                      className="text-slate-400 hover:text-slate-300 transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
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
