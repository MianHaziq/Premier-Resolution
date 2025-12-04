// ServiceCard.jsx
import React from "react";

/**
 * Pixel-precise Service Card
 * width: 414px
 * height: 266px
 * border-radius: 6px
 * border-width: 1px
 * padding: top/bottom 26px, left/right 22px
 * gap: 10px
 */

export default function ServiceCard({ icon, title, description }) {
  return (
    <div
      className={`
        w-[414px] h-[266px]
        rounded-[6px] border border-[#E5E7EB]
        bg-white
        flex flex-col
        pt-[26px] pr-[22px] pb-[26px] pl-[22px]
        gap-[10px]
        shadow-sm
      `}
      role="article"
      aria-label={title}
    >
      {/* Icon row */}
      <div className="w-full flex items-start">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-sm border border-[#20A871]">
          {/* icon passed in as JSX (SVG) */}
          <div className="text-[18px] text-[#1F9B63]">{icon}</div>
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-[18px] leading-[22px] font-semibold text-[#0F172A] max-w-full"
        style={{ marginTop: 0 }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-[14px] text-[#4B5563] leading-[20px] max-w-full"
        style={{ margin: 0 }}
      >
        {description}
      </p>
    </div>
  );
}
