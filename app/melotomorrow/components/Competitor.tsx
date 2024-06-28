"use client";
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';

export default function Competitor() {
    const ref1 = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);
    const ref3 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    const isInViewport2 = useInViewPort(ref2);
    const isInViewport3 = useInViewPort(ref3);

    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Competitor Analysis</h1>
            <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">Korea has historically ranked poorly in terms of mental health. As a result, there are <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>not many Korean companies that make clothing for people with autism.</em> We looked at three major companies: Target&#x27;s Cat and Jack, Kohl&#x27;s, and Better Basic.</p>
            <h1 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">Main Findings:</h1>
            <ul>
                <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Existing clothing companies for ASD <em ref={ref2} className={`highlight ${isInViewport2 ? 'shown' : ''}`}>target younger children</em> who often exhibit a heightened sensitivity to sensory stimuli
                </li>
                <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Offered clothing for ASD focus on tactile hypersensitivity
                </li>
                <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Clothing companies for ASD <em ref={ref3} className={`highlight ${isInViewport3 ? 'shown' : ''}`}>make their websites for caregivers&#x27; ease of use</em>, not for the children themselves.
                </li>
            </ul>
        </div>
    )
};