import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef(null);

  // Statistics data
  const stats = [
    { number: 20, label: "Experience years", suffix: "" },
    { number: 340, label: "Customers", suffix: "+" },
    { number: 520, label: "Projects done", suffix: "+" },
    { number: 40, label: "Awards", suffix: "" },
  ];

  // Animated counter state
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counters after a delay
          setTimeout(() => setCountersStarted(true), 800);
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

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Easing function for smooth animation
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
    <section ref={sectionRef} className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">

        {/* LEFT SIDE - VIDEO/IMAGE */}
        <div
          className={`relative w-full lg:w-[580px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[680px] shrink-0 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          {/* Placeholder Image - Replace with video when available */}
          <img
            src="/heroImage.jpg"
            alt="About Premier Resolution"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Uncomment below when video is available and comment out the img tag above */}
          {/* <video
            src="/about-video.mp4"
            className="w-full h-full object-cover"
            poster="/heroImage.jpg"
            controls={false}
          /> */}

          {/* Play Button Overlay */}
          <button
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[#8B7EE0] bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer ${
              isVisible ? "scale-100" : "scale-0"
            }`}
            style={{ transitionDelay: "500ms" }}
            aria-label="Play video"
          >
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </button>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex flex-col justify-center flex-1 py-4 lg:py-8">
          {/* Heading */}
          <h2
            className={`text-[36px] md:text-[48px] font-bold text-[#1a1a1a] leading-tight mb-6 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            About Us
          </h2>

          {/* Description */}
          <p
            className={`text-[16px] md:text-[17px] text-[#6B7280] leading-[1.7] max-w-[520px] mb-8 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Partner with a professional, reliable, and performance-driven
            team to handle your debt collections, customer support, and
            sales outreach—so you can focus on growing your business.
          </p>

          {/* Horizontal Divider */}
          <div
            className={`w-full max-w-[520px] h-[1px] bg-[#E5E7EB] mb-10 transition-all duration-700 ease-out ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transformOrigin: "left", transitionDelay: "600ms" }}
          />

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-y-6 sm:gap-y-10 max-w-full sm:max-w-[520px]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-baseline gap-3 ${
                  index % 2 === 0 ? "pr-8 border-r border-[#E5E7EB]" : "pl-8"
                } transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <span className="text-[36px] md:text-[48px] font-bold text-[#0B9444] leading-none">
                  {counters[index]}{stat.suffix}
                </span>
                <span className="text-[15px] md:text-[17px] text-[#1a1a1a] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/about"
            className={`inline-block mt-12 w-fit bg-[#0B9444] text-white px-8 py-4 rounded-lg text-[16px] font-semibold hover:bg-[#098039] hover:scale-105 active:scale-95 transition-all duration-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            Learn More About Us
          </Link>
        </div>

      </div>
    </section>
  );
}
