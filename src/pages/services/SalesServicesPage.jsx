import ServiceContentSection from "../../components/ServiceContentSection";
import { salesServicesData } from "../../data/serviceData";

export default function SalesServicesPage() {
  return (
    <ServiceContentSection
      serviceName="Sales Services"
      data={salesServicesData}
    />
  );
}
