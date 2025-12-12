import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  TrendingUp,
  Coffee,
  Award,
  ChevronRight,
  Search,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";

// Job Listings Data
const jobListings = [
  {
    id: 1,
    title: "Customer Support Specialist",
    department: "Customer Service",
    location: "Manchester, UK",
    type: "Full-time",
    experience: "1-2 years",
    description:
      "Join our customer support team to deliver exceptional service and build lasting relationships with our clients.",
  },
  {
    id: 2,
    title: "Debt Collection Agent",
    department: "Collections",
    location: "Manchester, UK",
    type: "Full-time",
    experience: "2-3 years",
    description:
      "Help businesses recover outstanding payments while maintaining professional and compliant communication.",
  },
  {
    id: 3,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "Drive revenue growth by identifying and qualifying leads for our expanding client base.",
  },
  {
    id: 4,
    title: "Team Lead - Chat Support",
    department: "Customer Service",
    location: "Manchester, UK",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Lead and mentor a team of chat support specialists to deliver real-time customer assistance.",
  },
  {
    id: 5,
    title: "Quality Assurance Analyst",
    department: "Operations",
    location: "Manchester, UK",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Monitor and evaluate customer interactions to ensure service excellence and compliance.",
  },
  {
    id: 6,
    title: "Email Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2-3 years",
    description:
      "Create and execute email campaigns that engage customers and drive conversions.",
  },
];

// Benefits Data
const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement paths with regular training and development opportunities.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible schedules and remote work options to maintain a healthy balance.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance bonuses and awards to celebrate your achievements.",
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with team events and inclusive workplace.",
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    description: "Sponsored certifications and continuous learning opportunities.",
  },
];

// Job Card Component
const JobCard = ({ job }) => (
  <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0B9444]/30">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
      <div>
        <span className="inline-block px-3 py-1 bg-[#0B9444]/10 text-[#0B9444] text-[12px] sm:text-[13px] font-medium rounded-full mb-3">
          {job.department}
        </span>
        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#1a1a1a] group-hover:text-[#0B9444] transition-colors">
          {job.title}
        </h3>
      </div>
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F3F4F6] text-[#6B7280] text-[13px] font-medium rounded-lg whitespace-nowrap">
        <Clock size={14} />
        {job.type}
      </span>
    </div>

    <p className="text-[14px] sm:text-[15px] text-[#6B7280] leading-relaxed mb-5">
      {job.description}
    </p>

    <div className="flex flex-wrap items-center gap-4 mb-6">
      <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] text-[#6B7280]">
        <MapPin size={16} className="text-[#0B9444]" />
        {job.location}
      </span>
      <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] text-[#6B7280]">
        <Briefcase size={16} className="text-[#0B9444]" />
        {job.experience}
      </span>
    </div>

    <Link
      to="/contact"
      className="inline-flex items-center gap-2 text-[#0B9444] font-semibold text-[14px] sm:text-[15px] group-hover:gap-3 transition-all"
    >
      Apply Now
      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

// Benefit Card Component
const BenefitCard = ({ benefit, index }) => {
  const Icon = benefit.icon;
  return (
    <div
      className="text-center p-6 sm:p-8"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0B9444]/10 flex items-center justify-center mx-auto mb-4 sm:mb-5">
        <Icon size={28} className="text-[#0B9444]" />
      </div>
      <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1a1a1a] mb-2 sm:mb-3">
        {benefit.title}
      </h3>
      <p className="text-[13px] sm:text-[14px] text-[#6B7280] leading-relaxed">
        {benefit.description}
      </p>
    </div>
  );
};

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique departments
  const departments = ["all", ...new Set(jobListings.map((job) => job.department))];

  // Filter jobs
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <PageHeader
        badge="Join Our Team"
        title="Careers"
        subtitle="Build your career with us. We're looking for talented individuals who are passionate about delivering exceptional service."
        variant="large"
      />

      {/* Stats Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "100+", label: "Team Members" },
              { number: "10+", label: "Projects" },
              { number: "98%", label: "Employee Satisfaction" },
              { number: "20+", label: "Open Positions" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#0B9444] mb-1 sm:mb-2">
                  {stat.number}
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-[#F9FAFB] py-16 sm:py-20 md:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-[#0B9444]/10 text-[#0B9444] text-[13px] sm:text-[14px] font-medium rounded-full mb-4">
              Benefits & Perks
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#1a1a1a] mb-4">
              Why Join Premiere Resolutions?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6B7280] max-w-[600px] mx-auto">
              We believe in taking care of our team. Here's what you can expect when you join us.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-2 bg-[#0B9444]/10 text-[#0B9444] text-[13px] sm:text-[14px] font-medium rounded-full mb-4">
              Open Positions
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#1a1a1a] mb-4">
              Current Opportunities
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6B7280] max-w-[600px] mx-auto">
              Find your perfect role and take the next step in your career journey.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border-2 border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-[14px] sm:text-[15px] text-[#1a1a1a] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0B9444] focus:ring-4 focus:ring-[#0B9444]/10 transition-all"
              />
            </div>

            {/* Department Filter */}
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-white border-2 border-gray-200 rounded-xl py-3.5 px-4 text-[14px] sm:text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#0B9444] focus:ring-4 focus:ring-[#0B9444]/10 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_12px_center] bg-no-repeat pr-10 min-w-[180px]"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "all" ? "All Departments" : dept}
                </option>
              ))}
            </select>
          </div>

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[16px] text-[#6B7280]">
                No positions found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0B9444] to-[#087735] py-16 sm:py-20">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 text-center">
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold text-white mb-4 sm:mb-5">
            Don't See the Right Role?
          </h2>
          <p className="text-[15px] sm:text-[17px] text-white/90 max-w-[550px] mx-auto mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0B9444] px-8 py-4 rounded-xl font-semibold text-[15px] sm:text-[16px] hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit Your Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
