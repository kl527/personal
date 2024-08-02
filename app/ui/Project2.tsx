export const Project2 = (): JSX.Element => {
    return (
      <div className="w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-5">
        <div className="w-full md:w-[100%]" >
          <img src="/p2.jpg" alt="" />
        </div>
        <div className="md:w-[500px]">
          <div className="font-normal text-[#747474] md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
            Research & Design
          </div>
          <div className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
            AI Journal
          </div>
          <p className="font-normal mb-7 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
            <span className="font-normal">Digital journal that customizes journal entries through collected text and media.</span>
          </p>
        </div>
      </div>
    );
  };