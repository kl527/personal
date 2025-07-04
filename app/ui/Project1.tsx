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
          className="font-normal md:text-[20px] text-sm tracking-[0] leading-[normal] mb-8 text-[rgb(0,112,137)] underline hover:text-black transition-all duration-300"
        >
          Case Study
        </Link>
      </div>
    </div>
  );
};
