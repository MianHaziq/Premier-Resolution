import { useEffect } from "react";
import FAQSection from "./FAQSection";
import ServiceCTASection from "./ServiceCTASection";
import { defaultFAQData } from "../data/serviceData";

/**
 * ServiceContentSection - Flexible content section for service pages
 *
 * Data Structure:
 * {
 *   sections: [
 *     {
 *       type: "main" | "sub",
 *       heading: "Section Title",
 *       intro?: "Intro paragraph",
 *       paragraphs?: [
 *         { text: "Regular text with **bold text** inline", bold?: boolean }
 *       ],
 *       bullets?: [
 *         { label: "Label", text: "Description text with **bold** inline" }
 *       ],
 *       subSections?: [
 *         {
 *           heading: "Sub-heading",
 *           paragraphs?: [...],
 *           bullets?: [...],
 *           introText?: "Text before bullets"
 *         }
 *       ]
 *     }
 *   ]
 * }
 */

// Helper function to render text with **bold** markers
const renderTextWithBold = (text) => {
  if (!text) return null;

  // Split by **text** pattern
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      // Remove ** and render as bold
      return (
        <span key={index} className="font-semibold text-[#1a1a1a]">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

// Main Section Heading Component (Green with underline)
const MainHeading = ({ children }) => (
  <div className="mb-5 md:mb-6">
    <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#0B9444] leading-tight">
      {children}
    </h2>
    <div className="w-16 sm:w-20 h-[3px] bg-[#0B9444] mt-2" />
  </div>
);

// Sub Heading Component (Bold, black)
const SubHeading = ({ children }) => (
  <h3 className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#1a1a1a] mb-2 md:mb-3">
    {children}
  </h3>
);

// Paragraph Component
const Paragraph = ({ children, bold = false, className = "" }) => (
  <p
    className={`text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] md:leading-[1.8] mb-4 md:mb-5 ${
      bold ? "font-semibold text-[#1a1a1a]" : "text-[#6B7280]"
    } ${className}`}
  >
    {typeof children === "string" ? renderTextWithBold(children) : children}
  </p>
);

// Bullet List Component
const BulletList = ({ items, className = "" }) => (
  <ul className={`space-y-2 sm:space-y-3 mb-5 md:mb-6 ${className}`}>
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2 sm:gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2 shrink-0" />
        <span className="text-[13px] sm:text-[14px] md:text-[15px] text-[#6B7280] leading-[1.7]">
          {item.label && (
            <span className="font-semibold text-[#1a1a1a]">{item.label}: </span>
          )}
          {renderTextWithBold(item.text)}
        </span>
      </li>
    ))}
  </ul>
);

// Sub-Section Component
const SubSection = ({ data }) => (
  <div className="mb-6 md:mb-8">
    {data.heading && <SubHeading>{data.heading}</SubHeading>}

    {data.paragraphs?.map((para, index) => (
      <Paragraph key={index} bold={para.bold}>
        {para.text}
      </Paragraph>
    ))}

    {data.introText && (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#6B7280] mb-3 md:mb-4">
        {renderTextWithBold(data.introText)}
      </p>
    )}

    {data.bullets && <BulletList items={data.bullets} />}
  </div>
);

// Main Section Component
const Section = ({ data }) => (
  <div className="mb-10 md:mb-12 lg:mb-14">
    {data.type === "main" && <MainHeading>{data.heading}</MainHeading>}
    {data.type === "sub" && <SubHeading>{data.heading}</SubHeading>}

    {data.intro && (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#6B7280] mb-5 md:mb-6 leading-[1.7]">
        {renderTextWithBold(data.intro)}
      </p>
    )}

    {data.paragraphs?.map((para, index) => (
      <Paragraph key={index} bold={para.bold}>
        {para.text}
      </Paragraph>
    ))}

    {data.bullets && <BulletList items={data.bullets} />}

    {data.subSections?.map((subSection, index) => (
      <SubSection key={index} data={subSection} />
    ))}
  </div>
);

export default function ServiceContentSection({
  data,
  serviceName,
  faqData,
  ctaData,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use provided FAQ data or default
  const faq = faqData || defaultFAQData;

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Header */}
      <section className="bg-[#0B9444] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] 2xl:text-[64px] font-bold text-white text-center">
            {serviceName}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="max-w-[900px]">
            {data.sections.map((section, index) => (
              <Section key={index} data={section} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTASection {...ctaData} />

      {/* FAQ Section */}
      <FAQSection data={faq} />
    </main>
  );
}
