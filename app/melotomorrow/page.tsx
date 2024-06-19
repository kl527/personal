"use client";

import { MTheader } from "./components/MTheader"
import { MTleft } from "./components/MTleft"
import Carousel from "./components/Carousel"
import { Intro } from "./components/Intro"
import Preloader from "./components/Preloader"
import { useState } from "react";

export default function Page() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2800);

    return (
        <div>
            {loading && <div className="flex 100vw place-content-center h-screen">
                <Preloader /> </div>}
            {!loading && <main className={`flex flex-row place-content-center mt-9 md:mt-[40px] ${!loading ? 'fadeIn' : ''}`}>
                    <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex ">
                        <MTleft />
                    </div>
                    <div>
                        <MTheader />
                        <Carousel />
                        <Intro />
                    </div>
                </main>
            }
        </div>
    )
}