// ServicesSection.jsx
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ui/ServiceCard";

/* Data array matching the seven services */
const SERVICES = [
  {
    icon: "/debtIcon.png",
    title: "Debt Collection Services",
    description:
      "Recover payments quickly and professionally with our compliant, customer-friendly recovery team.",
    link: "/services/debt-collection",
  },
  {
    icon: "/emailIconn.png",
    title: "Email Marketing Solutions",
    description:
      "Engage customers with targeted campaigns that boost conversions and build lasting brand loyalty.",
    link: "/services/email-support",
  },
  {
    icon: "/aiChatBotIcon.png",
    title: "AI Chatbot Automation 24/7",
    description:
      "Provide instant, 24/7 responses with intelligent chatbots that reduce workload and improve support.",
    link: "/services/ai-chatbot",
  },
  {
    icon: "/bmIcon.png",
    title: "Business Management Support",
    description:
      "Streamline operations, improve efficiency, and keep your business running smoothly.",
    link: "/services/business-management",
  },
  {
    icon: "/callCenterIcon.png",
    title: "Call Center & Business Solutions",
    description:
      "Professional inbound and outbound support tailored to enhance customer experience.",
    link: "/services/customer-services",
  },
  {
    icon: "/csIcon.png",
    title: "Customer Support",
    description:
      "Provide real-time assistance when customers need it most with 87% satisfaction ratings.",
    link: "/services/live-chat-support",
  },
  {
    icon: "/csIcon.png",
    title: "Sales Services",
    description:
      "Expert sales support with lead generation and appointment setting delivering 43% higher conversion rates.",
    link: "/services/sales-services",
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
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className={`text-[22px] sm:text-[26px] md:text-[32px] lg:text-[34px] leading-[1.3] sm:leading-[1.25] font-extrabold text-[#0F172A] transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Success,{" "}
            <span className="relative">
              <span className="relative z-10">Powered by Premiere Resolutions</span>
              <span
                className={`absolute left-0 right-0 bottom-0 h-[3px] sm:h-[4px] bg-[#20A871] rounded-full transition-all duration-700 delay-500 ${
                  isVisible ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h2>
          <p
            className={`text-[13px] sm:text-[14px] md:text-[16px] text-[#6B7280] mt-3 sm:mt-4 max-w-[720px] mx-auto transition-all duration-700 delay-200 ease-out px-2 sm:px-0 ${
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
