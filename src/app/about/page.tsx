import React from "react";
import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/ui/MainHeader";
import AboutHero from "./components/AboutHero";
import AboutProfile from "./components/AboutProfile";
import AboutIntro from "./components/AboutIntro";
import AboutSkills from "./components/AboutSkills";
import AboutMission from "./components/AboutMission";
import Footer from "./components/Footer/Footer";

export default function About() {
  return (
    <MainLayout>
      <MainHeader />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          <AboutHero />
          <AboutProfile />
          <AboutIntro />
          <AboutSkills />
          <AboutMission />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
