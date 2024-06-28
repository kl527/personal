"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import useInViewPort from '../../hooks/useInViewPort';

export default function MidFis() {
    const ref1 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);

    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <h1 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Mid Fidelity Wireframes</h1>
            <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">
                While the team worked on finding a way to contact payment gateway services (due to Korea&#x27;s strict regulations on payments), I focused on <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>creating mid-fidelity wireframes with the discussed low fidelity concepts.</em></p>
            <div>
                <Image src="/midfis.jpg" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="Clothing Low Fidelity" width={800} height={400} />
            </div>
        </div>
    )
}