import React from "react";
import TermsHeading from "./TermsHeading";

export default function TermsHero() {
  return (
    <div className="h-[30vh] lg:h-[60vh] w-full relative overflow-hidden">
      <div className="main-container w-full h-full flex items-end">
        <TermsHeading />
      </div>
    </div>
  );
}
