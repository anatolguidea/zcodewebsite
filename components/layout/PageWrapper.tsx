import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow, PageTransition } from "@/components/common";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorGlow />
      <Navbar />
      <PageTransition>
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
