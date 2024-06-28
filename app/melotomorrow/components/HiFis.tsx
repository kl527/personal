"use client";

import React, { useRef, useState } from 'react';
import Image from "next/image";
import useInViewPort from '../../hooks/useInViewPort';

export default function HiFis() {
    const [clicked, setClick] = useState(false);



    const ref1 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <h1 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">High Fidelity Designs + User Feedback</h1>
            <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">Based on the mid-fidelity wireframes, we developed high-fidelity designs to present to users. <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>We created multiple iterations based on the feedback we received.</em> Here are some of the feedback comments and the corresponding iterations we created:</p>
            <Image src="/hifi.jpg" className="mb-2 w-full md:w-[646px] lg:w-[800px]" alt="Clothing high Fidelity" width={800} height={400} />
            <Image src="/hifi-more.jpg" className={`highlight ${clicked ? '' : 'hidden'} mb-3 w-full md:w-[646px] lg:w-[800px]`} alt="Clothing high Fidelity more" width={800} height={400} />
            <div className='w-full flex justify-center items-center'>
            {clicked && <button onClick={() => setClick(!clicked)} className='hover:-translate-y-1 transition-all inline-block text-white bg-melo-blue border-melo-blue uppercase font-normal mb-10 rounded-xl border-2 p-2 pl-7 pr-7 text-[12px] drop-shadow-2xl place-content-center'>see less</button>}
            {!clicked && <button onClick={() => setClick(!clicked)} className='hover:-translate-y-1 transition-all inline-block text-white bg-melo-blue border-melo-blue uppercase font-normal mb-10 rounded-xl border-2 p-2 pl-7 pr-7 text-[12px] drop-shadow-2xl place-content-center'>see more designs</button>}
            </div>          
        </div>
    )
};