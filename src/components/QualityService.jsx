import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

// Service card data with unique features for each service
const SERVICES_DATA = [
  {
    id: 1,
    image: "/heroImage.jpg",
    title: "Debt Collection",
    description:
      "End-to-end recovery campaigns tailored to increase your collection rate without affecting customer relationships.",
    features: [
      { icon: "monitoring", text: "Real-time monitoring" },
      { icon: "support", text: "24/7 Support Availability" },
      { icon: "success", text: "Excellent Success Rate" },
      { icon: "reporting", text: "Automated reporting" },
      { icon: "collection", text: "Debt Collection" },
      { icon: "call", text: "Call Centre Solution" },
    ],
    qualityTitle: "Our quality service",
    qualityDescription:
      "Streamlined processes, trained agents, and data-driven strategies built to scale your business. Providing end-to-end customer engagement solutions that boost satisfaction and operational performance.",
  },
  {
    id: 2,
    image: "/heroImage.jpg",
    title: "Customer Services",
    description:
      "Professional inbound and outbound customer communication that ensures every interaction is timely and customer-focused.",
    features: [
      { icon: "support", text: "Multi-channel Support" },
      { icon: "monitoring", text: "Quality Assurance" },
      { icon: "success", text: "High Customer Satisfaction" },
      { icon: "reporting", text: "Performance Analytics" },
      { icon: "call", text: "Trained Agents" },
      { icon: "collection", text: "Quick Resolution" },
    ],
    qualityTitle: "Customer-centric approach",
    qualityDescription:
      "Dedicated support teams ensuring every customer interaction is handled with care and professionalism. We prioritize customer satisfaction through trained agents and streamlined processes.",
  },
  {
    id: 3,
    image: "/heroImage.jpg",
    title: "Sales Services",
    description:
      "Expert sales support including lead generation, outbound campaigns, and appointment setting to drive your revenue.",
    features: [
      { icon: "success", text: "Lead Generation" },
      { icon: "call", text: "Outbound Campaigns" },
      { icon: "monitoring", text: "Pipeline Management" },
      { icon: "reporting", text: "Sales Analytics" },
      { icon: "support", text: "Appointment Setting" },
      { icon: "collection", text: "Revenue Growth" },
    ],
    qualityTitle: "Revenue-driven solutions",
    qualityDescription:
      "Strategic sales support designed to maximize your revenue potential. Our experienced sales teams execute targeted campaigns that convert prospects into loyal customers.",
  },
  {
    id: 4,
    image: "/heroImage.jpg",
    title: "Email Support",
    description:
      "Quick and accurate email responses with professional communication to maintain a strong digital presence.",
    features: [
      { icon: "monitoring", text: "Fast Response Time" },
      { icon: "reporting", text: "Email Templates" },
      { icon: "success", text: "High Resolution Rate" },
      { icon: "support", text: "Ticket Management" },
      { icon: "call", text: "Follow-up System" },
      { icon: "collection", text: "Brand Consistency" },
    ],
    qualityTitle: "Professional communication",
    qualityDescription:
      "Expert email handling that maintains your brand voice and ensures timely, accurate responses. Our team manages high volumes while maintaining quality and consistency.",
  },
  {
    id: 5,
    image: "/heroImage.jpg",
    title: "Live Chat Support",
    description:
      "Real-time chat support that resolves queries instantly and improves user experience across digital channels.",
    features: [
      { icon: "monitoring", text: "Instant Response" },
      { icon: "support", text: "24/7 Availability" },
      { icon: "success", text: "First Contact Resolution" },
      { icon: "reporting", text: "Chat Analytics" },
      { icon: "call", text: "Multi-platform Support" },
      { icon: "collection", text: "Customer Insights" },
    ],
    qualityTitle: "Real-time engagement",
    qualityDescription:
      "Instant customer engagement through live chat solutions. Our agents provide immediate assistance, improving customer satisfaction and reducing response times significantly.",
  },
  {
    id: 6,
    image: "/heroImage.jpg",
    title: "BPO Operations",
    description:
      "Scalable and reliable BPO operations that streamline business processes and boost overall efficiency.",
    features: [
      { icon: "success", text: "Process Optimization" },
      { icon: "monitoring", text: "Quality Control" },
      { icon: "reporting", text: "Cost Efficiency" },
      { icon: "support", text: "Scalable Solutions" },
      { icon: "call", text: "Dedicated Teams" },
      { icon: "collection", text: "Business Growth" },
    ],
    qualityTitle: "Operational excellence",
    qualityDescription:
      "Comprehensive BPO solutions that optimize your business operations. We handle complex processes efficiently, allowing you to focus on core business growth.",
  },
];

// Icon components
const IconComponents = {
  monitoring: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  ),
  support: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  reporting: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
    </svg>
  ),
  collection: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" strokeLinecap="round" />
    </svg>
  ),
  call: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
};

export default function QualityService() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setSlideDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? SERVICES_DATA.length - 1 : prev - 1
      );
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setSlideDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === SERVICES_DATA.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setSlideDirection(index > currentIndex ? "right" : "left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const currentService = SERVICES_DATA[currentIndex];

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-20 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >

          {/* LEFT SIDE - Service Card with Navigation */}
          <div
            className={`w-full lg:w-[480px] flex-shrink-0 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            {/* Service Card */}
            <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-gray-100">
              {/* Card Image */}
              <div className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden relative">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                    isAnimating
                      ? slideDirection === "right"
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div
                  className={`flex gap-4 transition-all duration-500 ease-out ${
                    isAnimating
                      ? slideDirection === "right"
                        ? "-translate-x-10 opacity-0"
                        : "translate-x-10 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  {/* Green Accent Bar */}
                  <div className="w-[4px] h-[48px] bg-[#0B9444] rounded-full flex-shrink-0 mt-1" />

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#1a1a1a] mb-2">
                      {currentService.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7280] leading-[1.6]">
                      {currentService.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-[48px] h-[48px] rounded-full border-2 border-[#0B9444] flex items-center justify-center text-[#0B9444] hover:bg-[#0B9444] hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Previous service"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {SERVICES_DATA.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-[#0B9444]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-[48px] h-[48px] rounded-full border-2 border-[#0B9444] flex items-center justify-center text-[#0B9444] hover:bg-[#0B9444] hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Next service"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Quality Service Info */}
          <div
            className={`flex-1 lg:pt-4 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Service Label */}
            <div className="mb-4">
              <span className="text-[14px] font-medium text-[#1a1a1a] border-b-[3px] border-[#0B9444] pb-1">
                Service
              </span>
            </div>

            {/* Main Heading - Animated */}
            <h2
              className={`text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-bold text-[#1a1a1a] leading-[1.2] mb-6 transition-all duration-500 ease-out ${
                isAnimating
                  ? slideDirection === "right"
                    ? "translate-x-10 opacity-0"
                    : "-translate-x-10 opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              {currentService.qualityTitle}
            </h2>

            {/* Description - Animated */}
            <p
              className={`text-[16px] text-[#6B7280] leading-[1.7] mb-10 max-w-[540px] transition-all duration-500 delay-100 ease-out ${
                isAnimating
                  ? slideDirection === "right"
                    ? "translate-x-10 opacity-0"
                    : "-translate-x-10 opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              {currentService.qualityDescription}
            </p>

            {/* Features Grid - Animated */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-4 sm:gap-y-6">
              {currentService.features.map((feature, index) => (
                <div
                  key={`${currentService.id}-${index}`}
                  className={`flex items-center gap-3 transition-all duration-500 ease-out ${
                    isAnimating
                      ? slideDirection === "right"
                        ? "translate-x-10 opacity-0"
                        : "-translate-x-10 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  {/* Icon */}
                  <div className="w-[40px] h-[40px] rounded-full bg-[#E8F5EE] flex items-center justify-center flex-shrink-0">
                    {IconComponents[feature.icon]}
                  </div>

                  {/* Text */}
                  <span className="text-[16px] font-semibold text-[#1a1a1a]">
                    {feature.text}
                  </span>

                  {/* Checkmark */}
                  <Check size={20} className="text-[#0B9444] flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
