import ServiceContentSection from "../../components/ServiceContentSection";
import { businessManagementData } from "../../data/serviceData";

export default function BusinessManagementPage() {
  return (
    <ServiceContentSection
      serviceName="Business Management Support"
      data={businessManagementData}
    />
  );
}
