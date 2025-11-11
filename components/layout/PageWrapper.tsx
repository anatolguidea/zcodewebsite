"use client";

import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import {
  Aurora,
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
    <div className="min-h-screen flex flex-col relative">
      {/* Aurora Background - Fixed and fills entire viewport */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#ff668c", "#b19eef", "#5227ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      
      <PageTransition>
        <main className="flex-1 pt-0 md:pt-20 relative z-0 content-fade-top">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
