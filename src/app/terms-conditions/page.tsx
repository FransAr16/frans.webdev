import React from "react";
import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/ui/MainHeader";
import Footer from "@/components/Footer/Footer";
import TermsHero from "./components/TermsHero";
import TermsContent from "./components/TermsContent";

export default function TermsConditions() {
  return (
    <MainLayout>
      <MainHeader />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          <TermsHero />
          <TermsContent />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
