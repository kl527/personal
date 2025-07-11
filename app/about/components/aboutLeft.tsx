import Link from 'next/link';
export default function AboutLeft() {
    return (
      <div>
        <Link href="/" className="group md:border-[6px] mb-[20px] md:mb-[145px] transition-colors duration-300 ease-in-out hover:bg-[#007089] flex w-[45px] md:w-[60px] md:h-[86px] h-16 items-center justify-center border-4 border-solid border-[#007089]">
          <p className="w-fit font-normal text-sm md:text-[20px] tracking-[0] leading-[normal] text-[#007089] transition-colors duration-300 ease-in-out group-hover:text-white">
            back
          </p>
        </Link>
      </div>
      
    );
  };