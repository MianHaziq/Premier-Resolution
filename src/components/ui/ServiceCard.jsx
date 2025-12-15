// ServiceCard.jsx
import { Link } from "react-router-dom";

/**
 * Interactive Service Card with hover effects
 * width: 414px
 * Includes: lift effect, border glow, custom icon image
 */

export default function ServiceCard({ icon, title, description, link, index = 0, isVisible = true }) {
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
      {/* Content */}
      <div className="flex flex-col pt-5 pr-5 pb-6 pl-5 sm:pt-6 sm:pr-[22px] sm:pb-[26px] sm:pl-[22px] gap-[12px]">
        {/* Icon row */}
        <div className="w-full flex items-start">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg border border-[#20A871] bg-white group-hover:bg-[#0B9444] group-hover:border-[#0B9444] transition-all duration-300 group-hover:scale-110 overflow-hidden">
            {/* Custom icon image */}
            <img
              src={icon}
              alt=""
              className="w-12 h-12 object-contain transition-all duration-300"
            />
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
