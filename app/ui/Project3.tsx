import Image from 'next/image';

export const Project3 = (): JSX.Element => {
    return (
      <div className="w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-5">
        <div className="w-full md:w-[100%]" >
          <Image src="/p3.jpg" alt="Truscoop Project" width={800} height={400} />
        </div>
        <div className="md:w-[500px]">
          <div className="font-normal text-[#747474] md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
            Design & Management
          </div>
          <div className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
            Truscoop
          </div>
          <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
            <span className="font-normal">News app that predicts political orientation of articles.</span>
          </p>
          {/* <button className="md:w-[155px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-black mb-8 flex w-[116px] h-9 items-center gap-2.5 pl-[9px] pr-[15px] py-[3px] left-0 border-4 border-solid border-black">
            <div className="text-center w-fit mr-[-7.00px] md:text-[20px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
              Coming Soon..
            </div>
          </button> */}
        </div>
      </div>
    );
  };