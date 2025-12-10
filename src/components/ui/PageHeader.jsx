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
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-white" />
      </div>

      <div className="relative max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 2xl:px-24 text-center">
        {/* Badge */}
        {badge && (
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-3 sm:mb-4 md:mb-6">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1
          className={`font-bold text-white leading-tight ${
            isLarge
              ? "text-[26px] sm:text-[32px] md:text-[44px] lg:text-[52px] xl:text-[60px] mb-3 sm:mb-4 md:mb-6"
              : "text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] mb-2 sm:mb-3 md:mb-4"
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-white/90 max-w-[500px] sm:max-w-[550px] md:max-w-[600px] mx-auto leading-relaxed px-2 sm:px-0">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
