import ServiceContentSection from "../../components/ServiceContentSection";
import {
  businessManagementData,
  businessManagementFAQData,
  businessManagementCTAData,
} from "../../data/serviceData";

export default function BusinessManagementPage() {
  return (
    <ServiceContentSection
      serviceName="Business Management Support"
      data={businessManagementData}
      faqData={businessManagementFAQData}
      ctaData={businessManagementCTAData}
    />
  );
}
