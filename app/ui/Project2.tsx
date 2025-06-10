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
          <Link href="/" className="md:w-[141px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-[#747474] mb-8 flex w-[116px] h-9 items-center gap-2.5 pl-[9px] pr-[15px] py-[3px] left-0 border-4 border-solid border-[#747474]">
            <div className="text-center w-fit mr-[-7.00px] md:text-[18px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white text-[#747474]">
              Coming Soon 
            </div>
          </Link>
        </div>
      </div>
    );
  };