import React from "react";
import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/ui/MainHeader";
import Footer from "@/components/Footer/Footer";
import ArchiveHero from "./components/ArchiveHero";
import ArchiveProject from "./components/ArchiveProject";

export default function Archive() {
  return (
      <MainLayout>
        <MainHeader />
        <main className="relative overflow-hidden w-full h-full">
          <div className="w-full h-full relative ">
            <ArchiveHero />
            <ArchiveProject />
            <Footer />
          </div>
        </main>
      </MainLayout>
  );
}
