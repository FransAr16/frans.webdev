import React from "react";
import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/ui/MainHeader";
import WorkHero from "./components/WorkHero";
import WorkProject from "./components/WorkProject";
import Footer from "./components/Footer/Footer";

export default function Work() {
  return (
    <MainLayout>
      <MainHeader />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative ">
          <WorkHero />
          <WorkProject />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
