"use client";

import { useState, useEffect } from "react";
import HomeHeader from "@/components/ui/HomeHeader";
import Hero from "@/components/homepage/Hero";
import Intro from "@/components/homepage/Intro";
import Approach from "@/components/homepage/Approach";
import RecentWork from "@/components/homepage/RecentWork";
import About from "@/components/homepage/About";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set timeout untuk menampilkan content bottom setelah 4 detik
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => clearTimeout(timer); // Bersihkan timeout saat komponen di-unmount
  }, []);

  return (
    <>
      <HomeHeader />
      <main className="relative w-full h-full z-20">
        <Hero />
        {/* Content bottom hanya muncul jika showContent bernilai true */}
        {showContent && (
          <div className="relative bg-background">
            <Intro />
            <Approach />
            <RecentWork />
            <About />
            <Footer />
          </div>
        )}
      </main>
    </>
  );
}
