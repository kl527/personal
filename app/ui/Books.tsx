"use client";
import Link from 'next/link';

import React, { useRef, useEffect } from 'react';
import useInViewPort from '../hooks/useInViewPort';


export default function Books() {
    const ref1 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='mb-7 md:mb-12'>
            <div className="md:w-[646px] mb-7 md:mb-12 w-full lg:w-[800px] lg:h-[2px] md:h-[2px] h-[1.5px] bg-black" />
            <div className="md:w-[646px] w-full lg:w-[800px]">
                <p className="font-normal mb-3 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">As a side hobby,<em ref={ref1} className={`highlightKey  ${isInViewport1 ? 'shown' : ''}`}> I read books.</em> I&#x27;ve put together a list of my personal favorites. If you have a moment, please take a look.</p>
                <Link href="/books" className="md:w-[155px] md:h-[40px] transition duration-500 group transition-colors duration-500 ease-in-out hover:bg-black md:mb-6 mb-5 lg:mb-7 flex w-[120px] h-9 items-center gap-2.5 pl-[9px] pr-[13px] py-[3px] left-0 border-4 border-solid border-black">
                    <div className="text-center w-fit mr-[-7.00px] md:text-[19px] font-bold text-sm tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
                        Reading List →
                    </div>
                </Link>
            </div>
        </div>
    )
};