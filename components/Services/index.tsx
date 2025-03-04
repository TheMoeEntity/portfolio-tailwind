"use client";
import { useScrollReveal, useSetIntersections } from "@/Helpers/hooks";
import React from "react";
import Icon from "../Icons";

const Services = () => {
  const { elementsRef } = useScrollReveal(true);
  const { introRef } = useSetIntersections("services");
  return (
    <div ref={introRef}>
      <div
        id="services"
        className=" px-5 py-10 mt-10 flex flex-col gap-y-10 tranlateUp"
        ref={(el) => {
          if (el) elementsRef.current.push(el);
        }}
      >
        <div
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
          className="translateUp mt-10"
        >
          <span className="px-5 items-center text-sm w-fit flex gap-2 py-2 border-[1px] rounded-full text-white border-[#9999]">
            <span className="flex items-center justify-center">
              <Icon name="bx-code-block" size="17px" />
            </span>
            <span className="flex items-center justify-center">SERVICES</span>
          </span>
        </div>
        <div
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
          className="translateUp"
        >
          <h1 className="text-[36px] md:text-[45px] font-semibold text-white">
            My <span className="text-[#0053cc]">Specializations</span>
          </h1>
        </div>

        <div
          className="flex flex-col gap-y-4 translateUp"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <div className="w-full p-10 rounded-2xl border-[#565656] border-[1px]">
            <div className="flex justify-between items-center">
              <span className="text-white text-2xl">
                WEB DESIGN & DEVELOPMENT
              </span>
              <span className="flex items-center justify-center">
                <Icon name="bx-code-block" color="#0053cc" size="25px" />
              </span>
            </div>
            <p className="text-sm w-[80%] py-5">
              I architect and develop digital solutions with innovative
              concepts, leveraging tools like Nextjs & TypeScript.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col gap-y-4 translateUp"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <div className="w-full p-10 rounded-2xl border-[#565656] border-[1px]">
            <div className="flex justify-between items-center">
              <span className="text-white text-2xl">MOBILE DEVELOPMENT</span>
              <span className="flex items-center justify-center">
                <Icon name="bx-mobile" color="#0053cc" size="25px" />
              </span>
            </div>
            <p className="text-sm w-[80%] py-5">
              I engineer mobile applications that run on iOS with cutting-edge
              features using React Native & Swift.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
