import Image from "next/image"

export default function Personas() {
    return (
        <div className="w-[237px] md:w-[646px] lg:w-[800px]">
            <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">User Personas</h1>
            <div className="md:flex gap-1">
            <Image src="/persona1.png" className="flex-1 w-full" alt="caretaker persona" width={400} height={400}/>
            <Image src="/persona2.png" className="flex-1 w-full" alt="child persona" width={400} height={400}/>
            </div>

        </div>
    )
};