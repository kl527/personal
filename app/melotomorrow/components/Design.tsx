"use client";
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';
import ClothingLowFis from './ClothingLowFis';
import ClothingHi from './ClothingHi';
import UserFlow from './UserFlow';
import Brainstorm from './Brainstorm';

export default function Design() {
    const ref1 = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);
    const ref3 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    const isInViewport2 = useInViewPort(ref2);
    const isInViewport3 = useInViewPort(ref3);

    return (
        <div className="w-[237px] md:w-[646px] lg:w-[800px]">
            <div className="mb-5">
                <h1 className="text-black text-[32px] md:text-[56px] tracking-[0] leading-9 md:leading-[56px]">DESIGN</h1>
                <a className="text-[16px] md:text-[20px] hover:text-melo-blue underline" href="#keyPoints">skip to final solution ↓</a>
            </div>
            <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">The design process for both the <em ref={ref1} className={`highlight  ${isInViewport1 ? 'shown' : ''}`}>clothing designs and the website design</em> are shown below.</p>
            <h1 className="mb-1 text-melo-blue text-lg md:text-[21px] tracking-[0] leading-[normal]">Clothing Designs</h1>
            <Brainstorm />
            <ClothingLowFis />
            <ClothingHi />
            <h1 className="mb-1 mt-5 text-melo-blue text-lg md:text-[21px] tracking-[0] leading-[normal]">Website Designs</h1>
            <UserFlow />
        </div>
    )
}