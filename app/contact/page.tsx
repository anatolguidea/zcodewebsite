import { PageWrapper } from "@/components/layout";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us. We'd love to hear from you and discuss how we can help your business grow.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactPageContent />
    </PageWrapper>
  );
}

