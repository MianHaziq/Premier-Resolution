import ServiceContentSection from "../../components/ServiceContentSection";
import {
  liveChatSupportData,
  liveChatFAQData,
  liveChatCTAData,
} from "../../data/serviceData";

export default function LiveChatSupportPage() {
  return (
    <ServiceContentSection
      serviceName="Live Chat & Customer Support"
      data={liveChatSupportData}
      faqData={liveChatFAQData}
      ctaData={liveChatCTAData}
    />
  );
}
