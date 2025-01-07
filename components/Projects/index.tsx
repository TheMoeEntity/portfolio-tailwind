"use client";
import Image from "next/image";
import React from "react";
import zstinger from "../../public/images/zstinger.png";
import dove from "../../public/images/dovehospital.png";
import nosrati from "../../public/images/nosrati.png";
import farzad from "../../public/images/farzad2.png";
import pepnops from "../../public/images/PEPNOPS1.png";
import rcp from "../../public/images/rcp.png";
import greencal from "../../public/images/greencal-updated.png";

import { useSetIntersections } from "@/Helpers/hooks";
import Link from "next/link";

const Projects = () => {
  const { introRef } = useSetIntersections("portfolio");
  return (
    <div
      ref={introRef}
      id="portfolio"
      className=" px-5 py-10 mt-10 flex flex-col gap-y-10"
    >
      <span className="px-5 items-center text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]">
        <i className="fas fa-brief-case"></i>
        <span>PORTFOLIO</span>
      </span>
      <span>
        <h1 className="text-[36px] md:text-[45px] font-semibold text-white">
          Featured <span className="text-[#0053cc]">Projects</span>
        </h1>
      </span>
      <div className="mt-5 flex flex-col gap-20 md:px-3">
        <div className="flex flex-col gap-y-7">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
            <Image
              src={greencal}
              alt="Project Image for PEPNOPS inc"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
            />
          </div>
          <a
            href="https://greencalfoundation.com"
            target="_blank"
            className="text-2xl text-white hover:underline underline-offset-4"
          >
            Greencal Foundation
          </a>
        </div>
        {/* <div className="flex flex-col gap-y-7">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
            <Image
              src={rcp}
              alt="Project Image for PEPNOPS inc"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
            />
          </div>
          <a
            href="https://rcp.rechargecardsprinting.com"
            target="_blank"
            className="text-2xl text-white hover:underline underline-offset-4"
          >
            Multi-tenant Recharge Card Printing Portal (SaaS)
          </a>
        </div> */}
        <div className="flex flex-col gap-y-7">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
            <Image
              src={pepnops}
              alt="Project Image for PEPNOPS inc"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
            />
          </div>
          <a
            href="https://pepnops.com"
            target="_blank"
            className="text-2xl text-white hover:underline underline-offset-4"
          >
            PEPNOPS Inc
          </a>
        </div>
        <div className="flex flex-col gap-y-7">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
            <Image
              src={farzad}
              alt="Spinning text"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
            />
          </div>
          <a
            className="text-2xl text-white hover:underline underline-offset-4"
            href="https://onedivinesingularity.com"
            target="_blank"
          >
            {"One Divine Singularity - Farzad's Blog"}
          </a>
        </div>
        <div className="flex flex-col gap-y-7">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
            <Image
              src={zstinger}
              alt="Spinning text"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
            />
          </div>
          <div className="flex justify-between">
            <a
              href="https://zstinger.com"
              target="_blank"
              className="text-2xl text-white hover:underline underline-offset-4"
            >
              ZStinger Inspections - Patent pending
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-7">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
            <Image
              src={dove}
              alt="Spinning text"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
            />
          </div>
          <a
            href="https://dovehospital.com"
            target="_blank"
            className="text-2xl text-white hover:underline underline-offset-4"
          >
            Dove Hospital
          </a>
        </div>
        <div className="flex flex-col gap-y-7">
          <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1f1f1f8f] z-10"></div>
            <Image
              src={nosrati}
              alt="Spinning text"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto rounded-xl xl:rounded-3xl"
            />
          </div>
          <div className=" w-fit">
            <a
              href="https://nosratilawgroup.com"
              target="_blank"
              className="text-2xl text-white hover:underline underline-offset-4"
            >
              Nosrati Law Group
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
