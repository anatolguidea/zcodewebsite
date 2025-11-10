"use client";

import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import {
  CursorGlow,
  PageTransition,
  ScrollProgress,
} from "@/components/common";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  // Enable smooth scrolling for anchor links
  useSmoothScroll(80); // 80px offset for fixed navbar

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <PageTransition>
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}
