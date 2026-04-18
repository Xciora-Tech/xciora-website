import type { FC } from "react";
import { icons } from "lucide-react";

const serviceData = [
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
];

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#222831] via-[#222831] to-[#222831]">
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-[#101419] rounded-sm">
              {serviceData.map((service, idx) => (
                <div
                  key={idx}
                  className="group p-6 transition-colors cursor-pointer"
                >
                  {service.icon && (
                    <service.icon className="w-10 h-10 mb-4 group-hover:text-white group-hover text-[#677D6A]" />
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-[#E2D1B3] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
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
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="absolute inset-0 opacity-30 container mx-auto">
          <img
            src="/assets/spiral_background.svg"
            alt="Background pattern"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mx-auto container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-4xl font-extrabold leading-tight uppercase text-center w-full mx-auto">
                  <span className="text-white">Inspired by </span>
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Innovation.
                  </span>
                  <br />
                  <span className="text-white">Built for Global </span>
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Impact.
                  </span>
                </h1>
                <p className="text-md font-medium text-[#E2D1B3] leading-relaxed max-w-lg uppercase text-center w-full mx-auto">
                  We combine strategy, design, and technology to deliver
                  high-quality digital solutions for businesses across Australia
                  and Bangladesh. Our global delivery model ensures the perfect
                  balance of quality, speed, and cost-efficiency.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center"></div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="mx-auto container relative z-10">
          <div className="space-y-8">
            <div className="space-y-4 flex flex-col items-center">
              <h2 className="text-6xl md:text-5xl font-extrabold leading-tight uppercase text-center mb-4">
                <span className="text-white">
                  Ready to Build
                  <br />
                  your{" "}
                </span>
                <span className="bg-gradient-to-r from-[#5c6b5f] to-[#677D6A] bg-clip-text text-transparent">
                  Legacy ?{" "}
                </span>
              </h2>
              <button className="bg-[#677D6A] text-white px-8 py-4 rounded-md transition-colors hover:bg-[#5c6b5f] uppercase font-bold">
                Let’s Create together
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
