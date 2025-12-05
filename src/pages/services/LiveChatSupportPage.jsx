import ServiceContentSection from "../../components/ServiceContentSection";
import { liveChatSupportData } from "../../data/serviceData";

export default function LiveChatSupportPage() {
  return (
    <ServiceContentSection
      serviceName="Live Chat & Customer Support"
      data={liveChatSupportData}
    />
  );
}
