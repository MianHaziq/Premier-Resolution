import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

// Services data
const services = [
  {
    id: 1,
    image: "/heroImage.jpg",
    title: "Debt Collection Services",
    description:
      "Recover payments quickly and professionally with compliant, customer-friendly recovery team.",
    link: "/services/debt-collection",
  },
  {
    id: 2,
    image: "/heroImage.jpg",
    title: "Email Marketing Solutions",
    description:
      "Engage customers with targeted campaigns designed to boost conversions and brand loyalty.",
    link: "/services/email-support",
  },
  {
    id: 3,
    image: "/heroImage.jpg",
    title: "AI Chatbot Automation 24/7",
    description:
      "Provide instant, 24/7 responses with intelligent chatbots that reduce workload and improve support.",
    link: "/services/ai-chatbot",
  },
  {
    id: 4,
    image: "/heroImage.jpg",
    title: "Business Management Support",
    description:
      "Streamline operations, improve efficiency, and keep your business running smoothly and best.",
    link: "/services/business-management",
  },
  {
    id: 5,
    image: "/heroImage.jpg",
    title: "Call Center & Business Solutions",
    description:
      "Professional inbound and outbound support tailored to enhance customer experience.",
    link: "/services/customer-services",
  },
  {
    id: 6,
    image: "/heroImage.jpg",
    title: "Live Chat & Customer Support",
    description:
      "Provide real-time assistance when customers need it most. Keep satisfaction support team.",
    link: "/services/live-chat-support",
  },
];

// Real Stories data
const realStories = [
  {
    id: 1,
    image: "/heroImage.jpg",
    quote:
      "Working with Premiere Resolutions has transformed our customer engagement. Their team is highly responsive and always professional.",
    author: "Emily Jack",
  },
  {
    id: 2,
    image: "/heroImage.jpg",
    quote:
      "Their debt recovery support helped us improve payment collection without damaging client relationships. Highly recommended.",
    author: "Jake Lawson",
  },
  {
    id: 3,
    image: "/heroImage.jpg",
    quote:
      "Professional, consistent, and reliable. Their call center team has become an extension of our own company.",
    author: "Nancy Nelon",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-[#0B9444] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] 2xl:text-[64px] font-bold text-white text-center">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-[#FAFAFB] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="mb-5 md:mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[180px] md:h-[200px] lg:h-[220px] 2xl:h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#1a1a1a] leading-tight mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] text-[#6B7280] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* View Details Link */}
                <Link
                  to={service.link}
                  className="inline-block text-[14px] md:text-[15px] text-[#0B9444] font-medium underline underline-offset-4 hover:text-[#098039] transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
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
                    <Play
                      size={20}
                      className="text-[#1a1a1a] fill-[#1a1a1a] ml-0.5"
                    />
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
      {/* <section className="bg-[#0B9444] py-16 md:py-20">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 text-center">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-[15px] md:text-[16px] text-white/80 max-w-[600px] mx-auto mb-8">
            Contact us to discuss how we can tailor our services to meet your
            specific business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0B9444] px-8 py-4 rounded-xl font-semibold text-[16px] hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}
    </main>
  );
}
