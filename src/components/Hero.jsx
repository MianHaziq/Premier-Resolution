import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero({ preloaderComplete = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Wait for preloader to complete before starting animations
    if (preloaderComplete) {
      // Small delay after preloader for smooth transition
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [preloaderComplete]);

  return (
    <section className="w-full bg-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT TEXT CONTENT */}
        <div className="max-w-[600px]">
          {/* Animated heading - each line appears with delay */}
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] font-bold text-black">
            <span
              className={`block transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Premier Resolutions —
            </span>
            <span
              className={`block transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              Operational Excellence.
            </span>
            <span
              className={`block transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Customer-Centric
            </span>
            <span
              className={`relative inline-block transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              Results.
              <span
                className={`absolute left-0 right-0 -bottom-2 h-2 bg-[#0B9444] opacity-80 rounded-full transition-all duration-700 origin-left ${
                  isVisible ? "scale-x-110" : "scale-x-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              />
            </span>
          </h1>

          {/* Animated paragraph */}
          <p
            className={`text-[17px] text-gray-600 mt-6 leading-relaxed max-w-[460px] transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Delivering high-performance customer support, collections, and
            outreach services tailored for modern businesses.
          </p>

          {/* Animated button */}
          <Link
            to="/contact"
            className={`inline-block mt-8 bg-[#0B9444] text-white px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-[#098039] hover:scale-105 active:scale-95 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            Get a Consultation
          </Link>
        </div>

        {/* RIGHT IMAGE - Animated */}
        <div
          className={`flex justify-center lg:justify-end w-full lg:w-auto transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-20 scale-95"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <img
            src="/heroImage.jpg"
            alt="Call center"
            className="w-full max-w-[572px] h-auto lg:h-[593px] object-cover rounded-[48px] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
}
