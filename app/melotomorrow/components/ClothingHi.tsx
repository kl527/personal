"use client";

import React, { useRef } from 'react';
import CarouselClothing from './CarouselClothing';
import useInViewPort from '../../hooks/useInViewPort';

export default function ClothingHi() {
    const ref1 = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    const isInViewport2 = useInViewPort(ref2);

    return (
    <div className="w-[237px] md:w-[646px] lg:w-[800px]">
        <h1 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Final Clothing Product</h1>
        <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-7">
        To be fully transparent, <em ref={ref2} className={`highlight  ${isInViewport2 ? 'shown' : ''}`}>I did not have the funds to create multiple clothing pieces for user testing. I had to proceed with my first iteration. </em></p>
        
        <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">
        In consideration of how participants <em ref={ref1} className={`highlight  ${isInViewport1 ? 'shown' : ''}`}>during the interview talked mostly of outerwear</em>, I decided to focus on the sweater and the hoodie design.
        The clothing features reduced-contact stitching, strategically positioned labels in pockets, optimized shapes, and low-luminance fabrics.
        </p>
        <CarouselClothing />
    </div>
    )
};