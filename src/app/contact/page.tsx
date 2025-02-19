import React from "react";
import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/ui/MainHeader";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import Footer from "@/components/Footer/Footer";

export default function Contact() {
  return (
    <MainLayout>
      <MainHeader />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative ">
          <ContactHero />
          <ContactForm />
          <Footer />
        </div>
      </main>
    </MainLayout>
  );
}
