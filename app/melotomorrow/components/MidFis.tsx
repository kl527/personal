"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import useInViewPort from '../../hooks/useInViewPort';

export default function MidFis() {
    const ref1 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);

    return (
        <div className="w-[237px] md:w-[646px] lg:w-[800px]">
            <h1 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Mid Fidelity Designs</h1>
            <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7"></p>
            <div>
                <Image src="/clothingLow.jpg" className="mb-3 w-[237px] md:w-[646px] lg:w-[800px]" alt="Clothing Low Fidelity" width={800} height={400} />
            </div>
        </div>
    )
}