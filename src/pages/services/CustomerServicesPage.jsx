import ServiceContentSection from "../../components/ServiceContentSection";
import {
  customerServicesData,
  callCenterFAQData,
  customerServicesCTAData,
} from "../../data/serviceData";

export default function CustomerServicesPage() {
  return (
    <ServiceContentSection
      serviceName="Call Center & Business Solutions"
      data={customerServicesData}
      faqData={callCenterFAQData}
      ctaData={customerServicesCTAData}
    />
  );
}
