import ServiceContentSection from "../../components/ServiceContentSection";
import {
  emailSupportData,
  emailMarketingFAQData,
  emailSupportCTAData,
} from "../../data/serviceData";

export default function EmailSupportPage() {
  return (
    <ServiceContentSection
      serviceName="Email Marketing Solutions"
      data={emailSupportData}
      faqData={emailMarketingFAQData}
      ctaData={emailSupportCTAData}
    />
  );
}
