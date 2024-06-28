import Link from 'next/link';
export const MTleft = (): JSX.Element => {
    return (
      <div>
        <Link href="/" className="group md:border-[6px] mb-[20px] md:mb-[145px] transition-colors duration-300 ease-in-out hover:bg-black flex w-[45px] md:w-[60px] md:h-[86px] h-16 items-center justify-center border-4 border-solid border-black">
          <p className="w-fit font-normal text-sm md:text-[20px] tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
            back
          </p>
        </Link>
        <div className="font-normal hidden md:inline-block text-lg md:text-[21px] tracking-[0] leading-[normal]">
          Intro
        </div>
        <div className="font-normal hidden md:inline-block mt-[1240px] md:mt-[940px] lg:mt-[835px] text-lg md:text-[21px] tracking-[0] leading-[normal]">
          Research
        </div>
        <div className="font-normal hidden md:inline-block mt-[5455px] md:mt-[3610px] lg:mt-[3870px] text-lg md:text-[21px] tracking-[0] leading-[normal]">
          Design
        </div>
      </div>
      
    );
  };