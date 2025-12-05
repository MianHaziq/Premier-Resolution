import ServiceContentSection from "../../components/ServiceContentSection";
import { customerServicesData } from "../../data/serviceData";

export default function CustomerServicesPage() {
  return (
    <ServiceContentSection
      serviceName="Call Center & Business Solutions"
      data={customerServicesData}
    />
  );
}
