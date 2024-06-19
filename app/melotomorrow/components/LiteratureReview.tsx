"use client";
import React, { useRef } from 'react';
import useInViewPort from '../../hooks/useInViewPort';

export default function LiteratureReview() {
    const ref1 = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);

    const ref1InViewport = useInViewPort(ref1);
    const ref2InViewport = useInViewPort(ref2);
    return (
        <div className="w-[237px] md:w-[646px] lg:w-[800px]">
            <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal] ">Literature Review</h1>
            <h1 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]" >Main Findings:</h1>
            <ul>
                <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] "><em
                    ref={ref1}
                    className={`highlight ${ref1InViewport ? 'shown' : ''}`}>35% of people with autism</em> report hyper reactivity to <em ref={ref1}
                        className={`highlight ${ref1InViewport ? 'shown' : ''}`}>tactile sensitivity</em><a className="underline underline-offset-2" href="https://pubmed.ncbi.nlm.nih.gov/27475418/">(Green et al. 2016)</a></li>
                <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] ">People with autism spectrum disorder (ASD) reported <em ref={ref1}
                        className={`highlight ${ref1InViewport ? 'shown' : ''}`}>highly negatively in regards to fabric labels</em> - one participant of a study said “the labels are just there to make you feel bad.” <a className="underline underline-offset-2" href="https://link.springer.com/article/10.1007/s10803-021-05140-3">(Kyriacou et al. 2021).</a></li>
                <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] ">Boys with ASD are significantly less likely to prefer the color yellow than boys under typical development <a className="underline underline-offset-2" href="https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01976/full">(Grandgeorge and Masataka 2016).</a></li>
                <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] ">Color phobias, strong preferences for some colors are due to hypersensitvity in individuals with ASD. <a className="underline underline-offset-2" href="https://www.tandfonline.com/doi/abs/10.1080/13554794.2013.770880">(Ludlow et al. 2013)</a></li>
                <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] "><em ref={ref2}
                        className={`highlight ${ref2InViewport ? 'shown' : ''}`}>Abnormal sensitivity to visual cues are present in the majority of children with ASD. </em><a className="underline underline-offset-2" href="https://link.springer.com/article/10.1023/A:1025850431170">(O'Neill and Jones 1997)</a></li>
            </ul>
        </div>
    );
};