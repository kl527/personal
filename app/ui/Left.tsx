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