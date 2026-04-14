import { type FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#101419] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">Xciora Tech</span>
            </div>
            <p className="text-slate-400 text-sm">
              Crafting digital experiences with precision and passion.
            </p>
          </div>
          {[
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
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to="#"
                      className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © 2024 Soundscape. Crafted with passion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
