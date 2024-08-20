import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const InfiniteLooper = function InfiniteLooper({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;
    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit > 0) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [setupInstances]);

  return (
    <div className="looper border-l-4 border-r-4 border-black" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Gallery() {
  return (
    <div className="w-full">
      <div className="mb-2 md:mb-5 border-b-2 border-melo-blue w-fit font-bold text-black text-[30px] tracking-[0] leading-[normal]">
        GALLERY OF MY LIFE
      </div>
      <InfiniteLooper speed={5} direction="right">
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/church.JPG"
            className="rounded-xl shadow-lg mb-5 mr-3"
            width={150}
            height={300}
            alt="church retreat picture"
          />
        </div>
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/apple.jpeg"
            className="rounded-xl shadow-lg mb-5 mr-3"
            width={150}
            height={300}
            alt="apple harvest festival"
          />
        </div>
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/helpingkid.JPG"
            className="rounded-xl shadow-lg mb-5 mr-3"
            width={150}
            height={300}
            alt="helping kid with work"
          />
        </div>
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/friends.jpeg"
            className="rounded-xl shadow-lg mb-5 mr-3"
            width={150}
            height={300}
            alt="helping kid with work"
          />
        </div>
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/joey.JPG"
            className="rounded-xl shadow-lg mb-5 mr-3"
            width={100}
            height={300}
            alt="second dog joey"
          />
        </div>
      </InfiniteLooper>
      <InfiniteLooper speed={7} direction="right">
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/swimming.JPG"
            className="rounded-xl shadow-lg mr-3"
            width={150}
            height={300}
            alt="swimming trip with friends"
          />
        </div>
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/newyork.jpeg"
            className="rounded-xl shadow-lg mr-3"
            width={150}
            height={300}
            alt="picture with friends at new york"
          />
        </div>
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/paris.jpeg"
            className="rounded-xl shadow-lg mr-3"
            width={100}
            height={300}
            alt="picture with friends at paris"
          />
        </div>
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/elmo.JPG"
            className="rounded-xl shadow-lg mr-3"
            width={150}
            height={300}
            alt="first dog elmo"
          />
        </div>
        <div className="contentBlock contentBlock--one">
          <Image
            src="/about/sleepy.JPG"
            className="rounded-xl shadow-lg mr-3"
            width={150}
            height={300}
            alt="sleepy from work"
          />
        </div>
        {/* <div className="contentBlock contentBlock--one">
            <Image src="/about/swimming.JPG" className="rounded-xl shadow-lg mb-5 mr-3" width={150} height={300} alt='swimming trip with friends'/>
        </div>
        <div className="contentBlock contentBlock--one">
            <Image src="/about/cooking.JPG" className="rounded-xl shadow-lg mb-5 mr-3" width={150} height={300} alt='cooking party with friends'/>
        </div> */}
      </InfiniteLooper>
    </div>
  );
}
