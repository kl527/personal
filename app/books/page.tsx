"use client";
import { useEffect } from "react";
import BooksLeftBar from "./components/BooksLeftBar";
import BooksLeft from "./components/BooksLeft";
import Books from "./components/Books";

export default function Page() {
    
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

    return (
        <div>
            <BooksLeftBar />
            <main className="w-[70%] ml-auto mr-auto pl-[12px] md:flex flex-row place-content-center mt-8 md:mt-[40px]">
                <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex">
                    <BooksLeft />
                </div>
                <div>
                    <Books />
                </div>
            </main>
        </div>
    )
}