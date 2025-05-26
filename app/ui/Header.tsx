
export const Header = (): JSX.Element => {
  return (
    <div className="w-full md:w-[646px] lg:w-[800px] place-content-center">
      <div className="mb-2 md:mb-5 text-melo-blue font-bold text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
        Kyung Sub Lee (Daniel)
      </div>
      <p className="mb-7 md:mb-12 font-normal text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px] flex flex-wrap items-center">
      <span className="mr-1 mb-4">exploring affective solutions as a: </span>
        <span className="text-animation-container">
          <span className="text-animation">
            <span className="text-animation-item">
              <span className="text-melo-blue font-bold py-1">designer</span>
            </span>
            <span className="text-animation-item">
              <span className="text-melo-blue font-bold py-1">developer</span> 
            </span>
            <span className="text-animation-item">
              <span className="text-melo-blue font-bold py-1">researcher</span>
            </span>
          </span>
        </span>
      </p>
      <div className="md:w-[646px] mb-7 md:mb-12 w-full lg:w-[800px] lg:h-[5px] md:h-[8px] h-[3px] bg-black" />
    </div>
  );
};