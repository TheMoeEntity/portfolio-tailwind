"use client";
import React, { CSSProperties, useContext, useEffect } from "react";
import roundText from "../../public/images/round-text.png";
import Image from "next/image";
import useIntersection, {
  useScrollReveal,
  useSetIntersections,
} from "@/Helpers/hooks";
import Icon from "../Icons";

const Intro = () => {
  const imageStyles: CSSProperties = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    filter: "grayscale(100%)",
    backgroundImage: `url('/images/moe-recent.jpeg')`,
  };
  const { elementsRef } = useScrollReveal(false);
  const { introRef } = useSetIntersections("home");
  return (
    <div
      ref={introRef}
      id="intro"
      className=" px-5 py-10 flex flex-col gap-y-10"
    >
      <div className=" text-white top-3 left-5 rounded-[40px] border-[1px] border-[#565656] h-fit px-0 py-8 flex-col gap-9 items-center flex xl:hidden">
        <div className="flex justify-between items-center px-5 w-full">
          <h1 className="font-semibold text-3xl text-white">MOE</h1>
          <div className="flex flex-col gap-1 text-sm text-right">
            <span className="">Web Developer</span>
            <span className="">Fun guy</span>
          </div>
        </div>
        <div
          className="w-[85%] rounded-2xl h-[250px] mx-auto"
          style={{ ...imageStyles }}
        ></div>
        <div className="flex flex-col gap-y-3">
          <span className="text-xl text-center font-semibold">
            mosesnwigberi@gmail.com
          </span>
          <span className="text-xl text-center font-semibold">
            Based in Lagos, Nigeria
          </span>
        </div>
        <div className="text-gray-400 text-center text-sm">
          © {new Date().getFullYear()} MOE. All rights reserved.
        </div>
        <div className="flex justify-center gap-x-5">
          <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400">
            <a href="">
              <span className="flex items-center justify-center">
                <Icon name="bxl-twitter" />
              </span>
            </a>
          </div>
          <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400">
            <a href="">
              <span className="flex items-center justify-center">
                <Icon name="bxl-instagram" />
              </span>
            </a>
          </div>
          <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400">
            <a href="">
              <span className="flex items-center justify-center">
                <Icon name="bxl-whatsapp" />
              </span>
            </a>
          </div>
          <div className="w-10 h-10 rounded-full border-gray-400 border-[1px] flex justify-center items-center text-gray-400">
            <a href="">
              <span className="flex items-center justify-center">
                <Icon name="bxl-github" />
              </span>
            </a>
          </div>
        </div>
        <div className="w-full px-3">
          {" "}
          <a
            href="mailto:moses.nwigberi@ditcosoft.com"
            className="w-full flex items-center justify-center gap-3 md:max-w-[600px] text-center rounded-full px-4 py-4 bg-[#0053CC] text-white"
          >
            <span className="flex items-center justify-center">
              <Icon name="bx-envelope" />
            </span>
            <span>HIRE ME</span>
          </a>
        </div>
      </div>
      <span className="px-5 items-center text-sm w-fit flex gap-2 py-2 border-[1px] rounded-full text-white border-[#9999]">
        <span className="flex items-center justify-center">
          <Icon name="bx-home" size="17px" />
        </span>
        <span className="flex items-center justify-center">INTRODUCTION</span>
      </span>
      <span>
        <h1 className="text-[36px] md:text-[55px] font-semibold text-white">
          Hello! I&#39;m <span className="text-[#0053cc]">MOE</span>, a Software
          Developer.
          {/* <TypeEffect /> */}
        </h1>
      </span>
      <span>
        <p className="text-sm">
          I design and code beautifully simple things and i love what i do.{" "}
          <br />
        </p>
      </span>
      <div className="flex md:justify-end w-full">
        <div className="w-[45%] relative md:w-[15%] lg:w-[20%] h-auto p-3 lg:p-3 border-[1px] border-[#575757] rounded-full md:mr-20">
          <a
            href="/#portfolio"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
          >
            <span className="flex items-center justify-center">
              <Icon name="bx-chevron-down" size="70px" />
            </span>
          </a>
          <Image
            src={roundText}
            alt="Spinning text"
            quality={100}
            sizes={"100vw"}
            className="object-cover w-full h-auto spin"
          />
        </div>
      </div>

      <div className="mt-20 flex gap-x-16">
        <div
          className="flex flex-col gap-y-4 translateUp"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <span className="text-[60px] text-[#0053cc]">7+</span>
          <span>Years in the game.</span>
        </div>
        <div
          className="flex flex-col gap-y-4 translateDown"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <span className="text-[60px] text-[#0053cc]">10+</span>
          <span>Projects completed.</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
