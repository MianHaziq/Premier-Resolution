import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon({ pageName }) {
  return (
    <section className="w-full min-h-screen bg-white pt-32 pb-20 flex items-center justify-center">
      <div className="text-center px-6">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#0B9444]/10 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-[#0B9444]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>

        {/* Page Name */}
        <h1 className="text-[48px] font-bold text-[#1a1a1a] mb-4">
          {pageName}
        </h1>

        {/* Coming Soon Text */}
        <p className="text-[24px] text-[#0B9444] font-semibold mb-4">
          Coming Soon
        </p>

        {/* Description */}
        <p className="text-[17px] text-[#6B7280] max-w-[480px] mx-auto mb-10">
          We're working hard to bring you something amazing.
          Stay tuned for updates!
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0B9444] text-white px-6 py-3 rounded-lg text-[16px] font-medium hover:bg-[#098039] transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
