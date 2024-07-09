import Link from 'next/link';

export default function About() {
    return (
        <div className='mb-7 md:mb-12'>
            <div className="md:w-[646px] mb-7 md:mb-12 w-full lg:w-[800px] lg:h-[2px] md:h-[2px] h-[1.5px] bg-black" />
            <div className="md:w-[646px] w-full lg:w-[800px]">
                <p className="font-normal mb-3 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">I&#x27;m also interested in a number of other things! Learn more about me in the links below!</p>
                <div className='flex gap-3'>
                <Link href="/melotomorrow" className="md:w-[135px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-black flex w-[105px] h-9 items-center gap-2.5 pl-[9px] pr-[13px] py-[3px] left-0 border-4 border-solid border-black">
                    <div className="text-center w-fit mr-[-7.00px] md:text-[19px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
                        About me →
                    </div>
                </Link>
                <Link href="/melotomorrow" className="md:w-[95px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-black flex w-[75px] h-9 bg-black items-center gap-2.5 pl-[9px] pr-[13px] py-[3px] left-0 border-4 border-solid border-black">
                    <div className="text-center w-fit mr-[-7.00px] md:text-[19px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out text-white group-hover:text-white">
                        Resume
                    </div>
                </Link>
                </div>
            </div>
        </div>
    )
};