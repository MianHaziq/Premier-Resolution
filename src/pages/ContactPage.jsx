import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from "lucide-react";
import { useToast } from "../components/ui/Toast";
import PageHeader from "../components/ui/PageHeader";

// Contact Info Card Component
const ContactInfoCard = ({ icon: Icon, title, content, href, delay }) => (
  <div
    className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0B9444]/30"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#0B9444] to-[#0d7a3a] flex items-center justify-center text-white shadow-lg shadow-[#0B9444]/25 group-hover:scale-110 transition-transform duration-300">
        <Icon size={22} strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1a1a1a] mb-1.5">
          {title}
        </h3>
        {href ? (
          <a
            href={href}
            className="text-[14px] sm:text-[15px] text-[#6B7280] hover:text-[#0B9444] transition-colors duration-200 break-words"
          >
            {content}
          </a>
        ) : (
          <p className="text-[14px] sm:text-[15px] text-[#6B7280] leading-relaxed">
            {content}
          </p>
        )}
      </div>
    </div>
  </div>
);

// Input Field Component
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  required = true,
  error,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-[14px] sm:text-[15px] font-semibold text-[#1a1a1a]">
      {label} {required && <span className="text-[#0B9444]">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none">
          <Icon size={18} />
        </div>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full bg-white border-2 rounded-xl py-3.5 sm:py-4 text-[14px] sm:text-[15px]
          ${Icon ? "pl-12 pr-4" : "px-4"}
          text-[#1a1a1a] placeholder:text-[#9CA3AF]
          focus:outline-none focus:border-[#0B9444] focus:ring-4 focus:ring-[#0B9444]/10
          transition-all duration-200
          ${error ? "border-red-500" : "border-gray-200 hover:border-gray-300"}
        `}
      />
    </div>
    {error && <p className="text-[13px] text-red-500">{error}</p>}
  </div>
);

// Textarea Field Component
const TextareaField = ({
  label,
  name,
  placeholder,
  icon: Icon,
  value,
  onChange,
  required = true,
  rows = 5,
  error,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-[14px] sm:text-[15px] font-semibold text-[#1a1a1a]">
      {label} {required && <span className="text-[#0B9444]">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-4 text-[#9CA3AF] pointer-events-none">
          <Icon size={18} />
        </div>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`
          w-full bg-white border-2 rounded-xl py-3.5 sm:py-4 text-[14px] sm:text-[15px]
          ${Icon ? "pl-12 pr-4" : "px-4"}
          text-[#1a1a1a] placeholder:text-[#9CA3AF]
          focus:outline-none focus:border-[#0B9444] focus:ring-4 focus:ring-[#0B9444]/10
          transition-all duration-200 resize-none
          ${error ? "border-red-500" : "border-gray-200 hover:border-gray-300"}
        `}
      />
    </div>
    {error && <p className="text-[13px] text-red-500">{error}</p>}
  </div>
);

// Select Field Component
const SelectField = ({
  label,
  name,
  options,
  value,
  onChange,
  required = true,
  error,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-[14px] sm:text-[15px] font-semibold text-[#1a1a1a]">
      {label} {required && <span className="text-[#0B9444]">*</span>}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`
        w-full bg-white border-2 rounded-xl py-3.5 sm:py-4 px-4 text-[14px] sm:text-[15px]
        text-[#1a1a1a] appearance-none cursor-pointer
        focus:outline-none focus:border-[#0B9444] focus:ring-4 focus:ring-[#0B9444]/10
        transition-all duration-200
        ${error ? "border-red-500" : "border-gray-200 hover:border-gray-300"}
        bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]
        bg-[length:20px_20px] bg-[right_12px_center] bg-no-repeat
      `}
    >
      <option value="">Select a service</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-[13px] text-red-500">{error}</p>}
  </div>
);

// Service Options
const serviceOptions = [
  { value: "debt-collection", label: "Debt Collection Services" },
  { value: "customer-services", label: "Customer Services" },
  { value: "sales-services", label: "Sales Services" },
  { value: "email-support", label: "Email Support" },
  { value: "live-chat-support", label: "Live Chat Support" },
  { value: "bpo-operations", label: "BPO Operations" },
  { value: "ai-chatbot", label: "AI Chatbot Automation" },
  { value: "business-management", label: "Business Management Support" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - Replace with EmailJS integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      // Error
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <PageHeader
        badge="Get In Touch"
        title="Contact Us"
        subtitle="Have a question or need assistance? We're here to help. Reach out to us and let's start a conversation."
        variant="large"
      />

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ContactInfoCard
              icon={Mail}
              title="Email Us"
              content="info@Premierresolutions.net"
              href="mailto:info@Premierresolutions.net"
              delay={0}
            />
            <ContactInfoCard
              icon={Phone}
              title="Call Us"
              content="+92-42-111-04-05-06"
              href="tel:+924211104-05-06"
              delay={100}
            />
            <ContactInfoCard
              icon={MapPin}
              title="Visit Us"
              content="30-32 Knowsley Street, Unit 2, Little Giants Mall, Manchester, M8 8HQ"
              delay={200}
            />
            <ContactInfoCard
              icon={Clock}
              title="Working Hours"
              content="Monday - Friday: 9:00 AM - 6:00 PM"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
            {/* Form Section */}
            <div className="order-2 lg:order-1">
              {/* Section Header */}
              <div className="mb-8 sm:mb-10">
                <div className="w-12 sm:w-14 h-[4px] bg-[#0B9444] mb-4 sm:mb-5" />
                <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#1a1a1a] leading-tight mb-3 sm:mb-4">
                  Send Us a Message
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#6B7280] leading-relaxed max-w-[480px]">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <InputField
                    label="Full Name"
                    name="name"
                    placeholder="John Doe"
                    icon={User}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    icon={Mail}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                    icon={Phone}
                    value={formData.phone}
                    onChange={handleChange}
                    required={false}
                  />
                  <SelectField
                    label="Service Interested In"
                    name="service"
                    options={serviceOptions}
                    value={formData.service}
                    onChange={handleChange}
                  />
                </div>

                <TextareaField
                  label="Your Message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  icon={MessageSquare}
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full sm:w-auto inline-flex items-center justify-center gap-3
                    bg-gradient-to-r from-[#0B9444] to-[#0a8840]
                    text-white text-[15px] sm:text-[16px] font-semibold
                    px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl
                    shadow-lg shadow-[#0B9444]/30
                    hover:shadow-xl hover:shadow-[#0B9444]/40
                    hover:from-[#0a8840] hover:to-[#087735]
                    focus:outline-none focus:ring-4 focus:ring-[#0B9444]/20
                    transition-all duration-300
                    disabled:opacity-70 disabled:cursor-not-allowed
                    cursor-pointer
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Image Section */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-24">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.5837279870644!2d-2.2309!3d53.5015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c13a9a9e65%3A0x123456789!2sKnowsley%20Street%2C%20Manchester!5e0!3m2!1sen!2suk!4v1699999999999!5m2!1sen!2suk"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="w-full"
                  />
                </div>

                {/* Quick Info Card */}
                <div className="bg-gradient-to-br from-[#0B9444] to-[#087735] rounded-2xl p-6 sm:p-8 text-white">
                  <h3 className="text-[20px] sm:text-[22px] font-bold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mb-6">
                    Our team of experts is ready to help you achieve your business goals. Schedule a free consultation today!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+924211104-05-06"
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#0B9444] px-5 py-3 rounded-lg font-semibold text-[14px] hover:bg-gray-100 transition-colors"
                    >
                      <Phone size={16} />
                      Call Now
                    </a>
                    <a
                      href="mailto:info@Premierresolutions.net"
                      className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-5 py-3 rounded-lg font-semibold text-[14px] hover:bg-white/30 transition-colors"
                    >
                      <Mail size={16} />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#1a1a1a]">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 text-center">
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-white mb-4 sm:mb-6">
            Let's Build Something{" "}
            <span className="text-[#0B9444]">Great Together</span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#9CA3AF] max-w-[600px] mx-auto mb-8">
            Partner with Premiere Resolutions and experience the difference that dedicated, professional service can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#0B9444] text-white px-8 py-4 rounded-xl font-semibold text-[15px] hover:bg-[#0a8840] transition-colors"
            >
              Explore Our Services
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#0B9444] text-[#0B9444] px-8 py-4 rounded-xl font-semibold text-[15px] hover:bg-[#0B9444] hover:text-white transition-colors"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
