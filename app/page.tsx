"use client";
import React, { useState } from "react";
import { Left } from "./ui/Left";
import { Header } from "./ui/Header";
import { Project1 } from "./ui/Project1";
import { Project2 } from "./ui/Project2";
import { Project3 } from "./ui/Project3";
import { Project4 } from "./ui/Project4";
import Footer from "./ui/Footer";
import { LeftBar } from "./ui/LeftBar";
import Books from "./ui/Books";
import About from "./ui/About";
import { Website } from "./ui/Website";

export default function Home() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  return (
    <main className="md:flex w-[70%] pl-[12px] ml-auto mr-auto flex-row place-content-center mt-9 md:mt-[40px]">
      <LeftBar
        toggleSidebar={toggleSidebar}
        isSidebarHidden={isSidebarHidden}
      />
      <div className={`homepage ${
        isSidebarHidden ? "homepage--isHidden" : ""
      } mr-8 md:mr-[80px] lg:mr-[150px] flex`} >
        <Left toggleSidebar={toggleSidebar} />
      </div>
      <div className={`homepage ${
        isSidebarHidden ? "homepage--isHidden" : ""
      } `}>
        <Header />
        <div className="mb-7 md:mb-12">
          <Project4 />
          <Project1 />
          <Project2 />
          <Project3 />
          <Website />
        </div>
        {/* <Books /> */}
        <About />
        <div className="md:w-[646px] w-full lg:w-[800px] lg:h-[5px] md:h-[4px] h-[3px] bg-black" />
        <Footer />
      </div>
    </main>
  );
}
