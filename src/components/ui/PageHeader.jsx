/**
 * PageHeader - Beautiful hero header component for pages
 *
 * Props:
 * - title: Main heading text
 * - subtitle: Optional description text below title
 * - badge: Optional badge text above title
 * - variant: "default" | "large" - controls padding/sizing
 */

export default function PageHeader({
  title,
  subtitle,
  badge,
  variant = "default",
}) {
  const isLarge = variant === "large";

  return (
    <section
      className={`relative bg-gradient-to-br from-[#0B9444] via-[#0a8840] to-[#087735] overflow-hidden ${
        isLarge
          ? "py-16 sm:py-20 md:py-24 lg:py-28"
          : "py-14 sm:py-16 md:py-20 lg:py-24"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-white" />
      </div>

      <div className="relative max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 text-center">
        {/* Badge */}
        {badge && (
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-[13px] sm:text-[14px] font-medium mb-4 sm:mb-6">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1
          className={`font-bold text-white leading-tight ${
            isLarge
              ? "text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] mb-4 sm:mb-6"
              : "text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] 2xl:text-[64px] mb-3 sm:mb-4"
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-white/90 max-w-[600px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
