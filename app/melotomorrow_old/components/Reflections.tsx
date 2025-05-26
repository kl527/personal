"use client";
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';

export default function Reflections() {
    const ref1 = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);
    const ref3 = useRef<HTMLSpanElement>(null);
    const ref4 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    const isInViewport2 = useInViewPort(ref2);
    const isInViewport3 = useInViewPort(ref3);
    const isInViewport4 = useInViewPort(ref4);
    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Reflections</h1>
            <div className=''>
                <h1 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Clothing Design Reflection
                </h1>
                <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    We did not have sufficient funds to create multiple iterations of the clothing. After the first iteration, a few significant issues are noted below.
                </p>
                <ul className="mb-8">
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        Logo stitching on the inside is too rough - could cause irritation
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        Logo is too big - could be too much visual stimulation
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>Was not able to user test the first iteration - we don&#x27;t know if our customers will like the product</em>
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        <em ref={ref2} className={`highlight ${isInViewport2 ? 'shown' : ''}`}>Production costs were too expensive - our next collection will need to reduce costs by prioritizing functions</em>
                    </li>
                </ul>
            </div>
            <div className=''>
                <h1 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Website Design Reflection
                </h1>
                <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Although more research was conducted for the website than for the clothing, there was <em ref={ref3} className={`highlight ${isInViewport3 ? 'shown' : ''}`}>a lack of differentiating features in functionality between our website and other online shopping malls,</em> except for the streamlining aspect. Here are a list of things we could have done better:
                </p>
                <ul className="mb-8">
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        Conducting more interviews with individuals with ASD about the website over their hypersensitivities would have helped.</li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        More interviews could have been conducted with caregivers of individuals with ASD to better understand what motivates them to make purchases for those in their care.</li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        <em ref={ref4} className={`highlight ${isInViewport4 ? 'shown' : ''}`}>User tests focused too much on the design principles and not enough on the functionality of the website</em>
                    </li>
                </ul>
            </div>
        </div>
    )
};