import Image from 'next/image';
import Link from 'next/link';
import useInViewPort from '../hooks/useInViewPort';
import { useRef } from "react";

export const Project3 = (): JSX.Element => {
  const ref1 = useRef<HTMLSpanElement>(null);

  const isInViewport1 = useInViewPort(ref1);
    return (
      <div className="w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-8">
        <div className="w-full md:w-[100%]" >
          <Image src="/p3.jpg" alt="Truscoop Project" width={800} height={400} />
        </div>
        <div className="md:w-[500px]">
          <div className="font-normal md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
            2023 | Design
          </div>
          <div className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
            Truscoop
          </div>
          <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[1.6]">
          Best Overall at the Cornell Appdev Hackathon. <span className="font-normal"><em ref={ref1} className={`highlightKey  ${isInViewport1 ? 'shown' : ''}`}>News app</em> that predicts political orientation of articles.  </span>
          </p>
          <Link
          href="/"
          className="font-normal md:text-[20px] text-sm tracking-[0] leading-[normal] mb-8 text-[#747474] underline transition-all duration-300"
        >
          Coming Soon
        </Link>
        </div>
      </div>
    );
  };