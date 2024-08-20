"use client";
import Image from "next/image";
import React, { useRef } from "react";
import useInViewPort from "../../hooks/useInViewPort";

export default function About() {
  const ref1 = useRef<HTMLSpanElement>(null);

  const isInViewport1 = useInViewPort(ref1);
  return (
    <div className="">
      <Image
        src="/about/about1.jpeg"
        className="rounded-xl shadow-lg w-[250px] mb-5"
        width={300}
        height={300}
        alt="header photo of me"
      />
      <p className=" mb-3 md:mb-5 font-bold text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
        Hi, I'm Daniel!
      </p>
      <p className="mb-5 md:mb-8 font-normal text-black text-[32px] md:text-[48px] tracking-[0] leading-[40px] md:leading-[55px]">
        I'm a junior at{" "}
        <em
          ref={ref1}
          className={`highlightKey  ${isInViewport1 ? "shown" : ""}`}
        >
          Cornell University
        </em>{" "}
        studying information science with concentrations in{" "}
        <em
          ref={ref1}
          className={`highlightKey  ${isInViewport1 ? "shown" : ""}`}
        >
          user experience and data science.
        </em>
      </p>
      <div className="md:w-[646px] w-full lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-black mb-7 md:mb-8" />
    </div>
  );
}
