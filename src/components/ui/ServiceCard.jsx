// ServiceCard.jsx
import { Link } from "react-router-dom";

/**
 * Interactive Service Card with hover effects
 * width: 414px
 * height: 266px
 * Includes: lift effect, border glow, icon animation, image support
 */

export default function ServiceCard({ icon, image, title, description, link, index = 0, isVisible = true }) {
  const CardWrapper = link ? Link : "div";
  const wrapperProps = link ? { to: link } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`
        w-full max-w-[320px] sm:max-w-[360px] md:max-w-[414px] h-auto
        rounded-[12px] border border-[#E5E7EB]
        bg-white
        flex flex-col
        overflow-hidden
        shadow-sm
        cursor-pointer
        group
        transition-all duration-500 ease-out
        hover:shadow-xl hover:shadow-[#0B9444]/10
        hover:-translate-y-2
        hover:border-[#0B9444]/30
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
        }
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
      role="article"
      aria-label={title}
    >
      {/* Image */}
      {image && (
        <div className="w-full h-[160px] sm:h-[180px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col pt-4 pr-4 pb-5 pl-4 sm:pt-5 sm:pr-[22px] sm:pb-[22px] sm:pl-[22px] gap-[10px]">
        {/* Icon row */}
        <div className="w-full flex items-start">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#20A871] bg-white group-hover:bg-[#0B9444] group-hover:border-[#0B9444] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            {/* icon passed in as JSX (SVG) - changes color on hover */}
            <div className="text-[18px] text-[#1F9B63] group-hover:text-white transition-colors duration-300 [&_svg_*]:transition-all [&_svg_*]:duration-300 group-hover:[&_svg_rect]:stroke-white group-hover:[&_svg_path]:stroke-white group-hover:[&_svg_circle]:stroke-white group-hover:[&_svg_circle]:fill-white">
              {icon}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-[18px] leading-[22px] font-semibold text-[#0F172A] max-w-full group-hover:text-[#0B9444] transition-colors duration-300"
          style={{ marginTop: 0 }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-[14px] text-[#4B5563] leading-[20px] max-w-full group-hover:text-[#374151] transition-colors duration-300"
          style={{ margin: 0 }}
        >
          {description}
        </p>
      </div>
    </CardWrapper>
  );
}
