import { PageWrapper } from "@/components/layout";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";

export const metadata = {
  title: "Services",
  description:
    "Discover our comprehensive range of services including JAMstack websites, eCommerce solutions, UI/UX design, and Progressive Web Apps.",
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesPageContent />
    </PageWrapper>
  );
}

