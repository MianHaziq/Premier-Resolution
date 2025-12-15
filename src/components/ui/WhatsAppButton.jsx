export default function WhatsAppButton() {
  const phoneNumber = "923000058830";
  const message = "Hello! I'm interested in learning more about premier Resolution's services. Can you help me?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
  
      <img src="/whatsappIcon.png" alt="WhatsApp Icon" className="w-12 h-12 md:w-11 md:h-11" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-white text-[#1a1a1a] text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}