import LiteratureReview from "./LiteratureReview";
import Competitor from "./Competitor";
import Interviews from "./Interviews";
import Personas from "./Personas";
import KeyPoints from "./KeyPoints";

export default function Research() {
    return (
        <div>
            <div className="mb-5">
                <h1 className="text-black text-[32px] md:text-[56px] tracking-[0] leading-9 md:leading-[56px]">RESEARCH</h1>
                <a className="text-[16px] md:text-[20px] hover:text-melo-blue underline" href="#keyPoints">skip to key points ↓</a>
            </div>
            <LiteratureReview />
            <Competitor />
            <Interviews />
            <Personas />
            <KeyPoints />
        </div>
    )
};