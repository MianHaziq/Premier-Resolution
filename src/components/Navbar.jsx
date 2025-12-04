import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import BookButton from "./ui/BookButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white text-[#78758B] fixed top-0 left-0 w-full z-50 mt-3.5 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-[16px] items-center cursor-pointer">
            <a className="hover:text-[#0B9444] transition">Home</a>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#0B9444] transition cursor-pointer">
                Our Services <ChevronDown size={18} />
              </button>

              <div className="absolute left-0 cursor-pointer mt-2 bg-white shadow-lg rounded-md w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a className="block px-4 py-2 hover:bg-green-100">Service 1</a>
                <a className="block px-4 py-2 hover:bg-green-100">Service 2</a>
              </div>
            </div>

            <a className="hover:text-[#0B9444] transition">About Us</a>
            <a className="hover:text-[#0B9444] transition">Career</a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            {/* <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Contact
            </button> */}
            <BookButton/>
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
        ${mobileOpen ? "max-h-[500px]  opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <a className="block px-6 py-3 border-b hover:bg-green-50">Home</a>

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
              servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <a className="block px-8 py-2 hover:bg-green-100">Service 1</a>
            <a className="block px-8 py-2 hover:bg-green-100">Service 2</a>
          </div>
        </div>

        <a className="block px-6 py-3 border-b hover:bg-green-50">About Us</a>
        <a className="block px-6 py-3 border-b hover:bg-green-50">Career</a>

        <div className="px-6 py-4">
          <button className="w-full px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
