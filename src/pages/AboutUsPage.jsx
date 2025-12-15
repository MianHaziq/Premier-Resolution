import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";

// Real Stories data
const realStories = [
  {
    id: 1,
    youtubeId: "GNZBSZD16cY",
    quote: "Working with Premier Resolutions has transformed our customer engagement. Their team is highly responsive and always professional.",
    author: "Emily Jack",
  },
  {
    id: 2,
    youtubeId: "LnJwH_PZXnM",
    quote: "Their debt recovery support helped us improve payment collection without damaging client relationships. Highly recommended.",
    author: "Jake Lawson",
  },
  {
    id: 3,
    youtubeId: "lXZ5Bo5lafA",
    quote: "Professional, consistent, and reliable. Their call center team has become an extension of our own company.",
    author: "Nancy Nelon",
  },
];

// Services data - first 4 services matching home page
const services = [
  {
    icon: "/debtIcon.png",
    title: "Debt Collection\nServices",
    description:
      "We use a diplomatic and compliant approach to recover outstanding payments while maintaining customer relationships and brand reputation.",
    link: "/services/debt-collection",
  },
  {
    icon: "/emailIconn.png",
    title: "Email Marketing\nSolutions",
    description:
      "Our team designs email funnels that engage, nurture, and convert—helping businesses build stronger relationships and achieve measurable ROI.",
    link: "/services/email-support",
  },
  {
    icon: "/aiChatBotIcon.png",
    title: "AI Chatbot\nAutomation",
    description:
      "Provide instant, 24/7 responses with intelligent chatbots that reduce workload and improve customer support efficiency.",
    link: "/services/ai-chatbot",
  },
  {
    icon: "/bmIcon.png",
    title: "Business Management\nSupport",
    description:
      "Streamline operations, improve efficiency, and keep your business running smoothly with our comprehensive management solutions.",
    link: "/services/business-management",
  },
];

// Stats data
const statsData = [
  { number: 8, label: "Experience years" },
  { number: 50, label: "Clients" },
  { number: 100, label: "Projects done" },
  { number: 11, label: "Awards" },
];

// CountUp component with animation
const CountUpStat = ({ number, label, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = number / steps;

    let currentStep = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(increment * currentStep), number));

        if (currentStep >= steps) {
          clearInterval(interval);
          setCount(number);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, number, delay]);

  return (
    <div className="text-center px-4 py-6 md:py-8">
      {/* Number */}
      <p className="text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-[#1a1a1a] leading-none mb-2 md:mb-3">
        {count}
      </p>
      {/* Label */}
      <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#6B7280] mb-3">
        {label}
      </p>
      {/* Green accent bar */}
      <div className="w-8 h-1 bg-[#0B9444] mx-auto rounded-full" />
    </div>
  );
};

export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for stats section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <PageHeader
        badge="Who We Are"
        title="About Us"
        subtitle="Empowering businesses through reliable communication, efficient operations, and customer-centered solutions."
      />

      {/* Office Image + Overlapping Cards Section */}
      <section className="relative">
        {/* Office Image */}
        <div className="w-full">
          <img
            src="/hall.jpg"
            alt="Our Office"
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] 2xl:h-[600px] object-cover"
          />
        </div>

        {/* Overlapping Cards Container */}
        <div
          ref={cardsRef}
          className="relative -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-32 2xl:-mt-36 pb-16 md:pb-20 lg:pb-24"
        >
          <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
            {/* Cards Grid */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => {
                  const isLast = index === services.length - 1;
                  return (
                    <div
                      key={index}
                      className={`relative text-center px-6 py-10 md:py-12 transition-all duration-700 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      } ${!isLast ? "lg:border-r border-gray-200" : ""}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Icon */}
                      <div className="flex justify-center mb-5">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0B9444]/10 flex items-center justify-center">
                          <img src={service.icon} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[16px] md:text-[18px] 2xl:text-[20px] font-bold text-[#1a1a1a] leading-tight mb-4 whitespace-pre-line">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] md:text-[14px] 2xl:text-[15px] text-[#6B7280] leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* View More Link */}
                      <Link
                        to={service.link}
                        className="inline-block text-[14px] md:text-[15px] text-[#0B9444] font-medium underline underline-offset-4 hover:text-[#098039] transition-colors"
                      >
                        View More
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Support Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24 mt-8 md:mt-12 lg:mt-16">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              {/* Label */}
              <p className="text-[14px] md:text-[15px] text-[#0B9444] font-medium mb-3">
                Sales Support
              </p>

              {/* Main Heading */}
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] 2xl:text-[46px] font-bold text-[#1a1a1a] leading-tight mb-5 md:mb-6">
                Driving Revenue Through Results
              </h2>

              {/* Description Paragraphs */}
              <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#6B7280] leading-relaxed mb-5">
                At Premier Resolution, we help businesses drive revenue through structured, results-oriented sales support. With over 7 years of operational experience, our team specializes in lead generation, outbound campaigns, appointment setting, and follow-ups, ensuring your sales pipeline stays active and productive.
              </p>

              <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#6B7280] leading-relaxed mb-5">
                By combining skilled agents, proven scripts, and real-time reporting, we help you convert prospects into loyal customers while maintaining the highest standards of professionalism and brand representation.
              </p>

              <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#6B7280] leading-relaxed mb-8">
                Our company is registered in the United Kingdom with operational excellence based in Pakistan, allowing us to deliver cost-effective, high-quality solutions without compromising on service. Whether it's B2B or B2C, our sales solutions are designed to accelerate growth, improve efficiency, and deliver measurable results for your business.
              </p>

              {/* UK Address Card */}
              <div className="bg-[#FAFAFB] rounded-xl p-5 md:p-6 border-l-4 border-[#0B9444]">
                <p className="text-[12px] md:text-[13px] text-[#0B9444] font-medium mb-2">
                  UK Registered Address
                </p>
                <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#1a1a1a] leading-relaxed">
                  30-32 Knowsley Street, Unit 2, Little Giants Mall, Manchester, England, M8 8HQ
                </p>
              </div>
            </div>

            {/* Right - Visual Elements */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="bg-[#FAFAFB] rounded-xl p-5 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0B9444]/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h4 className="text-[14px] md:text-[15px] font-bold text-[#1a1a1a] mb-2">Lead Generation</h4>
                <p className="text-[12px] md:text-[13px] text-[#6B7280]">Qualified prospects for your pipeline</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FAFAFB] rounded-xl p-5 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0B9444]/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4 className="text-[14px] md:text-[15px] font-bold text-[#1a1a1a] mb-2">Outbound Campaigns</h4>
                <p className="text-[12px] md:text-[13px] text-[#6B7280]">Strategic outreach that converts</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FAFAFB] rounded-xl p-5 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0B9444]/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h4 className="text-[14px] md:text-[15px] font-bold text-[#1a1a1a] mb-2">Appointment Setting</h4>
                <p className="text-[12px] md:text-[13px] text-[#6B7280]">Scheduled meetings with decision makers</p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#FAFAFB] rounded-xl p-5 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0B9444]/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </div>
                <h4 className="text-[14px] md:text-[15px] font-bold text-[#1a1a1a] mb-2">Follow-ups</h4>
                <p className="text-[12px] md:text-[13px] text-[#6B7280]">Consistent engagement that closes deals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are / Why Choose Us Section */}
      <section className="bg-[#FAFAFB] py-16 md:py-20 lg:py-24 mt-8 md:mt-12 lg:mt-16">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              {/* Who We Are Label */}
              <p className="text-[14px] md:text-[15px] text-[#1a1a1a] mb-3">
                <span className="italic relative">
                  Who
                  <span className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-[#1a1a1a]" />
                </span>
                <span className="italic"> We Are</span>
              </p>

              {/* Main Heading */}
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] 2xl:text-[46px] font-bold text-[#1a1a1a] leading-tight mb-5 md:mb-6">
                Why choose us ?
              </h2>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#6B7280] leading-relaxed mb-8 md:mb-10">
                Our mission is to empower organizations through reliable communication, efficient operations, and customer-centered solutions. We help businesses improve performance through strategic support and professional service delivery.
              </p>

              {/* Checklist Items */}
              <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
                {/* Item 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#0B9444] flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#1a1a1a] font-medium">
                    Our team is highly skilled and trained
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#0B9444] flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#1a1a1a] font-medium">
                    We constantly upgrade our tools and processes
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#0B9444] flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#1a1a1a] font-medium">
                    We maintain strong and respectful customer relationships
                  </p>
                </div>
              </div>

              {/* Bottom Text */}
              <p className="text-[12px] md:text-[13px] text-[#9CA3AF] italic leading-relaxed">
                We have designed a variety of comprehensive solutions to meet needs of our any potential partners.
              </p>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2">
              <img
                src="/meet-room.jpg"
                alt="Our Team"
                className="w-full h-[220px] sm:h-[280px] md:h-[400px] lg:h-[450px] 2xl:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section ref={statsRef} className="bg-white py-14 md:py-18 lg:py-20 mt-8 md:mt-12 lg:mt-16">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {statsData.map((stat, index) => (
              <CountUpStat
                key={index}
                number={stat.number}
                label={stat.label}
                isVisible={statsVisible}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24 mt-8 md:mt-12 lg:mt-16">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-[#FAFAFB] rounded-2xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-full bg-[#0B9444]/10 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-[22px] md:text-[24px] 2xl:text-[28px] font-bold text-[#1a1a1a] mb-4">
                Our Mission
              </h3>
              <p className="text-[14px] md:text-[15px] 2xl:text-[16px] text-[#6B7280] leading-relaxed">
                To deliver exceptional outsourcing solutions that empower businesses to focus on their core competencies while we handle their customer engagement, debt recovery, and operational processes with excellence and integrity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#FAFAFB] rounded-2xl p-8 md:p-10">
              <div className="w-14 h-14 rounded-full bg-[#0B9444]/10 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B9444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-[22px] md:text-[24px] 2xl:text-[28px] font-bold text-[#1a1a1a] mb-4">
                Our Vision
              </h3>
              <p className="text-[14px] md:text-[15px] 2xl:text-[16px] text-[#6B7280] leading-relaxed">
                To be the global leader in business process outsourcing, recognized for our innovation, reliability, and commitment to creating lasting value for our clients, employees, and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet CEO Section */}
      <section className="relative pt-16 md:pt-20 lg:pt-24 mt-8 md:mt-12 lg:mt-16">
        {/* Green Gradient Background - fades from transparent top to solid green bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[320px] md:h-[380px] lg:h-[420px] bg-linear-to-t from-[#0B9444] via-[#0B9444]/70 to-transparent" />

        {/* Content Container - card positioned 65px from bottom */}
        <div className="relative pb-[50px] md:pb-[60px] lg:pb-[65px]">
          <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
            {/* Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left - Image */}
                <div className="lg:w-[38%]">
                  <img
                    src="/hassann.jpg"
                    alt="Hassan Sarfaraz"
                    className="w-full h-[280px] p-5 md:h-[380px] lg:h-full min-h-[400px] lg:min-h-[480px] object-cover"
                  />
                </div>

                {/* Right - Content */}
                <div className="lg:w-[62%] p-6 md:p-8 lg:py-10 lg:px-12 xl:py-12 xl:px-14 flex flex-col justify-center">
                  {/* Meet Label */}
                  <p className="text-[13px] md:text-[14px] text-[#0B9444] font-medium mb-2 md:mb-3">
                    Meet
                  </p>

                  {/* Name */}
                  <h2 className="text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold text-[#1a1a1a] mb-1 md:mb-2">
                    Hassan Sarfaraz
                  </h2>

                  {/* Tagline */}
                  <p className="text-[13px] md:text-[14px] text-[#0B9444] italic mb-5 md:mb-6 lg:mb-8">
                    Premier Resolution – Driving Success
                  </p>

                  {/* Description */}
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#6B7280] leading-[1.75] md:leading-[1.8] mb-6 md:mb-8 lg:mb-10">
                    I'm Hassan Sarfraz, CEO of Premier Resolution, and I'm here to guide your business on the path to operational excellence and growth. With years of experience in BPO services, customer experience, debt collection, sales support, and digital engagement, I bring a strategic perspective to help organizations streamline processes and achieve measurable results. Whether you are looking to scale your customer support, enhance operational efficiency, or drive revenue through sales and back-office solutions, Premier Resolution is your trusted partner to make it happen.
                  </p>

                  {/* Email CTA */}
                  <div>
                    <a
                      href="mailto:Hassansarfaraz@Premierresolutions.net"
                      className="inline-block bg-[#0B9444] rounded-full px-5 md:px-7 py-3 md:py-4 hover:bg-[#098039] transition-colors"
                    >
                      <p className="text-[10px] md:text-[11px] text-white/90 mb-0.5">
                        Let's connect through email
                      </p>
                      <p className="text-[12px] md:text-[13px] lg:text-[14px] text-white font-medium">
                        H.Sarfaraz1@iclode.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Green Accent Bar */}
              <div className="h-2 md:h-[10px] lg:h-3 bg-[#0B9444]" />
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="bg-[#FAFAFB] py-16 md:py-20 lg:py-24 mt-8 md:mt-12 lg:mt-16">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] 2xl:text-[52px] font-bold text-[#1a1a1a] mb-4">
              Real Stories
            </h2>
            <p className="text-[15px] md:text-[16px] 2xl:text-[17px] text-[#6B7280]">
              Real journeys of care, trust, and recovery from our partners
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {realStories.map((story) => (
              <div
                key={story.id}
                className="relative rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* YouTube Video Embed */}
                <iframe
                  src={`https://www.youtube.com/embed/${story.youtubeId}`}
                  title={`${story.author}'s testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[540px] 2xl:h-[580px]"
                />

                {/* White Gradient Fade from bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-linear-to-t from-white via-white/90 to-transparent" />

                {/* Text Content - Overlaid on faded area */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-7">
                  {/* Quote */}
                  <p className="text-[14px] md:text-[15px] 2xl:text-[16px] text-[#1a1a1a] leading-relaxed mb-4">
                    "{story.quote}"
                  </p>

                  {/* Author */}
                  <p className="text-[14px] md:text-[15px] text-[#6B7280]">
                    — {story.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Banner */}
      <section className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden mt-8 md:mt-12 lg:mt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/consultationBg.png"
            alt="Business consultation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Green Gradient Overlay - Left to Right fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B9444] via-[#0B9444]/90 via-[45%] to-transparent" />

        {/* Content */}
        <div className="relative h-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 flex items-center">
          <div className="max-w-[500px] md:max-w-[550px] lg:max-w-[600px]">
            {/* Heading */}
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42px] font-bold text-white leading-tight mb-4 md:mb-5 italic">
              Ready to Take Your Business Operations to the Next Level?
            </h2>

            {/* Description */}
            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white/85 leading-relaxed mb-6 md:mb-8">
              Streamline processes, reduce workload, and scale confidently with our expert customer support and management solutions.
            </p>

            {/* Button */}
            <Link
              to="/contact"
              className="inline-block bg-white text-[#1a1a1a] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-[14px] sm:text-[15px] hover:bg-white/95 transition-all duration-300 shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners Logo Carousel */}
      <section className="bg-white py-8 md:py-10 lg:py-12 overflow-hidden mt-8 md:mt-12 lg:mt-16">
        <div className="relative w-full">
          {/* Marquee Container */}
          <div className="flex w-max animate-marquee">
            {/* First set of logos */}
            <div className="flex items-center gap-16 md:gap-20 lg:gap-24 shrink-0 pr-16 md:pr-20 lg:pr-24">
              <img src="/morgan.png" alt="morgan" className="h-8 md:h-9 lg:h-10 w-auto object-contain" />
              <img src="/amtrak.png" alt="amtrak" className="h-3 md:h-3 lg:h-4 w-auto object-contain" />
              <img src="/accenture.png" alt="accenture" className="h-12 md:h-13 lg:h-15 w-auto object-contain" />
              <img src="/hcl.png" alt="hcl" className="h-12 md:h-13 lg:h-15 w-auto object-contain" />
              <img src="/caliber.png" alt="caliber" className="h-6 md:h-7 lg:h-8 w-auto object-contain" />
              <img src="/wwt.png" alt="wwt" className="h-6 md:h-7 lg:h-8 w-auto object-contain" />
              <img src="/avanade.png" alt="avanade" className="h-6 md:h-7 lg:h-8 w-auto object-contain" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 md:gap-20 lg:gap-24 shrink-0 pr-16 md:pr-20 lg:pr-24">
              <img src="/morgan.png" alt="morgan" className="h-8 md:h-9 lg:h-10 w-auto object-contain" />
              <img src="/amtrak.png" alt="amtrak" className="h-3 md:h-3 lg:h-4 w-auto object-contain" />
              <img src="/accenture.png" alt="accenture" className="h-12 md:h-13 lg:h-15 w-auto object-contain" />
              <img src="/hcl.png" alt="hcl" className="h-12 md:h-13 lg:h-15 w-auto object-contain" />
              <img src="/caliber.png" alt="caliber" className="h-6 md:h-7 lg:h-8 w-auto object-contain" />
              <img src="/wwt.png" alt="wwt" className="h-6 md:h-7 lg:h-8 w-auto object-contain" />
              <img src="/avanade.png" alt="avanade" className="h-6 md:h-7 lg:h-8 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
