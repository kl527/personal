"use client";
import About from "./components/about";
import Experience from "./components/experience";
import Gallery from "./components/gallery";
import { PageLayout } from '../components/shared';

export default function Page() {
    return (
        <PageLayout>
            <About />
            <Experience />
            <Gallery />
        </PageLayout>
    )
}