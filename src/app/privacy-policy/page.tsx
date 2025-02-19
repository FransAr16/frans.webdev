import React from "react";
import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/ui/MainHeader";
import Footer from "@/components/Footer/Footer";
import PrivacyHero from "./components/PrivacyHero";
import PrivacyContent from "./components/PrivacyContent";

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <MainHeader />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          <PrivacyHero />
          <PrivacyContent />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
