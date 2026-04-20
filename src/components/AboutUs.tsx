import type { FC } from "react";

const AboutUs: FC = () => {
  const values = [
    {
      title: "Innovation",
      description: "Cutting-edge solutions that push boundaries",
    },
    {
      title: "Quality",
      description: "Excellence in every line of code",
    },
    {
      title: "Reliability",
      description: "Dependable partners you can trust",
    },
  ];

  const teamMembers = [
    { name: "Frontend Developers", color: "#E2D1B3" },
    { name: "Backend Developers", color: "#677D6A" },
    { name: "UI/UX Designers", color: "#F39F5A" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#222831] via-[#222831] to-[#222831]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-60">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/background_image_second.svg"
            alt="Background pattern"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mx-auto container relative z-10">
          <div className="flex gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 flex-[1.5] ">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
                <span className="text-[#E2D1B3]">
                  Building Digital Solutions Across
                </span>{" "}
                <span className="text-[#F39F5A]">Borders</span>
              </h1>
              <p className="text-sm font-medium text-[#E2D1B3] leading-relaxed max-w-3xl uppercase tracking-wide">
                We are a globally distributed digital solutions team, with
                client-facing operations in Sydney and a dedicated engineering
                team in Bangladesh. Our mission is to help businesses transform
                ideas into scalable digital products through a balance of
                strategic thinking, modern technology, and cost-effective
                delivery.
              </p>
            </div>

            {/* Right Content - Logo */}
            <div className="flex flex-1 justify-center items-center ">
              <div className="relative w-64 h-64">
                <img
                  src="/assets/logo_image_secondary.png"
                  alt="Xciora Tech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Divider */}
      <div className="bg-[#E2D1B3] h-10" />
      <div className="bg-[#F39F5A] h-10" />

      {/* Our Story Section */}
      <section className="relative overflow-hidden py-20 md:py-60 bg-[#1a1f24]">
        <div className="mx-auto container">
          <div className="flex gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-7 flex-[1.5]">
              {/* Logo and Section Title */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#677D6A] mb-4">
                  Our Story
                </h2>
                <div className="w-40 h-1 bg-[#F39F5A] rounded-full" />
              </div>

              {/* Description Text */}
              <p className="text-sm font-medium text-[#E2D1B3] leading-relaxed">
                Our journey began with a simple idea – to bridge the gap between
                world-class digital expertise and cost-effective solutions. With
                deep experience in business analysis, enterprise systems, and
                modern application development, we recognised that many
                businesses struggle with budget. By combining Sydney-based
                client engagement with a skilled development team in Bangladesh,
                we built a delivery model that serves startups, small
                businesses, and growing companies across multiple markets. From
                web and mobile applications to eCommerce platforms and digital
                marketing solutions, we continue to help businesses in Australia
                and Bangladesh build, scale, and innovate with confidence.
              </p>
            </div>

            {/* Right Content - Cassette Image */}
            <div className="flex flex-1 justify-center items-center">
              <div className="relative w-72 h-64">
                <img
                  src="/assets/player.png"
                  alt="Retro cassette player"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative overflow-hidden py-20 md:py-60">
        <div className="mx-auto container">
          <div className="space-y-12">
            {/* Section Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#677D6A] mb-4">
                Our Values
              </h2>
              <div className="w-40 h-1 bg-[#F39F5A] rounded-full" />
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-[#1a1f24] border border-[#677D6A]/20 rounded-lg p-8 hover:border-[#F39F5A]/50 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-[#F39F5A] uppercase mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#E2D1B3] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="relative overflow-hidden py-20 md:py-60 bg-[#1a1f24]">
        <div className="mx-auto container">
          <div className="space-y-12">
            {/* Section Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#677D6A] mb-4">
                Core Team
              </h2>
              <div className="w-40 h-1 bg-[#F39F5A] rounded-full" />
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-lg overflow-hidden">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="p-16 md:p-20 text-center flex items-center justify-center"
                  style={{ backgroundColor: member.color }}
                >
                  <p className="text-[#222831] font-bold uppercase text-lg">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Team Description */}
            <p className="text-[#E2D1B3] text-sm leading-relaxed max-w-3xl">
              Our diverse team brings together expertise across frontend
              development, backend architecture, design, and project management.
              We work collaboratively to ensure every project receives the
              attention and skill it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-60">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase text-center">
              <span className="text-[#E2D1B3]">Ready to work with us?</span>
            </h2>
            <p className="text-[#E2D1B3] text-center max-w-2xl">
              Let&apos;s bring your vision to life with our experienced team.
            </p>
            <a
              href="/contact-us"
              className="px-8 py-3 bg-[#F39F5A] hover:bg-orange-500 text-[#222831] rounded font-bold uppercase transition-colors duration-200 flex items-center gap-2"
            >
              Get In Touch
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
