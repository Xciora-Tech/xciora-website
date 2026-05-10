import type { FC, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-[#222831]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 md:px-6 py-16 md:py-20 lg:py-56">
        <div className="mx-auto container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight uppercase mb-4">
                    <span className="text-[#677D6A]">Let&rsquo;s build</span>{" "}
                    <span className="text-[#F39F5A]">Together</span>
                  </h1>
                  <div className="w-40 sm:w-48 md:w-56 h-1 bg-[#F39F5A] rounded-full" />
                </div>

                <p className="text-sm md:text-base font-medium text-[#FAFAFA] leading-relaxed">
                  Ready to elevate your digital presence? Our atelier of
                  specialists is standing by to craft your next breakthrough.
                </p>

                {/* Contact Information */}
                <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
                  {/* Email */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#677D6A] flex-shrink-0 mt-0.5" />
                    <div>
                      <a
                        href="mailto:info@xcioratech.com"
                        className="text-sm md:text-base text-[#FAFAFA] hover:text-orange-400 transition-colors"
                      >
                        info@xcioratech.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#677D6A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm md:text-base text-[#FAFAFA]">
                        <span className="font-semibold">AUS:</span> +61411423488
                      </p>
                      <p className="text-sm md:text-base text-[#FAFAFA]">
                        <span className="font-semibold">BD:</span> +880 17010542 71
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#677D6A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm md:text-base text-[#FAFAFA]">
                        606/2 Stockyard Boulevard , Lidcombe NSW 2141, Australia.
                      </p>
                      <p className="text-sm md:text-base text-[#FAFAFA]">
                        116/7 East Maniknagar, Mugdha, Dhaka - 1203, Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="relative w-full">
              <div className="bg-[#1a1f24] border border-[#364251]/20 rounded-lg p-6 md:p-8 lg:p-10">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 md:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm uppercase text-[#F39F5A] font-semibold tracking-wide mb-2 md:mb-3">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Who you are?"
                        className="w-full pb-2 border-b-2 border-[#364251] bg-transparent text-[#E2D1B3] placeholder-[#364251] focus:outline-none focus:border-[#F39F5A] transition-colors text-sm md:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm uppercase text-[#F39F5A] font-semibold tracking-wide mb-2 md:mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="email@email.com"
                        className="w-full bg-transparent border-b-2 border-[#364251] text-[#E2D1B3] placeholder-[#364251] focus:outline-none focus:border-[#F39F5A] transition-colors pb-2 text-sm md:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm uppercase text-[#F39F5A] font-semibold tracking-wide mb-2 md:mb-3">
                      How Can We Help ?
                    </label>
                    <select className="w-full bg-transparent border-b-2 border-[#364251] text-[#364251] focus:outline-none focus:border-[#F39F5A] transition-colors pb-2 appearance-none cursor-pointer text-sm md:text-base">
                      <option value="" className="bg-[#222831] text-[#364251]">
                        Select a service
                      </option>
                      <option
                        value="web"
                        className="bg-[#222831] text-[#E2D1B3]"
                      >
                        Web Development
                      </option>
                      <option
                        value="app"
                        className="bg-[#222831] text-[#E2D1B3]"
                      >
                        App Development
                      </option>
                      <option
                        value="saas"
                        className="bg-[#222831] text-[#E2D1B3]"
                      >
                        SaaS Solutions
                      </option>
                      <option
                        value="marketing"
                        className="bg-[#222831] text-[#E2D1B3]"
                      >
                        Digital Marketing
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm uppercase text-[#F39F5A] font-semibold tracking-wide mb-2 md:mb-3">
                      Project Brief
                    </label>
                    <textarea
                      placeholder="Tell us about your goals ..."
                      rows={4}
                      className="w-full border-b-2 border-[#364251] bg-transparent text-[#E2D1B3] placeholder-[#364251] focus:outline-none focus:border-[#F39F5A] transition-colors pb-2 resize-none text-sm md:text-base"
                    />
                  </div>

                  <div className="pt-4 md:pt-6">
                    <button
                      type="submit"
                      className="px-6 py-3 md:px-8 md:py-3 bg-[#F39F5A] hover:bg-[#e8904a] text-[#222831] rounded font-bold uppercase transition-colors duration-200 flex items-center gap-2 text-sm md:text-base"
                    >
                      Send Enquiry
                      <span>→</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
