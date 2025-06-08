"use client";
import Image from "next/image";
import React, { useRef } from "react";
import useInViewPort from "../../hooks/useInViewPort";

export default function About() {
  const ref1 = useRef<HTMLSpanElement>(null);

  const isInViewport1 = useInViewPort(ref1);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center lg:items-center md:justify-center">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            className="rounded-full shadow-lg w-[150px] h-[150px] md:w-[190px] md:h-[190px]"
            width={200}
            height={200}
            alt="profile photo"
          />
        </div>
        <div>
          <p className="mb-3 md:mb-5 font-bold text-black text-[32px] tracking-[0] leading-[35px]">
            Hi, I&lsquo;m Daniel!
          </p>
          <p className=" font-normal text-black text-[32px] tracking-[0] leading-[40px]">
            I&lsquo;m a Senior at{" "}
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
              Interactive Technologies, Data Science, and User Experience
            </em>
          </p>
        </div>
      </div>
      <div className="mt-7 md:w-[646px] w-full lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-black mb-7 md:mb-8" />
    </div>
  );
}
