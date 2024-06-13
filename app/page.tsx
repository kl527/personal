import useInViewPort from "./hooks/useInViewPort";
import React, { useRef } from 'react';

export const Left = (): JSX.Element => {
  return (
    <div>
      <button className="group md:border-[6px] mb-[158px] md:mb-[165px] transition-colors duration-300 ease-in-out hover:bg-black flex w-[45px] md:w-[60px] md:h-[86px] h-16 items-center justify-center border-4 border-solid border-black">
        <p className="w-fit font-normal text-sm md:text-[20px] tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
          menu
        </p>
      </button>
      <div className="font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
        Projects
      </div>
    </div>
  );
};
export const Header = (): JSX.Element => {
  return (
    <div className="w-[237px] md:w-[646px] mb-5 md:mb-9">
      <div className="mb-2 md:mb-5 text-melo-blue font-bold text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
        Kyung Sub Lee (Daniel)
      </div>
      <p className="mb-7 md:mb-12 font-normal text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
        I <b>design and code</b> products for people with <b>disabilities</b>.
      </p>
      <div className="md:w-[646px] w-[237px] md:h-[5px] h-[4px] bg-black" />
    </div>
  );
};

export const Project1 = (): JSX.Element => {
  return (
    <div className="w-[237px] md:w-[646px] md:flex md:gap-5 md:mb-5">
      <div className="w-[237px] md:w-[100%]" >
        <img src="/p1.jpg" alt="" />
      </div>
      <div className="md:w-[500px]">
        <div className="font-normal text-[#747474] md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
          <b className="font-bold">Startup</b> | Design & Management
        </div>
        <div className="font-bold mb-2 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
          MELO TOMORROW
        </div>
        <p className="font-normal mb-3 text-black md:text-[20px] text-base tracking-[0] leading-[normal] ">
          <span className="font-normal ">Tactile sensitive clothing project for people with hypersensitivity.</span>
        </p>
        <button className="md:w-[155px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-black mb-8 flex w-[116px] h-9 items-center gap-2.5 pl-[9px] pr-[15px] py-[3px] left-0 border-4 border-solid border-black">
          <div className="text-center w-fit mr-[-7.00px] md:text-[20px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
            Case Study →
          </div>
        </button>
      </div>
    </div>
  );
};

export const Project2 = (): JSX.Element => {
  return (
    <div className="w-[237px] md:w-[646px] md:flex md:gap-5 md:mb-5">
      <div className="w-[237px] md:w-[100%]" >
        <img src="/p2.jpg" alt="" />
      </div>
      <div className="md:w-[500px]">
        <div className="font-normal text-[#747474] md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
          Research & Design
        </div>
        <div className="font-bold mb-1.5 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
          AI Journal
        </div>
        <p className="font-normal mb-3 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
          <span className="font-normal">Digital journal that customizes journal entries through collected text and media.</span>
        </p>
        <button className="md:w-[155px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-black mb-8 flex w-[116px] h-9 items-center gap-2.5 pl-[9px] pr-[15px] py-[3px] left-0 border-4 border-solid border-black">
          <div className="text-center w-fit mr-[-7.00px] md:text-[20px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
            Case Study →
          </div>
        </button>
      </div>
    </div>
  );
};

export const Project3 = (): JSX.Element => {
  return (
    <div className="w-[237px] md:w-[646px] md:flex md:gap-5 md:mb-5">
      <div className="w-[237px] md:w-[100%]" >
        <img src="/p3.jpg" alt="" />
      </div>
      <div className="md:w-[500px]">
        <div className="font-normal text-[#747474] md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
          Design & Management
        </div>
        <div className="font-bold mb-1.5 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
          Truscoop
        </div>
        <p className="font-normal mb-3 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
          <span className="font-normal">News app that predicts political orientation of articles</span>
        </p>
        <button className="md:w-[155px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-black mb-8 flex w-[116px] h-9 items-center gap-2.5 pl-[9px] pr-[15px] py-[3px] left-0 border-4 border-solid border-black">
          <div className="text-center w-fit mr-[-7.00px] md:text-[20px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
            Case Study →
          </div>
        </button>
      </div>
    </div>
  );
};

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
