import ServiceContentSection from "../../components/ServiceContentSection";
import {
  salesServicesData,
  salesServicesFAQData,
  salesServicesCTAData,
} from "../../data/serviceData";

export default function SalesServicesPage() {
  return (
    <ServiceContentSection
      serviceName="Sales Services"
      data={salesServicesData}
      faqData={salesServicesFAQData}
      ctaData={salesServicesCTAData}
    />
  );
}
