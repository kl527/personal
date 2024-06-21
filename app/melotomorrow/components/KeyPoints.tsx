"use client";
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';

export default function KeyPoints() {
    const ref1 = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);
    const ref3 = useRef<HTMLSpanElement>(null);
    const ref4 = useRef<HTMLSpanElement>(null);

    const isInViewport1 = useInViewPort(ref1);
    const isInViewport2 = useInViewPort(ref2);
    const isInViewport3 = useInViewPort(ref3);
    const isInViewport4 = useInViewPort(ref4);
    return (
        <div className="w-[237px] md:w-[646px] lg:w-[800px]">
            <h1 id="keyPoints" className="mb-4 text-black text-lg mt-8 md:text-[21px] tracking-[0] leading-[normal]">Key Points</h1>
            <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">Based on the literature review, competitor analyses, and user interviews, we gained a better understanding of what we should be making. <br /> <br /> We decided to focus our efforts on <em ref={ref4} className={`highlightKey ${isInViewport4 ? 'shown' : ''}`}>three key points:</em></p>
            <div className=''>
                <h1 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Limited Availability of Visually Sensory-Friendly Clothing
                </h1>
                <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Individuals with ASD often experience visual hypersensitivity, making them <em ref={ref1} className={`highlightKey ${isInViewport1 ? 'shown' : ''}`}>extremely sensitive to certain colors and patterns.</em> This results in discomfort and challenges in wearing conventional clothing, leading to a reliance on a limited selection of visually comfortable garments.
                </p>
                <h1 className='font-bold text-[16px] md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h1>
                <ul className="mb-8">
                    <li className="italic ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                        <em className="text-melo-blue">Choose low luminescent fabric colors and avoid yellow</em> <br />
                        People with ASD don&#x27;t like high luminescent fabric colors (literature review) <br />
                        Boys with ASD don&#x27;t like the color yellow (literature review) <br />
                        Interview participants tended to like colors blue and white (Interviews)
                    </li>
                </ul>
            </div>
            <div className=''>
                <h1 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Inadequate Accommodations for Tactile Hypersensitivity
                </h1>
                <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Individuals with hypersensitivity often experience <em ref={ref2} className={`highlightKey ${isInViewport2 ? 'shown' : ''}`}>discomfort from certain textures and materials</em>, making it difficult to wear conventional clothing comfortably. This issue can result in significant distress and a limited wardrobe.                </p>
                <h1 className='font-bold text-lg md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h1>
                <ul className="mb-7">
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        <em className="text-melo-blue">Remove tags</em> <br />
                        People with ASD don&#x27;t like fabric labels (literature review)<br />
                        Interview participants reported that they remove fabric labels when they purchase new clothes (Interviews)
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        <em className="text-melo-blue">Change stitching/get rid of stitching</em> <br />
                        Interview participants reported that they don&#x27;t wear clothes that have uneven/protruding stitching (interviews)<br />
                        Current adaptive clothing in Korea don&#x27;t accommodate for stitching (Competitor Analysis)
                    </li>
                </ul>
            </div>
            <div className=''>
                <h1 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Insufficient Age-Appropriate Clothing Options
                </h1>
                <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Many existing clothing lines for individuals with ASD focus on younger children and <em ref={ref3} className={`highlightKey ${isInViewport3 ? 'shown' : ''}`}>lack options for teenagers and adults.</em></p>
                <h1 className='font-bold text-lg md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h1>
                <ul className="mb-7">
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                        <em className="text-melo-blue">Target older population</em> <br />
                        Current adaptive clothing for people with ASD market is directed towards children (competitor analysis)
                    </li>
                </ul>
            </div>
            <div className="md:w-[646px] w-[237px] lg:w-[800px] h-[2px] mb-5 bg-black" />
        </div>

    )
};