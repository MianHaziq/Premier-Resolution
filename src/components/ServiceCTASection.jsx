import { Link } from "react-router-dom";

/**
 * ServiceCTASection - Call-to-action section for service pages
 *
 * Props:
 * - heading: Main heading text (green, bold)
 * - description: Paragraph description
 * - ctaText: Text above the button
 * - buttonText: Button label
 * - buttonLink: Button destination (default: "/contact")
 * - image: Image source path
 * - imageAlt: Alt text for image
 */

export default function ServiceCTASection({
  heading = "Local Experts in Debt Collection",
  description = "We offer on-the-ground representatives in your customer's location who understand the practices that work to support full recovery of your funds.",
  ctaText = "Get Your Free Consultation Today",
  buttonText = "Start Collection",
  buttonLink = "/contact",
  image = "/heroImage.jpg",
  imageAlt = "Customer support representative",
}) {
  return (
    <section className="bg-[#F3F4F6] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Main Heading */}
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0B9444] leading-tight mb-4 sm:mb-5 md:mb-6">
              {heading}
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-[500px] mx-auto lg:mx-0">
              {description}
            </p>

            {/* CTA Text */}
            <p className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#0B9444] mb-4 sm:mb-5">
              {ctaText}
            </p>

            {/* Button */}
            <Link
              to={buttonLink}
              className="inline-block bg-[#0B9444] text-white text-[14px] sm:text-[15px] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-[#098040] transition-colors duration-200"
            >
              {buttonText}
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2">
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-[500px] lg:max-w-none h-auto rounded-lg object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
