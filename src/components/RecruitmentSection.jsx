import { Link } from "react-router-dom";

const bulletPoints = [
  "Call center solutions",
  "Debt Collections",
  "Lead Generations for your business",
];

export default function RecruitmentSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="flex min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
        {/* Left Green Section */}
        <div className="w-full lg:w-[55%] bg-gradient-to-r from-[#0B9444] to-[#0a8840] relative z-10">
          <div className="h-full flex items-center">
            <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 py-12 md:py-16 lg:py-20">
              <div className="max-w-[500px] lg:max-w-[480px]">
                {/* Label */}
                <p className="text-[14px] md:text-[15px] text-white font-medium mb-3 md:mb-4">
                  Recruitment
                </p>

                {/* Heading */}
                <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] font-bold text-white leading-tight mb-4 md:mb-6 italic">
                  Grow Your Career with Premiere Resolutions
                </h2>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed mb-6 md:mb-8">
                  Join our talent network and unlock opportunities with top global companies
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                  {bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-white flex-shrink-0" />
                      <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-medium">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  to="/contact"
                  className="inline-block bg-[#0B9444] border-2 border-white text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-medium text-[14px] md:text-[15px] hover:bg-white hover:text-[#0B9444] transition-all duration-300"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Dark Section with gradient overlay */}
        <div className="hidden lg:block w-[45%] relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/heroImage.jpg"
              alt="Career opportunities"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dark gradient overlay from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a8840] via-[#1a1a1a]/70 to-[#1a1a1a]/90" />
        </div>
      </div>
    </section>
  );
}
