import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  X,
  ChevronDown,
  Phone,
  Mail,
  Banknote,
  Headphones,
  MessageCircle,
  Building2,
  ArrowRight,
  Mail as MailIcon,
  Bot,
} from "lucide-react";
import BookButton from "./ui/BookButton";

// Services data with icons and routes
const services = [
  {
    name: "Debt Collection Services",
    path: "/services/debt-collection",
    icon: Banknote,
    description: "Customer-friendly recovery team",
  },
  {
    name: "Email Marketing Solutions",
    path: "/services/email-support",
    icon: MailIcon,
    description: "Boost conversions & loyalty",
  },
  {
    name: "AI Chatbot Automation 24/7",
    path: "/services/ai-chatbot",
    icon: Bot,
    description: "Instant intelligent responses",
  },
  {
    name: "Business Management Support",
    path: "/services/business-management",
    icon: Building2,
    description: "Streamline operations",
  },
  {
    name: "Call Center & Business Solutions",
    path: "/services/customer-services",
    icon: Headphones,
    description: "Inbound & outbound support",
  },
  {
    name: "Live Chat & Customer Support",
    path: "/services/live-chat-support",
    icon: MessageCircle,
    description: "Real-time assistance",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const isActive = (path) => location.pathname === path;
  const isServiceActive = () => location.pathname.startsWith("/services");

  return (
    <>
      <nav className="bg-white text-[#78758B] fixed top-0 left-0 w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="shrink-0">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-12 md:h-16 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 text-[16px] items-center">
              <Link
                to="/"
                className={`hover:text-[#0B9444] transition ${
                  isActive("/") ? "text-[#0B9444] font-medium" : ""
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 hover:text-[#0B9444] transition cursor-pointer ${
                    isServiceActive() ? "text-[#0B9444] font-medium" : ""
                  }`}
                >
                  Our Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    dropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {/* Dropdown Arrow */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100 z-10" />

                  {/* Dropdown Content */}
                  <div className="relative bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 p-2 w-[420px]">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-gray-100 mb-2">
                      <h3 className="text-[15px] font-semibold text-[#1a1a1a]">
                        Our Services
                      </h3>
                      <p className="text-[12px] text-[#6B7280] mt-0.5">
                        Professional solutions for your business
                      </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-all duration-200"
                          >
                            <div className="w-10 h-10 rounded-lg bg-[#0B9444]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0B9444] group-hover:scale-110 transition-all duration-200">
                              <Icon
                                size={20}
                                className="text-[#0B9444] group-hover:text-white transition-colors"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-[14px] font-medium text-[#1a1a1a] group-hover:text-[#0B9444] transition-colors block">
                                {service.name}
                              </span>
                              <span className="text-[11px] text-[#6B7280] line-clamp-1">
                                {service.description}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="mt-2 pt-3 border-t border-gray-100">
                      <Link
                        to="/services"
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-linear-to-r from-[#0B9444]/5 to-[#0B9444]/10 hover:from-[#0B9444]/10 hover:to-[#0B9444]/20 transition-all group"
                      >
                        <span className="text-[13px] font-medium text-[#0B9444]">
                          View All Services
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-[#0B9444] group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className={`hover:text-[#0B9444] transition ${
                  isActive("/about") ? "text-[#0B9444] font-medium" : ""
                }`}
              >
                About Us
              </Link>
              <Link
                to="/career"
                className={`hover:text-[#0B9444] transition ${
                  isActive("/career") ? "text-[#0B9444] font-medium" : ""
                }`}
              >
                Career
              </Link>
            </div>

            {/* Contact Button - Desktop */}
            <div className="hidden md:block">
              <Link to="/contact">
                <BookButton />
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                    mobileOpen ? "top-3 rotate-45" : "top-1"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                    mobileOpen ? "top-3 -rotate-45" : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ========== MOBILE MENU OVERLAY ========== */}
      <div
        className={`fixed inset-0 bg-black/50 z-60 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      {/* ========== MOBILE MENU DRAWER ========== */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white z-70 md:hidden transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <button
            onClick={closeMobileMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-[#1a1a1a]" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex-1 py-4">
            <Link
              to="/"
              className={`flex items-center px-6 py-4 text-[16px] font-medium transition-colors ${
                isActive("/")
                  ? "text-[#0B9444] bg-green-50 border-r-4 border-[#0B9444]"
                  : "text-[#1a1a1a] hover:bg-gray-50"
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full flex items-center justify-between px-6 py-4 text-[16px] font-medium transition-colors ${
                  isServiceActive()
                    ? "text-[#0B9444] bg-green-50"
                    : "text-[#1a1a1a] hover:bg-gray-50"
                }`}
              >
                <span>Our Services</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  servicesOpen ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`flex items-center gap-3 px-6 py-3 transition-colors ${
                        isActive(service.path)
                          ? "text-[#0B9444] bg-green-100"
                          : "text-[#6B7280] hover:text-[#0B9444] hover:bg-green-50"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <Icon size={18} className="text-[#0B9444]" />
                      <span className="text-[14px]">{service.name}</span>
                    </Link>
                  );
                })}
                <Link
                  to="/services"
                  className="flex items-center gap-3 px-6 py-3 text-[#0B9444] font-medium hover:bg-green-100 transition-colors border-t border-gray-200"
                  onClick={closeMobileMenu}
                >
                  <ArrowRight size={18} />
                  <span className="text-[14px]">View All Services</span>
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`flex items-center px-6 py-4 text-[16px] font-medium transition-colors ${
                isActive("/about")
                  ? "text-[#0B9444] bg-green-50 border-r-4 border-[#0B9444]"
                  : "text-[#1a1a1a] hover:bg-gray-50"
              }`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

            <Link
              to="/career"
              className={`flex items-center px-6 py-4 text-[16px] font-medium transition-colors ${
                isActive("/career")
                  ? "text-[#0B9444] bg-green-50 border-r-4 border-[#0B9444]"
                  : "text-[#1a1a1a] hover:bg-gray-50"
              }`}
              onClick={closeMobileMenu}
            >
              Career
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-[14px] text-[#6B7280] hover:text-[#0B9444] transition-colors"
              >
                <Phone size={16} className="text-[#0B9444]" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@premierresolution.com"
                className="flex items-center gap-3 text-[14px] text-[#6B7280] hover:text-[#0B9444] transition-colors"
              >
                <Mail size={16} className="text-[#0B9444]" />
                <span>info@premierresolution.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="flex items-center justify-center w-full px-6 py-3.5 bg-[#0B9444] text-white text-[16px] font-semibold rounded-xl hover:bg-[#098039] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#0B9444]/20"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
