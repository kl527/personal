import Link from 'next/link';

export default function About() {
    return (
        <div className='mb-7 md:mb-12'>
            <div className="md:w-[646px] mb-7 md:mb-12 w-full lg:w-[800px] lg:h-[2px] md:h-[2px] h-[1.5px] bg-black" />
            <div className="md:w-[646px] w-full lg:w-[800px]">
                <p className="font-normal mb-3 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">I&#x27;m also interested in a number of other things. Learn more about me in the links below!</p>
                <div className='flex gap-3'>
                    <Link href="/about" className="md:w-[120px] md:h-[40px] group transition-colors duration-300 ease-in-out hover:bg-[black] flex w-[105px] h-9 items-center justify-center border-4 border-solid border-black">
                        <div className="font-normal text-sm md:text-[20px] tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white text-[black]">
                            About me
                        </div>
                    </Link>
                    <a
                        href='/resume/Kyung_Sub_Lee-Resume.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="md:w-[95px] md:h-[40px] group transition-colors duration-300 ease-in-out hover:bg-[black] flex w-[75px] h-9 items-center justify-center border-4 border-solid border-black bg-[black]"
                    >
                        <div className="font-normal text-sm md:text-[20px] tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out text-white group-hover:text-white">
                            Resume
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
};