import ServiceContentSection from "../../components/ServiceContentSection";
import {
  debtCollectionData,
  debtCollectionFAQData,
  debtCollectionCTAData,
} from "../../data/serviceData";

export default function DebtCollectionPage() {
  return (
    <ServiceContentSection
      serviceName="Debt Collection Services"
      data={debtCollectionData}
      faqData={debtCollectionFAQData}
      ctaData={debtCollectionCTAData}
    />
  );
}
