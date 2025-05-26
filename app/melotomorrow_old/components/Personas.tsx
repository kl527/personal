"use client";

import React, { useRef } from 'react';
import Image from "next/image"

export default function Personas() {
    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">User Personas</h1>
            <div>
            <Image src="/persona1.png" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="caretaker persona" width={800} height={400}/>
            <Image src="/persona2.png" className="w-full md:w-[646px] lg:w-[800px]" alt="child persona" width={800} height={400}/>
            </div>

        </div>
    )
};