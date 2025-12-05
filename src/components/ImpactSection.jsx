// Impact cards data
const impactCards = [
  {
    id: 1,
    image: "/heroImage.jpg",
    title: "Accelerated Hiring for Critical Projects",
    description:
      "We provide rapid staffing solutions to help you scale during urgent or high-demand periods. Our recruitment process ensures you get trained, reliable talent fast.",
  },
  {
    id: 2,
    image: "/heroImage.jpg",
    title: "Enterprise Ready Workforce Solutions",
    description:
      "Get access to skilled professionals ready to support high-volume and enterprise operations. Our workforce integrates smoothly into your existing systems for long-term success.",
  },
  {
    id: 3,
    image: "/heroImage.jpg",
    title: "Enabled a Debt-Collection services",
    description:
      "Premiere Resolution empowers businesses with complete, technology-backed debt recovery support. Our proven framework improves recovery rates while reducing operational stress.",
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-[#FAFAFB] py-16 md:py-20 lg:py-24 mt-10">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Title */}
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] 2xl:text-[52px] font-bold text-[#1a1a1a] mb-4 md:mb-6">
            <span className="relative inline-block">
              Driving
              <span className="absolute left-0 right-0 bottom-1 md:bottom-2 h-[3px] md:h-[4px] bg-[#0B9444]" />
            </span>{" "}
            Measurable Impact
          </h2>

          {/* Subtitle */}
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#6B7280] max-w-[800px] mx-auto leading-relaxed">
            Built for companies that need more than promises—we deliver proven strategies, skilled agents, and measurable outcomes that truly impact your bottom line.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {impactCards.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="mb-5 md:mb-6 overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[180px] md:h-[200px] lg:h-[220px] 2xl:h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#1a1a1a] leading-tight mb-3 md:mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#6B7280] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
