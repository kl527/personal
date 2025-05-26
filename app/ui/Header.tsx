export const Header = (): JSX.Element => {
    return (
      <div className="w-full md:w-[646px] lg:w-[800px] place-content-center">
        <div className="mb-2 md:mb-5 text-melo-blue font-bold text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
          Kyung Sub Lee (Daniel)
        </div>
        <p className="mb-7 md:mb-12 font-normal text-black text-[32px] md:text-[40px] tracking-[0] leading-[35px] md:leading-[55px]">
          <b>designer/developer/researcher</b> exploring affective solutions for neurodivergent people
        </p>
        <div className="md:w-[646px] mb-7 md:mb-12 w-full lg:w-[800px] lg:h-[5px] md:h-[4px] h-[3px] bg-black" />
      </div>
    );
  };
  