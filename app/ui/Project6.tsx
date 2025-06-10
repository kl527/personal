import Link from "next/link";
import Image from "next/image";

export const Project6 = (): JSX.Element => {
  return (
    <div className="w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-8">
      <Link href="/" className="w-full md:w-[100%]">
        <Image src="/p6.jpg" alt="Sprout Project" width={800} height={400} />
      </Link>
      <div className="md:w-[500px]">
        <div className="font-normal md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
          2025 | Research Paper in Progress
        </div>
        <div className="font-bold mb-1 text-black text-lg md:text-[24px] tracking-[0] leading-[normal]">
          Research in Progress
        </div>
        <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[1.6] ">
        </p>
      </div>
    </div>
  );
};
