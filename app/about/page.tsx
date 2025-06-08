"use client";
import About from "./components/about";
import AboutLeft from "./components/aboutLeft";
import AboutLeftBar from "./components/aboutLeftBar";
import Experience from "./components/experience";

export default function Page() {
    return (
        <div>
        <AboutLeftBar />
        <main className="w-[70%] ml-auto mr-auto pl-[12px] md:flex flex-row place-content-center mt-8 md:mt-[40px]">
            <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex">
                <AboutLeft />
            </div>
            <div className="w-full md:w-[646px] lg:w-[800px]">
                <About />
                <Experience />
            </div>
        </main>
    </div>
    )
}