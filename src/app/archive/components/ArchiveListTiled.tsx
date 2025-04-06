import React from "react";
import Link from "next/link";
import BorderLineBottom from "@/components/ui/BorderLineBottom";
import TextTitleMedium from "@/components/ui/TextTitleMedium";
import TextTitleSmall from "@/components/ui/TextTitleSmall";

interface WorkListTiledProps {
  index: number;
  link: string;
  title: string;
  category: string;
  location: string;
  published: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}

export default function ArchiveListTiled({
  index,
  link,
  title,
  category,
  location,
  published,
  setModal,
}: WorkListTiledProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className="flex w-full h-full items-center group outline-none cursor-pointer"
    >
      {/* title */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full relative"
      >
        <BorderLineBottom />
        <div className="w-full grid grid-cols-12 items-center lg:py-[1.6rem] xl:py-[2rem] work-list-container group">
          <div className="col-span-5 group-hover:text-foreground/30">
            <div className="group-hover:-translate-x-[1rem] 2xl:group-hover:-translate-x-[1.8rem] transition-all duration-400 ease-out">
              <TextTitleMedium text={title} />
            </div>
          </div>
          <div className="col-span-3 group-hover:text-foreground/30">
            <div className="group-hover:translate-x-[1rem] 2xl:group-hover:translate-x-[1.7rem] transition-all duration-400 ease-out">
              <TextTitleSmall text={location} />
            </div>
          </div>
          <div className="col-span-2 group-hover:text-foreground/30">
            <div className="group-hover:translate-x-[1rem] 2xl:group-hover:translate-x-[1.7rem] transition-all duration-400 ease-out">
              <TextTitleSmall text={category} />
            </div>
          </div>
          <div className="col-span-2 group-hover:text-foreground/30 flex items-center justify-end">
            <div className="group-hover:translate-x-[1rem] 2xl:group-hover:translate-x-[1.7rem] transition-all duration-400 ease-out">
              <TextTitleSmall text={published} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
