"use client";
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';

export const Intro = (): JSX.Element => {
    const sensitiveRef = useRef<HTMLSpanElement>(null);
    const stitchingRef = useRef<HTMLSpanElement>(null);

    const sensitiveInViewport = useInViewPort(sensitiveRef);
    const stitchingInViewport = useInViewPort(stitchingRef);

    return (
        <div className="md:flex flex-row-reverse w-[237px] md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-5">
            <div>
                <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Timeline</h1>
                <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">Dec. 2021 - Present</p>
                <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Team members</h1>
                <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    Jin Sun Kim, Aidan Talreja, Peter Bidoshi, Matthias Choi, Luke Stewart, Kyle Chan
                </p>
                <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Tools</h1>
                <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    Figma, Next.js, Illustrator, Photoshop, After Effects
                </p>
            </div>
            <div className="md:w-[646px] w-[237px] lg:w-[800px] md:hidden h-[2px] mb-3 mt-3 bg-black" />
            <div>
                <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Problem</h1>
                <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    While working at a welfare center for the disabled, a friend with autism seemed to be more <em 
                        ref={sensitiveRef} 
                        className={`highlight ${sensitiveInViewport ? 'shown' : ''}`}>
                        sensitive to certain inputs
                    </em>, particularly in terms of tactile and visual stimuli.
                </p>
                <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Solution</h1>
                <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    We created a hoodie and sweater featuring <em 
                        ref={stitchingRef} 
                        className={`highlight ${stitchingInViewport ? 'shown' : ''}`}>
                        specialized reduced-contact stitching, relocated labels to pockets, optimized shapes, and low-luminance fabrics
                    </em>
                </p>
            </div>
        </div>
    );
};
