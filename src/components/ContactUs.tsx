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
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="mx-auto container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl md:text-5xl font-extrabold leading-tight uppercase mb-4">
                    <span className="text-[#677D6A]">Let&rsquo;s build</span>{" "}
                    <span className="text-[#F39F5A]">Together</span>
                  </h1>
                  <div className="w-56 h-1 bg-[#F39F5A] rounded-full" />
                </div>

                <p className="text-base font-medium text-[#FAFAFA] leading-relaxed max-w-2xl">
                  Ready to elevate your digital presence? Our atelier of
                  specialists is standing by to craft your next breakthrough.
                </p>

                {/* Contact Information */}
                <div className="space-y-6 pt-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 align-center">
                    <Mail className="w-6 h-6 text-[#677D6A]" />
                    <div>
                      <a
                        href="mailto:info@xcioratech.com"
                        className="text-[#FAFAFA] hover:text-orange-400 transition-colors"
                      >
                        info@xcioratech.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#677D6A]" />
                    <div>
                      <p className="text-[#FAFAFA]">
                        <span className="font-semibold">AUS:</span> +61 2 8503
                        8000
                      </p>
                      <p className="text-[#FAFAFA]">
                        <span className="font-semibold">BD:</span> +880 1701
                        0542 71
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#677D6A]" />
                    <div>
                      <p className="text-[#FAFAFA]">
                        19 Woronora Ave, Leumeah NSW 2560, Australia.
                      </p>
                      <p className="text-[#FAFAFA]">
                        116/7 East Maniknagar, Mugdha, Dhaka - 1203, Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="relative">
              <div className="bg-[#1a1f24] border border-[#364251]/20 rounded-lg p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase text-[#F39F5A] font-semibold tracking-wide mb-3">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Who you are?"
                        className="w-full pb-2 border-b-2 border-[#364251] bg-transparent text-[#E2D1B3] placeholder-[#E2D1B3]/30 focus:outline-none focus:border-[#F39F5A] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase text-[#F39F5A] font-semibold tracking-wide mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="email@email.com"
                        className="w-full bg-transparent border-b-2 border-[#364251] text-[#E2D1B3] placeholder-[#E2D1B3]/30 focus:outline-none focus:border-[#F39F5A] transition-colors pb-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm uppercase text-[#F39F5A] font-semibold tracking-wide mb-3">
                      How Can We Help ?
                    </label>
                    <select className="w-full bg-transparent border-b-2 border-[#364251] text-[#E2D1B3] focus:outline-none focus:border-[#F39F5A] transition-colors pb-2 appearance-none cursor-pointer">
                      <option value="" className="bg-[#222831]">
                        Select a service
                      </option>
                      <option value="web" className="bg-[#222831]">
                        Web Development
                      </option>
                      <option value="app" className="bg-[#222831]">
                        App Development
                      </option>
                      <option value="saas" className="bg-[#222831]">
                        SaaS Solutions
                      </option>
                      <option value="marketing" className="bg-[#222831]">
                        Digital Marketing
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm uppercase text-[#F39F5A] font-semibold tracking-wide mb-3">
                      Project Brief
                    </label>
                    <textarea
                      placeholder="Tell us about your goals . . ."
                      rows={4}
                      className="w-full border-b-2 border-[#364251] bg-transparent text-[#E2D1B3] placeholder-[#E2D1B3]/30 focus:outline-none focus:border-[#F39F5A] transition-colors pb-2 resize-none"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#F39F5A] hover:bg-[#e8904a] text-[#222831] rounded font-bold uppercase transition-colors duration-200 flex items-center gap-2"
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
