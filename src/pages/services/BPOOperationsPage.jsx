import ServiceContentSection from "../../components/ServiceContentSection";
import { bpoOperationsData } from "../../data/serviceData";

export default function BPOOperationsPage() {
  return (
    <ServiceContentSection
      serviceName="BPO Operations"
      data={bpoOperationsData}
    />
  );
}
