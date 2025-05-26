"use client";
import { useEffect } from "react";
import Books from "./components/Books";
import { PageLayout } from '../components/shared';

export default function Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageLayout>
            <Books />
        </PageLayout>
    )
}