import { useEffect, useRef, useState } from "react";

// Stats data
const stats = [
  {
    number: 8,
    suffix: "+",
    label: "Experience years",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="6" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="20" r="4" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
        <circle cx="36" cy="20" r="4" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
        <path d="M18 32c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 34c0-2.2 1.8-4 4-4" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
        <path d="M40 34c0-2.2-1.8-4-4-4" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: 420,
    suffix: "+",
    label: "Customers",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="12" width="28" height="20" rx="4" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
        <circle cx="18" cy="20" r="3" stroke="#D1D5DB" strokeWidth="1.5" fill="none"/>
        <circle cx="30" cy="20" r="3" stroke="#D1D5DB" strokeWidth="1.5" fill="none"/>
        <circle cx="24" cy="26" r="3" stroke="#D1D5DB" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    number: 320,
    suffix: "+",
    label: "Inquiries handled",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 28l10-4 10 4" stroke="#D1D5DB" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M14 22l10-4 10 4" stroke="#D1D5DB" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M14 16l10-4 10 4" stroke="#D1D5DB" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M14 28v4l10 4 10-4v-4" stroke="#D1D5DB" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    number: 45,
    suffix: "+",
    label: "Outreach Agency",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="20" r="8" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="20" r="3" stroke="#D1D5DB" strokeWidth="1.5" fill="none"/>
        <path d="M24 28v6" stroke="#D1D5DB" strokeWidth="2"/>
        <path d="M18 38h12" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 34h8" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function AwardsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setCountersStarted(true), 600);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
    if (!countersStarted) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters(stats.map((stat) => Math.floor(stat.number * easeOut)));

      if (step >= steps) {
        clearInterval(timer);
        setCounters(stats.map((stat) => stat.number));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [countersStarted]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAFAFB] py-16 md:py-20 lg:py-24 2xl:py-28 overflow-hidden"
    >
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 2xl:gap-24">

          {/* LEFT SIDE - Content */}
          <div className="w-full lg:w-[520px] 2xl:w-[580px] shrink-0">
            {/* Header */}
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[16px] text-[#6B7280] mb-2">
                <span className="italic text-[#0B9444] relative">
                  Recognized
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#0B9444]" />
                </span>
                <span className="italic"> for Excellence</span>
              </p>
              <h2 className="text-[32px] md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-bold text-[#1a1a1a] leading-tight mb-4">
                Awards & Achievements
              </h2>
              <p className="text-[15px] md:text-[16px] 2xl:text-[17px] text-[#6B7280] leading-relaxed max-w-[460px] 2xl:max-w-[520px]">
                Our dedication to quality, performance, and customer satisfaction has
                earned us recognition from industry leaders and clients worldwide.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 2xl:gap-8 mt-10 2xl:mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-5 md:p-6 2xl:p-7 flex items-center justify-between transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Number and Label */}
                  <div>
                    <p className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[38px] 2xl:text-[40px] font-bold text-[#1a1a1a] leading-none">
                      {counters[index]}{stat.suffix}
                    </p>
                    <p className="text-[13px] md:text-[14px] 2xl:text-[15px] text-[#6B7280] mt-1">
                      {stat.label}
                    </p>
                    {/* Green underline */}
                    <div className="w-8 h-[3px] bg-[#0B9444] rounded-full mt-2" />
                  </div>

                  {/* Icon */}
                  <div className="opacity-60">
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Image with Award Card */}
          <div
            className={`relative w-full lg:w-auto lg:flex-1 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Main Image */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/achievment.png"
                alt="Conference Achievement"
                className="w-full sm:max-w-[480px] md:max-w-[520px] lg:w-[540px] 2xl:w-[620px] h-[220px] sm:h-[280px] md:h-[380px] lg:h-[420px] 2xl:h-[480px] object-cover rounded-2xl shadow-lg mx-auto lg:mx-0"
              />

              {/* Award Card - Floating */}
              <div
                className={`absolute -bottom-4 sm:-bottom-6 left-0 sm:-left-2 md:-left-8 lg:-left-12 2xl:-left-16 bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-5 2xl:p-6 flex items-center gap-3 sm:gap-4 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] 2xl:max-w-[400px] transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                {/* Trophy Image */}
                <img
                  src="/awardCup.png"
                  alt="Award Trophy"
                  className="w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 object-contain shrink-0"
                />

                {/* Award Text */}
                <div>
                  <h4 className="text-[14px] md:text-[16px] 2xl:text-[18px] font-semibold text-[#1a1a1a] leading-snug">
                    Call center solutions company of the year
                  </h4>
                  <p className="text-[12px] md:text-[13px] 2xl:text-[14px] text-[#6B7280] mt-1">
                    Best Customer Outreach Agency – 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
