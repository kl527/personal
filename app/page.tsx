import React, { useRef } from 'react';
import { Left } from "./ui/Left";
import { Header } from "./ui/Header";
import { Project1 } from "./ui/Project1";
import { Project2 } from "./ui/Project2";
import { Project3 } from "./ui/Project3";
import Footer from './ui/Footer';

export default function Home() {
  return (
    <main className="md:flex w-[70%] pl-[12px] ml-auto mr-auto flex-row place-content-center mt-9 md:mt-[40px]">
      <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex ">
        <Left />
      </div>
      <div>
        <Header />
        <div className='mb-3 md:mb-7'>
        <Project1 />
        <Project2 />
        <Project3 />
        </div>
        <div className="md:w-[646px] w-full lg:w-[800px] lg:h-[5px] md:h-[4px] h-[3px] bg-black" />
      <Footer />
      </div>
    </main>
  );
}
