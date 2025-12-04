import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Headphones, Banknote, MessageCircle, Mail, Play } from "lucide-react";

// Real Stories data
const realStories = [
  {
    id: 1,
    image: "/heroImage.jpg",
    quote: "Working with Premiere Resolutions has transformed our customer engagement. Their team is highly responsive and always professional.",
    author: "Emily Jack",
  },
  {
    id: 2,
    image: "/heroImage.jpg",
    quote: "Their debt recovery support helped us improve payment collection without damaging client relationships. Highly recommended.",
    author: "Jake Lawson",
  },
  {
    id: 3,
    image: "/heroImage.jpg",
    quote: "Professional, consistent, and reliable. Their call center team has become an extension of our own company.",
    author: "Nancy Nelon",
  },
];

// Services data
const services = [
  {
    icon: Headphones,
    title: "Call Center\nSolutions",
    description:
      "Our professional agents provide responsive, high-quality support across inbound, outbound, and blended campaigns. We maintain industry-leading.",
    link: "/services/customer-services",
  },
  {
    icon: Banknote,
    title: "Debt Collection\nServices",
    description:
      "We use a diplomatic and compliant approach to recover outstanding payments while maintaining customer relationships and brand reputation.",
    link: "/services/debt-collection",
  },
  {
    icon: MessageCircle,
    title: "Chat Support\nServices",
    description:
      "Our live chat specialists handle real-time customer queries with professionalism and empathy, ensuring customers receive instant assistance without delays.",
    link: "/services/live-chat-support",
  },
  {
    icon: Mail,
    title: "Email Marketing\nSolutions",
    description:
      "Our team designs email funnels that engage, nurture, and convert—helping businesses build stronger relationships and achieve measurable ROI.",
    link: "/services/email-support",
  },
];

export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef(null);

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

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-[#0B9444] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] 2xl:text-[64px] font-bold text-white text-center">
            About us
          </h1>
        </div>
      </section>

      {/* Office Image + Overlapping Cards Section */}
      <section className="relative">
        {/* Office Image */}
        <div className="w-full">
          <img
            src="/ourOffice.jpg"
            alt="Our Office"
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] 2xl:h-[600px] object-cover"
          />
        </div>

        {/* Overlapping Cards Container */}
        <div
          ref={cardsRef}
          className="relative -mt-20 md:-mt-24 lg:-mt-32 2xl:-mt-36 pb-16 md:pb-20 lg:pb-24"
        >
          <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
            {/* Cards Grid */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
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
                          <Icon size={28} className="text-[#0B9444]" />
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

      {/* Who We Are Section */}
      <section className="bg-[#FAFAFB] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <p className="text-[16px] text-[#6B7280] mb-2">
                <span className="italic text-[#0B9444] relative">
                  Who
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#0B9444]" />
                </span>
                <span className="italic"> We Are</span>
              </p>
              <h2 className="text-[32px] md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-bold text-[#1a1a1a] leading-tight mb-6">
                Your Trusted Business Partner
              </h2>
              <p className="text-[15px] md:text-[16px] 2xl:text-[17px] text-[#6B7280] leading-relaxed mb-6">
                Premier Resolutions is a leading provider of comprehensive business process outsourcing solutions. With years of experience and a dedicated team of professionals, we help businesses streamline their operations and achieve exceptional results.
              </p>
              <p className="text-[15px] md:text-[16px] 2xl:text-[17px] text-[#6B7280] leading-relaxed mb-8">
                Our commitment to excellence, combined with cutting-edge technology and industry best practices, enables us to deliver customized solutions that drive growth and enhance customer satisfaction.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-[32px] md:text-[40px] font-bold text-[#0B9444]">8+</p>
                  <p className="text-[14px] text-[#6B7280]">Years Experience</p>
                </div>
                <div>
                  <p className="text-[32px] md:text-[40px] font-bold text-[#0B9444]">420+</p>
                  <p className="text-[14px] text-[#6B7280]">Happy Clients</p>
                </div>
                <div>
                  <p className="text-[32px] md:text-[40px] font-bold text-[#0B9444]">98%</p>
                  <p className="text-[14px] text-[#6B7280]">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <img
                src="/about-team.jpg"
                alt="Our Team"
                className="w-full h-[350px] md:h-[420px] lg:h-[480px] object-cover rounded-2xl shadow-xl"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0B9444]/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#0B9444]/5 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
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
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left - Image */}
              <div className="lg:w-[40%] 2xl:w-[38%]">
                <img
                  src="/heroImage.jpg"
                  alt="Hassan Sarfaraz"
                  className="w-full h-[300px] md:h-[400px] lg:h-full object-cover"
                />
              </div>

              {/* Right - Content */}
              <div className="lg:w-[60%] 2xl:w-[62%] p-6 md:p-8 lg:p-10 2xl:p-12 flex flex-col justify-center">
                {/* Meet Label */}
                <p className="text-[14px] md:text-[15px] text-[#0B9444] font-medium mb-2">
                  Meet
                </p>

                {/* Name */}
                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] 2xl:text-[44px] font-bold text-[#1a1a1a] mb-2">
                  Hassan Sarfaraz
                </h2>

                {/* Tagline */}
                <p className="text-[14px] md:text-[15px] text-[#0B9444] font-medium mb-6">
                  Premiere Resolution – Driving Success
                </p>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] 2xl:text-[16px] text-[#6B7280] leading-relaxed mb-8">
                  I'm Hassan Sarfraz, CEO of Premiere Resolution, and I'm here to guide your business on the path to operational excellence and growth. With years of experience in BPO services, customer experience, debt collection, sales support, and digital engagement, I bring a strategic perspective to help organizations streamline processes and achieve measurable results. Whether you are looking to scale your customer support, enhance operational efficiency, or drive revenue through sales and back-office solutions, Premiere Resolution is your trusted partner to make it happen.
                </p>

                {/* Email CTA */}
                <div className="inline-block">
                  <a
                    href="mailto:Hassansarfaraz@premierresolutions.net"
                    className="inline-block bg-[#0B9444] rounded-xl px-6 py-4 hover:bg-[#098039] transition-colors"
                  >
                    <p className="text-[12px] md:text-[13px] text-white/80 mb-1">
                      Let's connect through email
                    </p>
                    <p className="text-[14px] md:text-[15px] text-white font-medium">
                      Hassansarfaraz@premierresolutions.net
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Green Accent Bar */}
            <div className="h-3 md:h-4 bg-[#0B9444]" />
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="bg-[#FAFAFB] py-16 md:py-20 lg:py-24">
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
                {/* Image - Full card */}
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-full h-[480px] md:h-[520px] lg:h-[540px] 2xl:h-[580px] object-cover"
                />

                {/* Play Button - Upper middle */}
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all duration-300">
                    <Play size={20} className="text-[#1a1a1a] fill-[#1a1a1a] ml-0.5" />
                  </button>
                </div>

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

      {/* CTA Section */}
      <section className="bg-[#0B9444] py-16 md:py-20">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 text-center">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-[15px] md:text-[16px] text-white/80 max-w-[600px] mx-auto mb-8">
            Let's discuss how Premier Resolutions can help transform your business operations and drive success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0B9444] px-8 py-4 rounded-xl font-semibold text-[16px] hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
