import type { FC, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

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
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl md:text-4xl font-extrabold leading-tight uppercase mb-4">
                    <span className="text-[#E2D1B3]">Let&rsquo;s build</span>
                    <br />
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                      Together
                    </span>
                  </h1>
                  <div className="w-40 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
                </div>

                <p className="text-base font-medium text-[#E2D1B3] leading-relaxed max-w-md">
                  Ready to elevate your digital presence? Our atelier of
                  specialists is standing by to craft your next breakthrough.
                </p>

                {/* Contact Information */}
                <div className="space-y-6 pt-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#677D6A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm uppercase text-[#677D6A] font-semibold tracking-wide">
                        Email
                      </p>
                      <a
                        href="mailto:info@xcioratech.com"
                        className="text-[#E2D1B3] hover:text-orange-400 transition-colors"
                      >
                        info@xcioratech.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#677D6A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm uppercase text-[#677D6A] font-semibold tracking-wide">
                        Phone
                      </p>
                      <p className="text-[#E2D1B3]">AUS: +61 2 8503 8000</p>
                      <p className="text-[#E2D1B3]">BD: +880 1701 0542 71</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#677D6A] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm uppercase text-[#677D6A] font-semibold tracking-wide">
                        Address
                      </p>
                      <p className="text-[#E2D1B3]">
                        19 Woronora Ave, Leumeah NSW 2560, Australia.
                      </p>
                      <p className="text-[#E2D1B3]">
                        116/7 East Maniknagar, Mugdha, Dhaka - 1203, Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="relative">
              <div className="bg-[#1a1f24] border border-[#677D6A]/20 rounded-lg p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm uppercase text-[#677D6A] font-semibold tracking-wide mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Who you are?"
                      className="w-full bg-transparent border-b border-[#677D6A]/30 text-[#E2D1B3] placeholder-[#677D6A]/50 focus:outline-none focus:border-orange-400 transition-colors pb-2"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm uppercase text-[#677D6A] font-semibold tracking-wide mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@email.com"
                      className="w-full bg-transparent border-b border-[#677D6A]/30 text-[#E2D1B3] placeholder-[#677D6A]/50 focus:outline-none focus:border-orange-400 transition-colors pb-2"
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm uppercase text-[#677D6A] font-semibold tracking-wide mb-3">
                      How Can We Help ?
                    </label>
                    <select className="w-full bg-transparent border-b border-[#677D6A]/30 text-[#E2D1B3] focus:outline-none focus:border-orange-400 transition-colors pb-2 appearance-none cursor-pointer">
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

                  {/* Project Brief */}
                  <div>
                    <label className="block text-sm uppercase text-[#677D6A] font-semibold tracking-wide mb-3">
                      Project Brief
                    </label>
                    <textarea
                      placeholder="Tell us about your goals . . ."
                      rows={4}
                      className="w-full bg-transparent border-b border-[#677D6A]/30 text-[#E2D1B3] placeholder-[#677D6A]/50 focus:outline-none focus:border-orange-400 transition-colors pb-2 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#F39F5A] hover:bg-orange-500 text-[#222831] rounded font-bold uppercase transition-colors duration-200 flex items-center gap-2"
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

      {/* Bottom CTA Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-4 flex flex-col items-center">
              <h2 className="text-5xl md:text-4xl font-extrabold leading-tight uppercase text-center mb-4">
                <span className="text-white">
                  Let&rsquo;s Create Your
                  <br />
                </span>
                <span className="bg-gradient-to-r from-[#5c6b5f] to-[#677D6A] bg-clip-text text-transparent">
                  Digital Legacy
                </span>
              </h2>
              <p className="text-[#E2D1B3] text-center max-w-2xl">
                We&apos;re excited to hear about your project. Fill out the form
                above and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
