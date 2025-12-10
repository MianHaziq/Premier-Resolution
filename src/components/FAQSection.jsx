import { useState } from "react";

// Chevron Icon Component
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Single FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      onClick={onClick}
      className="w-full py-4 flex items-start gap-3 text-left cursor-pointer"
    >
      {/* Green vertical bar */}
      <div className="w-[3px] h-5 bg-[#0B9444] rounded-full flex-shrink-0 mt-0.5" />

      {/* Question text */}
      <span className="flex-1 text-[15px] sm:text-[16px] font-medium text-[#1a1a1a] leading-snug pr-4">
        {question}
      </span>

      {/* Chevron icon */}
      <ChevronIcon isOpen={isOpen} />
    </button>

    {/* Answer - collapsible */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="pl-[15px] pr-8 pb-4 text-[14px] sm:text-[15px] text-[#6B7280] leading-relaxed">
        {answer}
      </p>
    </div>
  </div>
);

// Tab Button Component
const TabButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 text-[14px] sm:text-[15px] font-medium transition-all duration-200 cursor-pointer ${
      isActive
        ? "bg-[#0B9444] text-white rounded-md"
        : "text-[#1a1a1a] hover:text-[#0B9444]"
    }`}
  >
    {label}
  </button>
);

export default function FAQSection({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  // Default data if none provided
  const faqData = data || {
    title: "We are here to help you",
    subtitle:
      "You can find our frequently asked questions and exact answers without contacting directly supporters",
    tabs: [
      {
        label: "General",
        questions: [
          {
            question: "Can you customize call center solutions for my business?",
            answer:
              "Yes. All our services are fully customizable based on your workflow, customer needs, and operational goals.",
          },
          {
            question: "Do you offer 24/7 customer support?",
            answer:
              "Yes, we provide round-the-clock customer support services to ensure your customers always have access to assistance.",
          },
          {
            question: "Can I scale the team as my business grows?",
            answer:
              "Absolutely. Our flexible staffing model allows you to scale up or down based on your business requirements.",
          },
          {
            question: "Do you offer Call center support?",
            answer:
              "Yes, we offer comprehensive call center support including inbound, outbound, and blended services.",
          },
          {
            question: "What is the onboarding process?",
            answer:
              "Our onboarding process includes discovery, planning, training, and a seamless transition period to ensure success.",
          },
          {
            question: "How do you handle customer data and privacy?",
            answer:
              "We follow strict data protection protocols and comply with all relevant privacy regulations to keep your data secure.",
          },
        ],
      },
      {
        label: "Price",
        questions: [
          {
            question: "What are your pricing models?",
            answer:
              "We offer flexible pricing models including per-hour, per-agent, and performance-based options.",
          },
          {
            question: "Are there any setup fees?",
            answer:
              "Setup fees vary based on the complexity of your requirements. Contact us for a custom quote.",
          },
          {
            question: "Do you offer volume discounts?",
            answer:
              "Yes, we provide competitive volume discounts for larger engagements.",
          },
        ],
      },
      {
        label: "Service",
        questions: [
          {
            question: "What services do you offer?",
            answer:
              "We offer a comprehensive range of BPO services including customer support, sales, technical support, and more.",
          },
          {
            question: "How do you ensure quality?",
            answer:
              "We maintain strict quality assurance protocols including call monitoring, regular training, and performance reviews.",
          },
          {
            question: "What industries do you serve?",
            answer:
              "We serve a wide range of industries including finance, healthcare, retail, technology, and telecommunications.",
          },
        ],
      },
    ],
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    setOpenIndex(0); // Reset to first item open when changing tabs
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">
          {/* Left Side - Title Section */}
          <div className="lg:w-[340px] xl:w-[380px] flex-shrink-0">
            {/* Green accent bar */}
            <div className="w-10 sm:w-12 md:w-14 h-[3px] sm:h-[4px] bg-[#0B9444] mb-4 sm:mb-6 md:mb-8" />

            {/* Main heading */}
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[46px] font-bold text-[#1a1a1a] leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-5 md:mb-6">
              {faqData.title}
            </h2>

            {/* Subtitle */}
            <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed max-w-[280px] sm:max-w-[320px]">
              {faqData.subtitle}
            </p>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-8">
              {faqData.tabs.map((tab, index) => (
                <TabButton
                  key={index}
                  label={tab.label}
                  isActive={activeTab === index}
                  onClick={() => handleTabChange(index)}
                />
              ))}
            </div>

            {/* FAQ Items */}
            <div className="divide-y divide-gray-200">
              {faqData.tabs[activeTab].questions.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
