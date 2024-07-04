"use client";
import Image from "next/image"
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';

export default function Next() {
    const ref1 = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);
    const ref3 = useRef<HTMLSpanElement>(null);
    const ref4 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    const isInViewport2 = useInViewPort(ref2);
    const isInViewport3 = useInViewPort(ref3);
    const isInViewport4 = useInViewPort(ref4);
    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Next Steps</h1>
            <div className="md:flex flex-row-reverse">
                <Image src="/nextSteps.png" className="mb-3 w-3/4 ml-auto mr-auto md:w-[300px] lg:w-[250px]" alt="caretaker persona" width={800} height={400} />
                <div className=''>
                    <h1 className='mb-1 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                        8/20 Launch
                    </h1>
                    <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        We already produced all the clothes, and the website is ready to go live. <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>We are currently working on the marketing strategy to reach our target audience.</em>
                    </p>
                    <h1 className='mb-1 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                        Adaptive Clothing for Wheelchair Users
                    </h1>
                    <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>We are developing our next collection specifically for wheelchair users, emphasizing easy wear and removal of clothing to accommodate individuals with limited mobility.</em>
                    </p>
                </div>
            </div>
        </div>
    )
};