import type { FC } from "react";
import { icons } from "lucide-react";

const serviceData = [
  {
    icon: icons["Globe"],
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
    icon: icons["Cloud"],
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
    <div className="min-h-screen bg-[#222831]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-60">
        <div className="absolute inset-0">
          <img
            src="/assets/background_image.svg"
            alt="Background pattern"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mx-auto container relative z-10">
          <div className="flex gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 flex-[1.5]">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase text-center w-full mx-auto">
                  <span className="text-[#677D6A]">
                    Let&rsquo;s build something{" "}
                  </span>
                  <span className="bg-[#F39F5A] bg-clip-text text-transparent">
                    Extraordinary
                  </span>
                  <span className="text-[#677D6A]"> together</span>
                </h1>
                <p className="text-md font-medium text-[#E2D1B3] leading-relaxed max-w-2xl uppercase text-center w-full mx-auto">
                  We transform complex challenges into elegant digital
                  realities. Every pixel, every interaction, and every line of
                  code is treated as a masterwork.
                </p>
                <div className="text-center">
                  <button className="px-8 py-3 mt-5 bg-[#677D6A] hover:bg-[#5a6b5c] text-[#E2D1B3] rounded-lg font-semibold transition-colors">
                    Have a look at us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 flex-1  md:h-full flex items-center justify-center">
              <div className="absolute inset-0" />
              <img
                src="/assets/logo_image.png"
                alt="xciora tech logo"
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#E2D1B3] h-10" />
      <div className="bg-[#F39F5A] h-10" />

      {/* Services Section */}
      <section
        id="services"
        className="relative py-20 border-t border-white/10"
      >
        <div className="mx-auto container relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-[#E2D1B3] uppercase">
                What we Do
              </h2>
              <div className="w-40 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-[#101419] rounded-sm p-6">
              {serviceData.map((service, idx) => (
                <div key={idx} className="p-6">
                  {service.icon && (
                    <service.icon className="w-10 h-10 mb-4 text-[#677D6A] bg-[#222831] rounded-sm p-2" />
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#E2D1B3]  ">
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
      <section className="relative overflow-hidden py-20 md:py-60">
        <div className="absolute inset-0 container mx-auto">
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
                <h3 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase w-full">
                  <span className="text-[#677D6A]">Inspired by </span>
                  <span className="text-[#F39F5A] bg-clip-text">
                    Innovation.
                  </span>
                </h3>
                <h3 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase w-full">
                  <span className="text-[#677D6A]">Built for Global </span>
                  <span className="text-[#F39F5A] bg-clip-text">Impact.</span>
                </h3>
                <p className="text-md font-medium text-[#E2D1B3] leading-relaxed max-w-2xl uppercase w-full">
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
                <span className="text-[#E2D1B3]">
                  Ready to Build
                  <br />
                  your{" "}
                </span>
                <span className="text-[#677D6A] ">Legacy ? </span>
              </h2>
              <button className="bg-[#677D6A] text-[#E2D1B3] px-8 py-4 rounded-md transition-colors hover:bg-[#5c6b5f] uppercase font-bold">
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
