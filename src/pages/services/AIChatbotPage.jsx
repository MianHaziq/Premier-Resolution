import ServiceContentSection from "../../components/ServiceContentSection";
import { aiChatbotData } from "../../data/serviceData";

export default function AIChatbotPage() {
  return (
    <ServiceContentSection
      serviceName="AI Chatbot Automation 24/7"
      data={aiChatbotData}
    />
  );
}
