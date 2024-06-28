"use client";

import { MTheader } from "./components/MTheader"
import { MTleft } from "./components/MTleft"
import Carousel from "./components/Carousel"
import { Intro } from "./components/Intro"
import Preloader from "./components/Preloader"
import { useState } from "react";
import Research from "./components/Research";
import Design from "./components/Design";

export default function Page() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2800);

    return (
        <div>
            {loading && <div className="flex 100vw place-content-center md:h-screen md:mt-0 mt-[150px] items-center">
                <Preloader /> </div>}
            {!loading && <main className={`w-[70%] ml-auto mr-auto pl-[12px] md:flex flex-row place-content-center mt-8 md:mt-[40px] ${!loading ? 'fadeIn' : ''}`}>
                    <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex ">
                        <MTleft />
                    </div>
                    <div>
                        <MTheader />
                        <Carousel />
                        <Intro />
                        <Research />
                        <Design />
                    </div>
                </main>
            }
        </div>
    )
}