"use client";
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';

export const Intro = (): JSX.Element => {
    const sensitiveRef = useRef<HTMLSpanElement>(null);
    const stitchingRef = useRef<HTMLSpanElement>(null);

    const sensitiveInViewport = useInViewPort(sensitiveRef);
    const stitchingInViewport = useInViewPort(stitchingRef);

    return (
        <div>
            <div className="md:flex flex-row-reverse mb-10 w-[237px] md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-10">
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
                    <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                        While working at a welfare center for the disabled, a friend with autism seemed to be more <em
                            ref={sensitiveRef}
                            className={`highlight ${sensitiveInViewport ? 'shown' : ''}`}>
                            sensitive to certain inputs
                        </em>, particularly in terms of <em
                            ref={sensitiveRef}
                            className={`highlight ${sensitiveInViewport ? 'shown' : ''}`}>tactile and visual stimuli.</em>
                    </p>
                    <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Solution</h1>
                    <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                        We crafted a hoodie and sweater featuring <em
                            ref={stitchingRef}
                            className={`highlight ${stitchingInViewport ? 'shown' : ''}`}>
                            reduced-contact stitching, strategically positioned labels in pockets, optimized shapes, and low-luminance fabrics.
                        </em>
                    </p>
                </div>
            </div>
            <div>
                <h1 className='mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal] '>Approach</h1>
                <div className='md:flex w-[237px] md:w-[646px] lg:w-[800px] md:gap-[100px] lg:gap-[130px]'>
                    <div className=''>
                        <h1 className='text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                            Research
                        </h1>
                        <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            literature review <br />
                            competitor analysis <br />
                            interviews <br />
                            affinity mapping
                        </p>
                    </div>
                    <div className=''>
                        <h1 className='text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                            Design
                        </h1>
                        <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            low fi <br />
                            mid/hi fis <br />
                            interactive prototype 
                        </p>
                    </div>
                    <div className=''>
                        <h1 className='text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                            Evaluate
                        </h1>
                        <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            usability testing <br />
                            questionnaire 
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[646px] w-[237px] lg:w-[800px] h-[2px] mb-5 bg-black" />
        </div>
    );
};
