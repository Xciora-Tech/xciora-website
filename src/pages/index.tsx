import { ArrowRight, icons } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#222831] via-[#222831] to-[#222831]">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/assets/background_image.svg"
            alt="Background pattern"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-4xl font-extrabold leading-tight uppercase text-center w-full mx-auto">
                  <span className="text-white">
                    Let&rsquo;s build something{" "}
                  </span>
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Extraordinary
                  </span>
                  <span className="text-white"> together</span>
                </h1>
                <p className="text-md font-medium text-[#E2D1B3] leading-relaxed max-w-lg uppercase text-center w-full mx-auto">
                  We transform complex challenges into elegant digital
                  realities. Every pixel, every interaction, and every line of
                  code is treated as a masterwork.
                </p>
                <div className="text-center">
                  <button className="px-8 py-3 bg-[#677D6A] hover:bg-[#5a6b5c] text-[#E2D1B3] rounded-lg font-semibold transition-colors">
                    Have a look at us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
              <img
                src="/assets/logo_image.png"
                alt="xciora tech logo"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#E2D1B3] h-6" />
      <div className="bg-[#F39F5A] h-6" />

      {/* Services Section */}
      <section
        id="services"
        className="relative px-6 py-20 border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-[#E2D1B3] uppercase">
                What we Do?
              </h2>
              <div className="w-40 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: icons["Monitor"],
                  title: "Website Development",
                  description:
                    "High-performance digital storefronts that command attention and convert curiosity into loyalty.",
                },
                {
                  icon: icons["Smartphone"],
                  title: "App Development",
                  description:
                    "Intuitive mobile experiences engineered for seamless utility and emotional resonance.",
                },
                {
                  icon: icons["Monitor"],
                  title: "SaaS Solutions",
                  description:
                    "Scalable software ecosystems built on robust architectures that evolve with your enterprise.",
                },
                {
                  icon: icons["Megaphone"],
                  title: "Digital Marketing",
                  description:
                    "Data-driven narratives that cut through noise and position your brand as a market leader.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-[#677D6A] transition-all group cursor-pointer"
                >
                  {service.icon && (
                    <service.icon className="w-10 h-10 mb-4 group-hover:text-white group-hover text-[#677D6A]" />
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-[#E2D1B3] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    {/* <ArrowRight className="w-6 h-6 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" /> */}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="relative px-6 py-20 border-t border-white/10"
      >
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 border border-orange-500/50 p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Ready to Build Your Legacy?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Let&apos;s transform your vision into reality. Connect with us
              today and start your journey to digital excellence.
            </p>
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
              Let&apos;s Create Together
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-white">
                  Xciora Tech
                </span>
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
    </div>
  );
};

export default HomePage;
