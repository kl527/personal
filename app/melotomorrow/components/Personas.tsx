"use client";

import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';
import Image from "next/image"

export default function Personas() {
    const ref1 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    return (
        <div className="w-[237px] md:w-[646px] lg:w-[800px]">
            <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">User Personas</h1>
            <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">Based on the literature review, competitor analyses, and user interviews, we created <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>2 personas representative of our target demographic: </em></p>
            <div>
            <Image src="/persona1.png" className="mb-3 w-[237px] md:w-[646px] lg:w-[800px]" alt="caretaker persona" width={800} height={400}/>
            <Image src="/persona2.png" className="w-[237px] md:w-[646px] lg:w-[800px]" alt="child persona" width={800} height={400}/>
            </div>

        </div>
    )
};