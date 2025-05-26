import Image from "next/image"

export default function Interviews() {
    return (
        <div className="w-full md:w-[646px] lg:w-[800px]">
            <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Interviews</h1>
            <div className="w-full md:w-[646px] lg:w-[800px]">
                <picture className="w-full md:w-[646px] lg:w-[800px]">
                    <source media="(max-width: 767px)" srcSet="/affinity-mobile.png" />
                    <source media="(min-width: 768px)" srcSet="/affinity.png" />
                    <Image src="/affinity.png" alt="affinity map" width={800} height={400}/>
                </picture>
            </div>
        </div>
    )
};