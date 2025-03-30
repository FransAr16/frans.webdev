"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { navbarSlideUp } from "@/data/animation";
import HomeNavLink from "./HomeNavLink";
import BtnContact from "./BtnContact";

const navItems = [
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Playground",
    href: "/playground",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      {/* Desktop */}
      <div
        onMouseLeave={() => {
          setSelectedIndicator(pathname);
        }}
        className="relative"
      >
        <ul className="hidden lg:flex justify-between items-center text-background">
          <div className="flex lg:gap-[.8rem] xl:gap-[1rem] 2xl:gap-[1.5rem]">
            {navItems.map((item, index) => (
              <HomeNavLink
                key={index}
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
                animate={navbarSlideUp}
                classNameLink="font-medium text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.3rem]"
                classNameHref=" w-full h-[1px] bg-background absolute left-0 bottom-0"
              />
            ))}
          </div>
          <div className="flex">
            <BtnContact
              href="/contact"
              animationDelay={2.8}
              text="Start a project"
              className="font-medium 2xl:font-semibold text-[1.1rem] sm:text-[1.2rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-[1.28rem]"
            />
          </div>
        </ul>
      </div>
    </>
  );
}
