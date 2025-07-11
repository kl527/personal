import Link from 'next/link';

export default function BackButton() {
  return (
    <Link 
      href="/" 
      className="group md:border-[5px] mb-[20px] md:mb-[175px] transition-colors duration-300 ease-in-out hover:bg-[black] flex w-[45px] md:w-[60px] md:h-[86px] h-16 items-center justify-center border-4 border-solid border-black"
    >
      <p className="w-fit font-normal text-sm md:text-[20px] tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white text-[black]">
        back
      </p>
    </Link>
  );
} 