import { ArrowRight, Code2, Zap, Globe, Smartphone, Music } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Soundscape</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="#features"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              to="#services"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              to="#contact"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors">
              Get Started
            </button>
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
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-white">Let&apos;s Create</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Something Extraordinary
                  </span>
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                  Transform your ideas into elegant digital experiences. We
                  combine innovative design with cutting-edge technology to
                  build solutions that inspire.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  Explore Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 border border-slate-400 text-white hover:bg-white/5 rounded-lg font-semibold transition-colors">
                  View Portfolio
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                <div>
                  <p className="text-3xl font-bold text-orange-500">500+</p>
                  <p className="text-sm text-slate-400">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">98%</p>
                  <p className="text-sm text-slate-400">Client Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">50+</p>
                  <p className="text-sm text-slate-400">Team Members</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
              <img
                src="/assets/player.png"
                alt="Creative player illustration"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative px-6 py-20 border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-white">Why Choose Us?</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We deliver exceptional results through innovation, dedication,
                and expertise
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code2,
                  title: "Clean Code",
                  description:
                    "Beautifully architected solutions built with modern standards and best practices.",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description:
                    "Optimized performance that keeps your users engaged and coming back.",
                },
                {
                  icon: Globe,
                  title: "Scalable Design",
                  description:
                    "Solutions that grow with your business without compromising quality.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile First",
                  description:
                    "Perfectly optimized experiences across all devices and screen sizes.",
                },
                {
                  icon: Music,
                  title: "Creative Focus",
                  description:
                    "Innovative designs that captivate and convert your audience.",
                },
                {
                  icon: ArrowRight,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock support to ensure your success every step of the way.",
                },
              ].map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={idx}
                    className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative px-6 py-20 border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Our Services</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Web Development",
                  description:
                    "Modern web applications built with latest technologies and frameworks.",
                },
                {
                  title: "App Development",
                  description:
                    "Native and cross-platform mobile apps that delight users.",
                },
                {
                  title: "UI/UX Design",
                  description:
                    "Intuitive interfaces that engage users and drive conversions.",
                },
                {
                  title: "Digital Marketing",
                  description:
                    "Strategic marketing solutions that amplify your brand message.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-orange-500/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-6 h-6 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
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
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Soundscape</span>
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
