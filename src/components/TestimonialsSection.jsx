import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    id: 1,
    role: "Vendor Manager",
    industry: "Ride Hailing",
    text: "We have cultivated an outstanding collaboration with Premier Resolution. They have always been remarkably flexible and adaptable to changes in our requirements while continuing to uphold high standards of service delivery.",
    rating: 5,
  },
  {
    id: 2,
    role: "Head of Customer Service",
    industry: "Telecom",
    text: "Premier Resolution's industry expertise and commitment to understanding our needs has resulted in exceptional quality. Their transparent communication has made them an invaluable partner.",
    rating: 5,
  },
  {
    id: 3,
    role: "Customer Experience Lead",
    industry: "Fintech",
    text: "Highly professional, efficient and reliable. They have been innovative and strategic in their approach to tackling problems and helped us save priceless time and resources.",
    rating: 5,
  },
  {
    id: 4,
    role: "Operations Director",
    industry: "E-commerce",
    text: "Working with Premier Resolution has transformed our customer support operations. Their team seamlessly integrated with our processes and consistently delivers outstanding results.",
    rating: 5,
  },
  {
    id: 5,
    role: "CEO",
    industry: "Healthcare",
    text: "Premier Resolution exceeded our expectations in every aspect. From onboarding to daily operations, their team demonstrated expertise and commitment that is hard to find.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const sectionRef = useRef(null);

  // Determine cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden"
    >
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white" />
        <div className="w-1/2 bg-[#0B9444]" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">

          {/* Header Row - Left heading, Right arrows */}
          <div
            className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-0 mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left - Heading */}
            <div>
              <p className="text-[14px] sm:text-[16px] text-[#6B7280] mb-1 sm:mb-2">
                <span className="italic text-[#0B9444] relative">
                  What
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#0B9444]" />
                </span>
                <span className="italic"> Our Clients Say</span>
              </p>
              <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-bold text-[#1a1a1a] leading-tight">
                Testimonials
              </h2>
            </div>

            {/* Right - Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-white shadow-md ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft
                  size={20}
                  className="text-[#0B9444] sm:w-[22px] sm:h-[22px]"
                />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 bg-white shadow-md ${
                  currentIndex >= maxIndex
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight
                  size={20}
                  className="text-[#0B9444] sm:w-[22px] sm:h-[22px]"
                />
              </button>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="overflow-hidden">
              <div
                className="flex gap-5 md:gap-6 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{
                  transform: `translateX(calc(-${currentIndex} * (${100 / cardsPerView}% + ${24 / cardsPerView}px)))`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="shrink-0"
                    style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 24 / cardsPerView}px)` }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg shadow-black/8 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Decorative Quote */}
      <div className="absolute top-3 right-4 text-[#0B9444]/10 text-[48px] md:text-[56px] font-serif leading-none select-none">
        "
      </div>

      {/* Role & Industry */}
      <div className="relative z-10">
        <h4 className="text-[15px] md:text-[16px] font-semibold text-[#1a1a1a]">
          {testimonial.role}
        </h4>
        <p className="text-[12px] md:text-[13px] text-[#0B9444]">
          Industry: {testimonial.industry}
        </p>
      </div>

      {/* Testimonial Text */}
      <p className="text-[13px] md:text-[14px] text-[#6B7280] leading-relaxed mt-4 flex-1">
        {testimonial.text}
      </p>

      {/* Rating */}
      <div className="flex gap-1 mt-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            size={16}
            className={idx < testimonial.rating ? "fill-[#0B9444] text-[#0B9444]" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0B9444] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
