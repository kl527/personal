"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import useInViewPort from '../../hooks/useInViewPort';
export default function UserFlow() {
    const ref1 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <h1 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">User Flow</h1>
            <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">I mapped out the user flow for an individual with ASD looking to purchase clothing from the website. Notably, <em ref={ref1} className={`highlight  ${isInViewport1 ? 'shown' : ''}`}>this flow intentionally omits the standard login process to streamline purchasing and order tracking.</em></p>
            <Image src="/flow.jpg" className="w-full md:w-[646px] lg:w-[800px]" alt="Clothing Low Fidelity" width={800} height={400} />
        </div>
    )
};