import type { FC } from "react";
import { Monitor, Smartphone, Cloud, Palette, TrendingUp } from "lucide-react";

const OurService: FC = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Crafting custom-designed digital homes that balance aesthetic elegance with SEO-friendly architecture. Every pixel is intentional, and our code optimizes on every screen.",
      icon: Monitor,
      featured: false,
    },
    {
      id: 2,
      title: "App Development",
      description:
        "Mobile-first experiences designed for the modern palm. We build intuitive UX/X backed by robust, scalable backends.",
      icon: Smartphone,
      featured: true,
    },
    {
      id: 3,
      title: "SaaS",
      description:
        "Scalable, secure, and user-centric solutions. We transform complex ideas into seamless cloud-based tools that delight users.",
      icon: Cloud,
      featured: false,
    },
    {
      id: 4,
      title: "UI/UX",
      description:
        "Crafting intuitive, user-centric interfaces that marry form and function. We focus on human behavior to create effortless digital journeys.",
      icon: Palette,
      featured: false,
    },
    {
      id: 5,
      title: "Digital Marketing",
      description:
        "Data-driven growth strategies. From high-intent PPC campaigns to organic SEO dominance and social media narratives that spark engagement.",
      icon: TrendingUp,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#222831] via-[#222831] to-[#222831]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="mx-auto container">
          {/* Title */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-5xl font-extrabold uppercase text-[#E2D1B3] mb-4">
              Our Services
            </h2>
            <div className="w-40 h-1 bg-[#F39F5A] rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-20">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group relative p-8 rounded-lg transition-all duration-300 border border-[#677D6A]/20 bg-[#101419] hover:bg-[#1a1f24]`}
                >
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex p-4 bg-[#222831] rounded-lg group-hover:bg-[#2a3339] transition-colors">
                    <Icon
                      className="w-8 h-8 text-[#677D6A] stroke-[1.5]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#E2D1B3] mb-3 group-hover:text-[#F39F5A] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[#999999]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurService;
