import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import BookButton from "./ui/BookButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="bg-white text-[#78758B] fixed top-0 left-0 w-full z-50 mt-3.5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-[16px] items-center">
            <Link to="/" className="hover:text-[#0B9444] transition">
              Home
            </Link>

            <div className="relative group">
              <Link
                to="/services"
                className="flex items-center gap-1 hover:text-[#0B9444] transition cursor-pointer"
              >
                Our Services <ChevronDown size={18} />
              </Link>

              <div className="absolute left-0 cursor-pointer mt-2 bg-white shadow-lg rounded-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/services" className="block px-4 py-2 hover:bg-green-100">
                  Debt Collection
                </Link>
                <Link to="/services" className="block px-4 py-2 hover:bg-green-100">
                  Customer Services
                </Link>
                <Link to="/services" className="block px-4 py-2 hover:bg-green-100">
                  Sales Services
                </Link>
                <Link to="/services" className="block px-4 py-2 hover:bg-green-100">
                  Email Support
                </Link>
                <Link to="/services" className="block px-4 py-2 hover:bg-green-100">
                  Live Chat Support
                </Link>
                <Link to="/services" className="block px-4 py-2 hover:bg-green-100">
                  BPO Operations
                </Link>
              </div>
            </div>

            <Link to="/about" className="hover:text-[#0B9444] transition">
              About Us
            </Link>
            <Link to="/career" className="hover:text-[#0B9444] transition">
              Career
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <BookButton />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ========== MOBILE MENU WITH ANIMATION ========== */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out
        ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <Link
          to="/"
          className="block px-6 py-3 border-b hover:bg-green-50"
          onClick={closeMobileMenu}
        >
          Home
        </Link>

        {/* Services Accordion */}
        <div>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex justify-between px-6 py-3 border-b hover:bg-green-50"
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              servicesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Link
              to="/services"
              className="block px-8 py-2 hover:bg-green-100"
              onClick={closeMobileMenu}
            >
              Debt Collection
            </Link>
            <Link
              to="/services"
              className="block px-8 py-2 hover:bg-green-100"
              onClick={closeMobileMenu}
            >
              Customer Services
            </Link>
            <Link
              to="/services"
              className="block px-8 py-2 hover:bg-green-100"
              onClick={closeMobileMenu}
            >
              Sales Services
            </Link>
            <Link
              to="/services"
              className="block px-8 py-2 hover:bg-green-100"
              onClick={closeMobileMenu}
            >
              Email Support
            </Link>
            <Link
              to="/services"
              className="block px-8 py-2 hover:bg-green-100"
              onClick={closeMobileMenu}
            >
              Live Chat Support
            </Link>
            <Link
              to="/services"
              className="block px-8 py-2 hover:bg-green-100"
              onClick={closeMobileMenu}
            >
              BPO Operations
            </Link>
          </div>
        </div>

        <Link
          to="/about"
          className="block px-6 py-3 border-b hover:bg-green-50"
          onClick={closeMobileMenu}
        >
          About Us
        </Link>
        <Link
          to="/career"
          className="block px-6 py-3 border-b hover:bg-green-50"
          onClick={closeMobileMenu}
        >
          Career
        </Link>

        <div className="px-6 py-4">
          <Link
            to="/contact"
            className="block w-full px-5 py-2 bg-[#0B9444] text-white text-center rounded-lg hover:bg-[#098039] transition"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
