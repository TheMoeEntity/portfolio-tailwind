"use client";
import Parallax from "@/Helpers/hooks/parallax";
import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { useSetIntersections } from "@/Helpers/hooks";
import Icon from "../Icons";

const About = () => {
  const startYear = 2017;
  const paragraph = useRef<HTMLParagraphElement>(null);
  const experience = new Date().getFullYear() - startYear;
  const { scrollYProgress } = useScroll({
    target: paragraph,
    offset: ["start 0.9", "start 0.25"],
  });
  const aboutRef = useRef<HTMLDivElement>(null);
  const { introRef } = useSetIntersections("about");
  return (
    <Parallax offset={80}>
      <div
        ref={aboutRef}
        id="about"
        className=" px-5 py-10 mt-10 flex flex-col gap-y-10"
      >
        <div ref={introRef}>
          <span className="px-5 items-center text-sm w-fit flex gap-2 py-2 border-[1px] rounded-full text-white border-[#9999]">
            <span className="flex items-center justify-center">
              <Icon name="bx-user" size="17px" />
            </span>
            <span className="flex items-center justify-center">
              ABOUT ME
            </span>
          </span>
        </div>
        <span>
          <h1 className="text-[36px] md:text-[45px] font-semibold text-white">
            Every great project begins with a{" "}
            <span className="text-[#0053cc]">clear vision</span>
          </h1>
        </span>
        <span>
          <span className="h-[100vh]"></span>
          <motion.p
            style={{ opacity: scrollYProgress }}
            ref={paragraph}
            className="w-full md:w-[80%] mb-8 leading-10 text-sm text-white"
          >
            Since starting my journey as a freelance web developer nearly{" "}
            {experience} years ago ({startYear}), I&#39;ve engaged in remote
            collaborations with agencies, consulted for startups, and teamed up
            with talented individuals to craft digital solutions for various
            business needs. I thrive on challenges, driven by curiosity, and
            constantly honing my skills to tackle each coding problem with
            precision and creativity.
          </motion.p>
          <span className="w-[100vh]"></span>
          <p className="w-full md:w-[80%] mb-8 leading-10 text-sm">
            I believe great websites and apps are like art—blending
            functionality and beauty to leave users spellbound. So, wield your
            virtual sword and join me in pushing boundaries and creating digital
            wonders. Welcome to my portfolio, where possibilities are limitless.
            Let&#39;s make magic together! ✨
          </p>
        </span>
      </div>
    </Parallax>
  );
};

export default About;
