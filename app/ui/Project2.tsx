import Image from 'next/image';
import Link from 'next/link';

export const Project2 = (): JSX.Element => {
    return (
      <div className="w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-8">
        <div className="w-full md:w-[100%]" >
          <Image src="/p2.jpg" alt="AI Journal Project" width={800} height={400} />
        </div>
        <div className="md:w-[500px]">
          <div className="font-normal md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
            2023 | Design
          </div>
          <div className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
            AI Journal
          </div>
          <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
            <span className="font-normal">Digital journal that customizes journal entries through collected text and media.</span>
          </p>
          <Link
          href="/"
          className="font-normal md:text-[20px] text-sm tracking-[0] leading-[normal] mb-8 text-[#747474] underline hover:text-[#747474] transition-all duration-300"
        >
          Coming Soon
        </Link>
        </div>
      </div>
    );
  };