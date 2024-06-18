import { MTheader } from "./components/MTheader"
import { MTleft } from "./components/MTleft"
export default function Page() {
    return (
        <main className="flex flex-row place-content-center mt-9 md:mt-[40px]">
            <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex ">
                <MTleft />
            </div>
            <MTheader />
        </main>
    )
}