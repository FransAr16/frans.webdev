import MainLayout from "@/components/MainLayout";
import MainHeader from "@/components/ui/MainHeader";
import React from "react";

export default function Playground() {
  return (
    <MainLayout>
      <MainHeader />
      <main className="relative overflow-hidden w-full h-full">
        <div className="w-full h-full relative">
          {/* container */}
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="w-full h-screen flex justify-center items-center">
              <h1 className="text-[6vw] lg:text-[6rem] xl:text-[8rem] font-bold uppercase">column 1</h1>
            </div>
            <div className="w-full h-screen flex justify-center items-center">
              <h1 className="text-[6vw] lg:text-[6rem] xl:text-[8rem] font-bold uppercase">column 2</h1>
            </div>
            <div className="w-full h-screen flex justify-center items-center">
              <h1 className="text-[6vw] lg:text-[6rem] xl:text-[8rem] font-bold uppercase">column 3</h1>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
