import ServiceContentSection from "../../components/ServiceContentSection";
import { debtCollectionData } from "../../data/serviceData";

export default function DebtCollectionPage() {
  return (
    <ServiceContentSection
      serviceName="Debt Collection Services"
      data={debtCollectionData}
    />
  );
}
