"use client";
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';
import ClothingLowFis from './ClothingLowFis';
import ClothingHi from './ClothingHi';

export default function Design() {
    const ref1 = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    const isInViewport2 = useInViewPort(ref2);

    return (
        <div className="w-[237px] md:w-[646px] lg:w-[800px]">
            <div className="mb-5">
            <h1 className="text-black text-[32px] md:text-[56px] tracking-[0] leading-9 md:leading-[56px]">DESIGN</h1>
            <a className="text-[16px] md:text-[20px] hover:text-melo-blue underline" href="#keyPoints">skip to final solution ↓</a>
            </div>
            <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">The design process for both the <em ref={ref1} className={`highlight  ${isInViewport1 ? 'shown' : ''}`}>clothing designs and the website design</em> are shown below.</p>
            <h1 className="mb-1 text-melo-blue text-lg md:text-[21px] tracking-[0] leading-[normal]">Clothing Designs</h1>
            <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">
To be fully transparent, <em ref={ref2} className={`highlight  ${isInViewport2 ? 'shown' : ''}`}>I did not have the funds to create multiple clothing pieces for user testing.</em> I had to proceed with my first iteration. As a result, the clothing design process was relatively short. The website design process is more extensive. </p>
            <ClothingLowFis />       
            <ClothingHi />       
        </div>
    )
}