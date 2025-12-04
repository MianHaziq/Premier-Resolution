// ServicesSection.jsx
import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ui/ServiceCard";

/* Inline SVG icons so copying the file works immediately */
const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <path d="M9.5 8L6 11.5L9.5 15" stroke="#20A871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 8L18 11.5L14.5 15" stroke="#20A871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconGears = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <circle cx="9.5" cy="13" r="1.4" fill="#20A871"/>
    <path d="M9.5 9.6v-1.9" stroke="#20A871" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="15.5" cy="9" r="1.4" fill="#20A871"/>
  </svg>
);

const IconSales = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <path d="M6 9h12M8 15h8" stroke="#20A871" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke="#20A871" strokeWidth="1.4"/>
  </svg>
);

const IconChat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <path d="M8 11h8M8 14h5" stroke="#20A871" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBPO = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="10" r="1.3" fill="#20A871"/>
    <path d="M9 15c0-1 1.5-2 3-2s3 1 3 2" stroke="#20A871" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Data array matching the six cards in the image */
const SERVICES = [
  {
    icon: <IconCode />,
    title: "Debt Collection Services",
    description:
      "We deliver ethical, respectful, and result-oriented debt recovery for businesses of all sizes. Our trained agents maximize recovery rates while safeguarding your customer relationships.",
  },
  {
    icon: <IconGears />,
    title: "Customer Services",
    description:
      "Premiere Resolution provides seamless inbound and outbound customer communication. Our agents ensure every interaction is professional, timely, and customer-focused.",
  },
  {
    icon: <IconSales />,
    title: "Sales Services",
    description:
      "We help businesses drive revenue with expert sales support. Our team specializes in lead generation, outbound campaigns, and appointment setting.",
  },
  {
    icon: <IconGlobe />,
    title: "Email Support",
    description:
      "Our email specialists respond quickly with accurate, clear, and professional communication. We help maintain a strong, reliable digital presence.",
  },
  {
    icon: <IconChat />,
    title: "Live Chat Support",
    description:
      "We offer real-time chat support that resolves queries instantly and improves user experience across digital channels.",
  },
  {
    icon: <IconBPO />,
    title: "BPO Operations",
    description:
      "We deliver scalable, reliable BPO operations that streamline business processes and boost efficiency. Our expert teams handle customer communication.",
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#FAFAFB] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header with animation */}
        <div className="text-center mb-12">
          <h2
            className={`text-[28px] md:text-[34px] leading-[40px] font-extrabold text-[#0F172A] transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Success,{" "}
            <span className="relative">
              <span className="relative z-10">Powered by Premiere Resolutions</span>
              <span
                className={`absolute left-0 right-0 bottom-0 h-[4px] bg-[#20A871] rounded-full transition-all duration-700 delay-500 ${
                  isVisible ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h2>
          <p
            className={`text-[14px] md:text-[16px] text-[#6B7280] mt-4 max-w-[720px] mx-auto transition-all duration-700 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Where advanced technology meets professional communication to create better customer outcomes.
          </p>
        </div>

        {/* Grid with staggered card animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {SERVICES.map((s, idx) => (
            <ServiceCard
              key={idx}
              {...s}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
