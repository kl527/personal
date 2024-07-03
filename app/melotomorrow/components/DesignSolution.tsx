import Image from 'next/image';
export default function DesignSolution() {
    return(
        <div>
            <h1 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Design Solution</h1>
            <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">The following summary outlines the design solution. Please refer to the preceding research to understand the process behind this solution.</p>
            <Image src="/designSolution.png" className="w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
            <Image src="/designSolution1.png" className="w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
            <Image src="/designSolution2.png" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
        </div>

    )
};