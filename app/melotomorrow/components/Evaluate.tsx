"use client";
import React, { useRef } from 'react';
import Reflections from './Reflections';

export default function Evaluate() {

    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <div className="md:w-[646px] w-full lg:w-[800px] h-[2px] mb-5 mt-5 md:mt-8 bg-black" />
            <div className="mb-5">
                <h1 className="text-black text-[32px] md:text-[56px] tracking-[0] leading-9 md:leading-[56px]">Evaluate</h1>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">This section discuss reflections on the current progress and the next steps</p>
                <Reflections />
            </div>
        </div>
    )
}