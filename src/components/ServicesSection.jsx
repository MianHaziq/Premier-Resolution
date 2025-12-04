// ServicesSection.jsx
import React from "react";
import ServiceCard from "./ui/ServiceCard";
/* Inline SVG icons so copying the file works immediately */
const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <path d="M9.5 8L6 11.5L9.5 15" stroke="#20A871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 8L18 11.5L14.5 15" stroke="#20A871" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconGears = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <circle cx="9.5" cy="13" r="1.4" fill="#20A871"/>
    <path d="M9.5 9.6v-1.9" stroke="#20A871" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="15.5" cy="9" r="1.4" fill="#20A871"/>
  </svg>
);

const IconSales = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <path d="M6 9h12M8 15h8" stroke="#20A871" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke="#20A871" strokeWidth="1.4"/>
  </svg>
);

const IconChat = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <path d="M8 11h8M8 14h5" stroke="#20A871" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBPO = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="1" width="22" height="22" rx="3" stroke="#20A871" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="10" r="1.3" fill="#20A871"/>
    <path d="M9 15c0-1 1.5-2 3-2s3 1 3 2" stroke="#20A871" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Data array matching the six cards in the image */
const SERVICES = [
  {
    icon: <IconCode />,
    title: "Debt Collection Services",
    description:
      "We deliver ethical, respectful, and result-oriented debt recovery for businesses of all sizes. Our trained agents maximize recovery rates while safeguarding your customer relationships.",
  },
  {
    icon: <IconGears />,
    title: "Customer Services",
    description:
      "Premiere Resolution provides seamless inbound and outbound customer communication. Our agents ensure every interaction is professional, timely, and customer-focused.",
  },
  {
    icon: <IconSales />,
    title: "Sales Services",
    description:
      "We help businesses drive revenue with expert sales support. Our team specializes in lead generation, outbound campaigns, and appointment setting.",
  },
  {
    icon: <IconGlobe />,
    title: "Email Support",
    description:
      "Our email specialists respond quickly with accurate, clear, and professional communication. We help maintain a strong, reliable digital presence.",
  },
  {
    icon: <IconChat />,
    title: "Live Chat Support",
    description:
      "We offer real-time chat support that resolves queries instantly and improves user experience across digital channels.",
  },
  {
    icon: <IconBPO />,
    title: "BPO Operations",
    description:
      "We deliver scalable, reliable BPO operations that streamline business processes and boost efficiency. Our expert teams handle customer communication.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#FAFAFB] py-12 px-20">
      <div className="mx-auto" >
        {/* Header (approx matching image) */}
        <div className="text-center mb-8">
          <h2 className="text-[34px] leading-[40px] font-extrabold text-[#0F172A]">
            Success, <span className="underline decoration-[#20A871] decoration-4 underline-offset-6">Powered by Premiere Resolutions</span>
          </h2>
          <p className="text-[14px] text-[#6B7280] mt-3 max-w-[720px] mx-auto">
            Where advanced technology meets professional communication to create better customer outcomes.
          </p>
        </div>

        {/* Grid: 3 columns on large (matches 1440 layout), 2 on md, 1 on sm */}
        <div
          className="
            grid
            lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
            gap-[18px]
            justify-center
          "
        >
          {SERVICES.map((s, idx) => (
            <div key={idx} className="flex justify-center">
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
