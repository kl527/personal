export const Left = (): JSX.Element => {
  return (
    <div>
      <button className="group mb-[125px] md:mb-[300px] transition-colors duration-300 ease-in-out hover:bg-black flex w-[45px] md:w-[90px] md:h-[128px] h-16 items-center justify-center border-4 md:border-8 border-solid border-black">
        <p className= "w-fit font-normal text-black text-sm md:text-[30px] tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
          menu
        </p>
      </button>
      <div className="font-normal text-black text-lg md:text-[35px] tracking-[0] leading-[normal]">
        Projects
      </div>
    </div>
  );
};

export const Header = (): JSX.Element => {
  return (
    <div className="w-[237px] md:w-[646px] mb-8">
      <div className="mb-2 font-bold text-black text-lg md:text-[35px] tracking-[0] leading-[normal]">
        Kyung Sub Lee
      </div>
      <p className="mb-7 font-normal text-black text-[32px] md:text-[100px] tracking-[0] leading-[30px] md:leading-[100px]">
        Hi, I design and <br />
        code for the <br />
        disabled
      </p>
      <div className="md:w-[646px] w-[237px] md:h-[14px] h-[7px] bg-black" />
    </div>
  );
};

export const Project1 = (): JSX.Element => {
  return (
    <div className="w-[237px] md:w-[646px] ">
      <div className="w-[237px] md:w-[646px] md:h-[423px] h-[155px] bg-[#d9d9d9]" />
      <div className="font-normal text-[#747474] md:text-[35px] mt-3 text-base tracking-[0] leading-[normal]">
        Product Design &amp; Management
      </div>
      <div className="font-bold mb-1.5 text-black text-lg md:text-[35px] tracking-[0] leading-[normal]">
        MELO TOMORROW
      </div>
      <p className="font-normal mb-3 text-black md:text-[40px] text-base tracking-[0] leading-[normal]">
        <span className="font-normal">Tactile sensitive clothing </span>
        <span className="font-bold">
          startup
        </span>
        <span className="font-normal"> for <br /> people with hypersensitivity.</span>
      </p>
      <button className="md:w-[190px] md:h-[59px] group transition-colors duration-300 ease-in-out hover:bg-black mb-7 flex w-[100px] h-9 items-center gap-2.5 pl-[9px] pr-[15px] py-[3px] left-0 md:border-8 border-4 border-solid border-black">
        <div className="text-center w-fit mr-[-7.00px] md:text-[30px] font-bold text-black text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
          Case Study
        </div>
      </button>
    </div>
  );
};

export const Project2 = (): JSX.Element => {
  return (
    <div className="relative w-[237px] h-[301px]">
      <div className="relative w-[237px] h-[155px] bg-[#d9d9d9]" />
      <div className="relative font-normal text-[#747474] mt-3 text-base tracking-[0] leading-[normal]">
        User Research & Product Design
      </div>
      <div className="relative font-bold mb-1.5 text-black text-lg tracking-[0] leading-[normal]">
        AI Journal
      </div>
      <p className="relative font-normal mb-3 text-black text-base tracking-[0] leading-[normal]">
        Digital journal that customizes journal entries through collected text and media.
      </p>
      <button className="group transition-colors duration-300 ease-in-out hover:bg-black mb-7 flex w-[100px] h-9 items-center gap-2.5 pl-[9px] pr-[15px] py-[3px] left-0 border-4 border-solid border-black">
        <div className="relative w-fit mr-[-7.00px] font-bold text-black text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
          Case Study
        </div>
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-row place-content-center mt-10">
      <div className="mr-8 md:mr-[180px] flex ">
        <Left />
      </div>
      <div>
        <Header />
        <Project1 />
        <Project2 />
      </div>
    </main>
  );
}
