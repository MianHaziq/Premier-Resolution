import { useState, useEffect } from "react";

/**
 * Preloader Component
 *
 * Easy to enable/disable:
 * - To DISABLE: Set PRELOADER_ENABLED to false
 * - To ENABLE: Set PRELOADER_ENABLED to true
 * - To change duration: Modify PRELOADER_DURATION (in milliseconds)
 */

// ========== CONFIGURATION ==========
const PRELOADER_ENABLED = true;  // Set to false to disable preloader
const PRELOADER_DURATION = 2500; // Duration in ms (2.5 seconds)
// ====================================

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(PRELOADER_ENABLED);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!PRELOADER_ENABLED) {
      onComplete?.();
      return;
    }

    // Start fade out animation before hiding
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, PRELOADER_DURATION - 500);

    // Hide preloader completely
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, PRELOADER_DURATION);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  // Don't render if disabled or animation complete
  if (!PRELOADER_ENABLED || !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/logo.png"
            alt="Premier Resolution"
            className="h-20 w-auto mx-auto animate-pulse"
          />
        </div>

        {/* Welcome Text */}
        <h1 className="text-[32px] font-bold text-[#1a1a1a] mb-2">
          Welcome to
        </h1>
        <h2 className="text-[40px] font-bold text-[#0B9444] mb-8">
          Premier Resolution
        </h2>

        {/* Loading Animation */}
        <div className="flex items-center justify-center gap-2">
          <span
            className="w-3 h-3 bg-[#0B9444] rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="w-3 h-3 bg-[#0B9444] rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="w-3 h-3 bg-[#0B9444] rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>

        {/* Tagline */}
        <p className="text-[14px] text-[#6B7280] mt-6">
          Operational Excellence. Customer-Centric Results.
        </p>
      </div>
    </div>
  );
}
