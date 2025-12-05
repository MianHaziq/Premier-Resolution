import ServiceContentSection from "../../components/ServiceContentSection";
import { emailSupportData } from "../../data/serviceData";

export default function EmailSupportPage() {
  return (
    <ServiceContentSection
      serviceName="Email Marketing Solutions"
      data={emailSupportData}
    />
  );
}
