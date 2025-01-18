"use client";
import { useScrollReveal, useSetIntersections } from "@/Helpers/hooks";
import Icon from "../Icons";
import Image from "next/image";

const Skills = () => {
  const { elementsRef } = useScrollReveal(false);
  const { introRef } = useSetIntersections("skills");
  return (
    <div
      ref={introRef}
      id="skills"
      className=" px-5 py-10 mt-10 flex flex-col gap-y-10"
    >
      <span className="px-5 text-sm w-fit flex gap-4 py-2 border-[1px] rounded-full text-white border-[#9999]">
        <span className="flex items-center justify-center">
          <Icon name="bx-terminal" />
        </span>
        <span>MY SKILLS</span>
      </span>
      <span>
        <h1 className="text-[36px] md:text-[45px] font-semibold text-white">
          My <span className="text-[#0053cc]">Advantages</span>
        </h1>
      </span>

      <div className="flex text-white flex-row gap-6 gap-y-10 md:gap-5 flex-wrap justify-center md:justify-start w-full">
        <div
          className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full translateDown"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <i className="fa-brands fa-html5 text-3xl text-[60px]"></i>
          <span>
            <Image
              alt="HTML Logo"
              src={
                "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
              }
              width={80}
              height={80}
              className="object-cover w-full h-auto"
            />
          </span>
          <span className="text-sm">HTML</span>
        </div>
        <div
          className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full translateUp"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <i className="fa-brands fa-html5 text-3xl text-[60px]"></i>
          <span>
            <Image
              alt="HTML Logo"
              src={
                "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"
              }
              width={80}
              height={80}
              className="object-cover w-full h-auto"
            />
          </span>
          <span className="text-sm">CSS</span>
        </div>
        <div
          className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full translateRight"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <i className="fa-brands fa-html5 text-3xl text-[60px]"></i>
          <span>
            <Image
              alt="JS Logo"
              src={
                "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
              }
              width={80}
              height={80}
              className="object-cover w-full h-auto"
            />
          </span>
          <span className="text-sm">TypeScript</span>
        </div>
        <div
          className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full translateDown"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <i className="fa-brands fa-html5 text-3xl text-[60px]"></i>
          <span>
            <Image
              alt="JS Logo"
              src={"https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"}
              width={80}
              height={80}
              className="object-cover w-full h-auto"
            />
          </span>
          <span className="text-sm">NEXT.js</span>
        </div>

        <div
          className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full translateDown"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <i className="fa-brands fa-html5 text-3xl text-[60px]"></i>
          <span>
            <Image
              alt="HTML Logo"
              src={"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"}
              width={80}
              height={80}
              className="object-cover w-full h-auto"
            />
          </span>
          <span className="text-sm">REACT</span>
        </div>
        <div
          className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full translateUp"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <i className="fa-brands fa-html5 text-3xl text-[60px]"></i>
          <span>
            <Image
              alt="Swift Logo"
              src={"https://www.vectorlogo.zone/logos/swift/swift-icon.svg"}
              width={80}
              height={80}
              className="object-cover w-full h-auto"
            />
          </span>
          <span className="text-sm">Swift</span>
        </div>
        <div
          className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full translateUp"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <i className="fa-brands fa-html5 text-3xl text-[60px]"></i>
          <span>
            <Image
              alt="Swift Logo"
              src={"https://www.vectorlogo.zone/logos/php/php-icon.svg"}
              width={80}
              height={80}
              className="object-cover w-full h-auto"
            />
          </span>
          <span className="text-sm">PHP</span>
        </div>
        <div className="w-[155px] md:w-40  gap-y-7 flex flex-col items-center justify-center p-10 h-60 border-[#565656] border-[1px] rounded-full">
          <i className="fa-brands fa-html5 text-3xl text-[60px]"></i>
          <span>
            <Image
              alt="Nodejs Logo"
              src={"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"}
              width={80}
              height={80}
              className="object-cover w-full h-auto"
            />
          </span>
          <span className="text-sm">Nodejs</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
