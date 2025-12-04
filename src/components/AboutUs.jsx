import { Play } from "lucide-react";

export default function AboutUs() {
  // Statistics data
  const stats = [
    { number: "20", label: "Experience years" },
    { number: "340", label: "Customers" },
    { number: "520", label: "Projects done" },
    { number: "40", label: "Awards" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-20 flex flex-col lg:flex-row items-stretch gap-16">

        {/* LEFT SIDE - VIDEO/IMAGE */}
        <div className="relative w-full lg:w-[580px] h-[680px] flex-shrink-0">
          {/* Placeholder Image - Replace with video when available */}
          <img
            src="/heroImage.jpg"
            alt="About Premier Resolution"
            className="w-full h-full object-cover"
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[#8B7EE0] bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 cursor-pointer"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </button>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex flex-col justify-center flex-1 py-8">
          {/* Heading */}
          <h2 className="text-[48px] font-bold text-[#1a1a1a] leading-tight mb-6">
            About Us
          </h2>

          {/* Description */}
          <p className="text-[17px] text-[#6B7280] leading-[1.7] max-w-[520px] mb-8">
            Partner with a professional, reliable, and performance-driven
            team to handle your debt collections, customer support, and
            sales outreach—so you can focus on growing your business.
          </p>

          {/* Horizontal Divider */}
          <div className="w-full max-w-[520px] h-[1px] bg-[#E5E7EB] mb-10" />

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-y-10 max-w-[520px]">
            {/* Row 1 */}
            <div className="flex items-baseline gap-3 pr-8 border-r border-[#E5E7EB]">
              <span className="text-[48px] font-bold text-[#0B9444] leading-none">
                {stats[0].number}
              </span>
              <span className="text-[17px] text-[#1a1a1a] font-medium">
                {stats[0].label}
              </span>
            </div>
            <div className="flex items-baseline gap-3 pl-8">
              <span className="text-[48px] font-bold text-[#0B9444] leading-none">
                {stats[1].number}
              </span>
              <span className="text-[17px] text-[#1a1a1a] font-medium">
                {stats[1].label}
              </span>
            </div>

            {/* Row 2 */}
            <div className="flex items-baseline gap-3 pr-8 border-r border-[#E5E7EB]">
              <span className="text-[48px] font-bold text-[#0B9444] leading-none">
                {stats[2].number}
              </span>
              <span className="text-[17px] text-[#1a1a1a] font-medium">
                {stats[2].label}
              </span>
            </div>
            <div className="flex items-baseline gap-3 pl-8">
              <span className="text-[48px] font-bold text-[#0B9444] leading-none">
                {stats[3].number}
              </span>
              <span className="text-[17px] text-[#1a1a1a] font-medium">
                {stats[3].label}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-12 w-fit bg-[#0B9444] text-white px-8 py-4 rounded-lg text-[16px] font-semibold hover:bg-[#098039] transition-colors duration-300">
            Book a Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
