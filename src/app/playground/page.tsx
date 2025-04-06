import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/ui/MainHeader";
import React from "react";
import PlaygroundHero from "./components/PlaygroundHero";
import PlaygroundContent from "./components/PlaygroundContent";
import Footer from "./components/Footer/Footer";

export default function Playground() {
  return (
    <MainLayout>
      <MainHeader />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          {/* container */}
          <PlaygroundHero />
          <PlaygroundContent />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
