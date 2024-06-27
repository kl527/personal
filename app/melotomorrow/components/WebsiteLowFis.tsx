"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import useInViewPort from '../../hooks/useInViewPort';

export default function WebsiteLowFis() {
    const ref1 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);

    return (
        <div className="w-[237px] md:w-[646px] lg:w-[800px]">
            <h1 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Low Fidelity Sketches</h1>
            <p className="font-normal mb-3 text-black md:text-[20px] text-base tracking-[0] leading-7"><em ref={ref1} className={`highlight  ${isInViewport1 ? 'shown' : ''}`}>After discussing the user flow with the team,</em> we quickly sketched out some product feature ideas.
            Our main focus was to make the design as accessible as possible, carefully rationalizing every component.</p>
            <picture className="w-[237px] md:w-[646px] lg:w-[800px]">
                    <source media="(max-width: 767px)" srcSet="/lowfi_website.jpg" />
                    <source media="(min-width: 768px)" srcSet="/lowfi_desktop.png" />
                    <Image src="/lowfi_desktop.png" alt="affinity map" width={800} height={400}/>
                </picture>
        </div>
    )
}