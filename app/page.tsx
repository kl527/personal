import useInViewPort from "./hooks/useInViewPort";
import React, { useRef } from 'react';
import { Left } from "./ui/Left";
import { Header } from "./ui/Header";
import { Project1 } from "./ui/Project1";
import { Project2 } from "./ui/Project2";
import { Project3 } from "./ui/Project3";

export default function Home() {
  return (
    <main className="flex flex-row place-content-center mt-9 md:mt-[40px]">
      <div className="mr-8 md:mr-[160px] flex ">
        <Left />
      </div>
      <div>
        <Header />
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    </main>
  );
}
