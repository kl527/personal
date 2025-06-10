import Link from "next/link";
import Image from "next/image";
import useInViewPort from '../hooks/useInViewPort';
import { useRef } from "react";

export const Project1 = (): JSX.Element => {
  const ref1 = useRef<HTMLSpanElement>(null);

  const isInViewport1 = useInViewPort(ref1);
  return (
    <div className="w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-8">
      <Link href="/melotomorrow" className="w-full md:w-[100%]">
        <Image
          src="/p1.jpg"
          alt="Melo Tomorrow Project"
          width={800}
          height={400}
        />
      </Link>
      <div className="md:w-[500px]">
        <div className="font-normal md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
          2023 | Startup
        </div>
        <div className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
          Melo Tomorrow
        </div>
        <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[1.6] ">
          <span className="font-normal ">
          <em ref={ref1} className={`highlightKey  ${isInViewport1 ? 'shown' : ''}`}>Tactile sensitive clothing project</em> for people with hypersensitivity.
          </span>
        </p>
        <Link
          href="/melotomorrow"
          className="md:w-[141px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-[#007089] mb-8 flex w-[116px] h-9 items-center gap-2.5 pl-[9px] pr-[15px] py-[3px] left-0 border-4 border-solid border-[#007089]"
        >
          <div className="text-center w-fit mr-[-7.00px] md:text-[18px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white text-[#007089]">
            Case Study →
          </div>
        </Link>
      </div>
    </div>
  );
};
