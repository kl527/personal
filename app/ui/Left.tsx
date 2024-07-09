interface LeftProps {
  toggleSidebar: () => void;
}

export const Left: React.FC<LeftProps> = ({toggleSidebar}): JSX.Element => {
    return (
      <div>
        <button onClick={toggleSidebar} className="group md:border-[6px] mb-[20px] md:mb-[175px] transition-colors duration-300 ease-in-out hover:bg-black flex w-[45px] md:w-[60px] md:h-[86px] h-16 items-center justify-center border-4 border-solid border-black">
          <p className="w-fit font-normal text-sm md:text-[20px] tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
            menu
          </p>
        </button>
        <div className="md:mb-[1050px] lg:mb-[1380px] font-normal text-lg hidden md:inline-block md:text-[21px] tracking-[0] leading-[normal]">
          Projects
        </div>
        <div className="md:mb-[150px] lg:mb-[150px] xl:mb-[180px] font-normal text-lg hidden md:inline-block md:text-[21px] tracking-[0] leading-[normal]">
          Book Rec.
        </div>
        <div className="font-normal text-lg hidden md:inline-block md:text-[21px] tracking-[0] leading-[normal]">
          About me
        </div>
      </div>
    );
  };