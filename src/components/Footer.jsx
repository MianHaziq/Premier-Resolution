import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

// Social Icons
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Services links
const services = [
  { name: "Debt Collection Services", path: "/services/debt-collection" },
  { name: "Email Marketing Solutions", path: "/services/email-support" },
  { name: "AI Chatbot Automation 24/7", path: "/services/ai-chatbot" },
  { name: "Business Management Support", path: "/services/business-management" },
  { name: "Call Center & Business Solutions", path: "/services/customer-services" },
  { name: "Customer Support", path: "/services/live-chat-support" },
  { name: "Sales Services", path: "/services/sales-services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Column 1 - Company Info */}
          <div>
            {/* Logo */}
          

            <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-3">
              Premier Resolutions
            </h3>

            <p className="text-[13px] md:text-[14px] text-[#9CA3AF] leading-relaxed mb-6">
              Your trusted partner for debt collection calling, customer support, and business development services.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/103478800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-[#0B9444] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h4 className="text-[16px] md:text-[18px] font-semibold text-white mb-6">
              Contact info
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@Premierresolutions.net"
                  className="flex items-start gap-3 text-[13px] md:text-[14px] text-[#9CA3AF] hover:text-[#0B9444] transition-colors group"
                >
                  <Mail size={18} className="text-[#0B9444] mt-0.5 shrink-0" />
                  <span>info@Premierresolutions.net</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+924211104-05-06"
                  className="flex items-start gap-3 text-[13px] md:text-[14px] text-[#9CA3AF] hover:text-[#0B9444] transition-colors group"
                >
                  <Phone size={18} className="text-[#0B9444] mt-0.5 shrink-0" />
                  <span>+923354032465</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[13px] md:text-[14px] text-[#9CA3AF]">
                <MapPin size={18} className="text-[#0B9444] mt-0.5 shrink-0" />
                <span>
                  30-32 Knowsley Street, Unit 2, Little Giants Mall, Manchester, England, M8 8HQ
                </span>
              </li>
              <li className="flex items-start gap-3 text-[13px] md:text-[14px] text-[#9CA3AF]">
                <MapPin size={18} className="text-[#0B9444] mt-0.5 shrink-0" />
                <span>
                  Building 156 Alliance Office, M Block Main Blvd, Johar Town, Lahore, Punjab Pakistan
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-[16px] md:text-[18px] font-semibold text-white mb-6">
              Service
            </h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-[13px] md:text-[14px] text-[#9CA3AF] hover:text-[#0B9444] transition-colors duration-300 underline underline-offset-2"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="border-t border-[#333] py-4 md:py-6">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
            <img src="/l1.png" alt="Partner" className="h-16 md:h-18 lg:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <img src="/l2.png" alt="Partner" className="h-16 md:h-18 lg:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <img src="/l3.png" alt="Partner" className="h-16 md:h-18 lg:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <img src="/l4.png" alt="Partner" className="h-16 md:h-18 lg:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */} 
      <div className="border-t border-[#0B9444]">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 py-5">
          <p className="text-[13px] md:text-[14px] text-[#9CA3AF] text-center">
            Copyright 2025 Premier resolutions. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
