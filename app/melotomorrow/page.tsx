"use client";

import { MTheader } from "./components/MTheader"
import Carousel from "./components/Carousel"
import { Intro } from "./components/Intro"
import Preloader from "./components/Preloader"
import { useState } from "react";
import Research from "./components/Research";
import Design from "./components/Design";
import Evaluate from "./components/Evaluate";
import { PageLayout } from '../components/shared';

export default function Page() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2800);

    return (
        <div>
            {loading && <div className="flex 100vw place-content-center md:h-screen md:mt-0 mt-[150px] items-center">
                <Preloader /> </div>}
            {!loading && <PageLayout>
                <MTheader />
                <Carousel />
                <Intro />
                <Research />
                <Design />
                <Evaluate />
            </PageLayout>}
        </div>
    )
}