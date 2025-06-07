"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { sections } from "./data/sections";
import { handleScroll } from "./utils/scrollUtils";
import Navigation from "./components/Navigation";
import BackButton from "./components/BackButton";
import ScrollLeftBar from "./components/ScrollLeftBar";
import useInViewPort from "../hooks/useInViewPort";

export default function SproutPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [activeSubsection, setActiveSubsection] = useState("");

  // Refs for highlight animations
  const ref1 = useRef<HTMLSpanElement>(null);
  const ref2 = useRef<HTMLSpanElement>(null);
  const ref3 = useRef<HTMLSpanElement>(null);
  const ref4 = useRef<HTMLSpanElement>(null);
  const ref5 = useRef<HTMLSpanElement>(null);
  const ref6 = useRef<HTMLSpanElement>(null);
  const ref7 = useRef<HTMLSpanElement>(null);
  const ref8 = useRef<HTMLSpanElement>(null);
  const ref9 = useRef<HTMLSpanElement>(null);
  const ref10 = useRef<HTMLSpanElement>(null);
  const ref11 = useRef<HTMLSpanElement>(null);
  const ref12 = useRef<HTMLSpanElement>(null);
  const ref13 = useRef<HTMLSpanElement>(null);
  const ref14 = useRef<HTMLSpanElement>(null);
  const ref15 = useRef<HTMLSpanElement>(null);
  const ref16 = useRef<HTMLSpanElement>(null);
  const ref17 = useRef<HTMLSpanElement>(null);
  const ref18 = useRef<HTMLSpanElement>(null);
  const ref19 = useRef<HTMLSpanElement>(null);
  const ref20 = useRef<HTMLSpanElement>(null);
  const ref21 = useRef<HTMLSpanElement>(null);
  const ref22 = useRef<HTMLSpanElement>(null);
  const ref23 = useRef<HTMLSpanElement>(null);
  const ref24 = useRef<HTMLSpanElement>(null);
  const ref25 = useRef<HTMLSpanElement>(null);
  const ref26 = useRef<HTMLSpanElement>(null);
  const ref27 = useRef<HTMLSpanElement>(null);
  const ref28 = useRef<HTMLSpanElement>(null);
  const ref29 = useRef<HTMLSpanElement>(null);
  const ref30 = useRef<HTMLSpanElement>(null);

  // InViewPort hooks
  const isInViewport1 = useInViewPort(ref1);
  const isInViewport2 = useInViewPort(ref2);
  const isInViewport3 = useInViewPort(ref3);
  const isInViewport4 = useInViewPort(ref4);
  const isInViewport5 = useInViewPort(ref5);
  const isInViewport6 = useInViewPort(ref6);
  const isInViewport7 = useInViewPort(ref7);
  const isInViewport8 = useInViewPort(ref8);
  const isInViewport9 = useInViewPort(ref9);
  const isInViewport10 = useInViewPort(ref10);
  const isInViewport11 = useInViewPort(ref11);
  const isInViewport12 = useInViewPort(ref12);
  const isInViewport13 = useInViewPort(ref13);
  const isInViewport14 = useInViewPort(ref14);
  const isInViewport15 = useInViewPort(ref15);
  const isInViewport16 = useInViewPort(ref16);
  const isInViewport17 = useInViewPort(ref17);
  const isInViewport18 = useInViewPort(ref18);
  const isInViewport19 = useInViewPort(ref19);
  const isInViewport20 = useInViewPort(ref20);
  const isInViewport21 = useInViewPort(ref21);
  const isInViewport22 = useInViewPort(ref22);
  const isInViewport23 = useInViewPort(ref23);
  const isInViewport24 = useInViewPort(ref24);
  const isInViewport25 = useInViewPort(ref25);
  const isInViewport26 = useInViewPort(ref26);
  const isInViewport27 = useInViewPort(ref27);
  const isInViewport28 = useInViewPort(ref28);
  const isInViewport29 = useInViewPort(ref29);
  const isInViewport30 = useInViewPort(ref30);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(sections, setActiveSection, setActiveSubsection);
    };

    // Call once on mount to set initial state based on current scroll position
    handleScrollEvent();

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <>
      <ScrollLeftBar />
      <main className="w-[70%] ml-auto mr-auto pl-[12px] md:flex flex-row place-content-center mt-8 md:mt-[40px]">
        {/* Left Side - Back Button and Navigation */}
        <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex flex-col">
          <BackButton />
          <Navigation
            sections={sections}
            activeSection={activeSection}
            activeSubsection={activeSubsection}
            onSectionClick={(sectionId) => {
              const element = document.getElementById(sectionId);
              if (element) {
                const yOffset = -20;
                const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          />
        </div>

        {/* Right Content Area */}
        <div className="flex-1">
          {/* Introduction Section */}
          <section id="introduction" className="mb-16">
            {/* Title Section */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-5 md:mb-9">
              <div className="mb-2 md:mb-5 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]">
                SPROUT
              </div>
              <p className="mb-5 md:mb-8 font-normal text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
                <b>Designing a Mimic Therapy Robot</b>
              </p>
              <div className="w-full md:w-[646px] lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-black" />
            </div>
            <div className="mt-5 w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/SuB4MLrfzCk"
                title="Sprout Mid Fi Prototype Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-5 grid mb-5 md:mb-9 grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/sprout/visitor1.jpg"
                alt="Visitor Interaction 1"
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <Image
                src="/sprout/visitor2.JPG"
                alt="Visitor Interaction 2"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            {/* Project Overview */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-16">
              <div className="md:flex flex-row-reverse mb-5 w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-10">
                <div className="md:w-[300px]">
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Timeline
                  </h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    Jan. 2025 - May. 2025
                  </p>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Tools
                  </h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    Arduino, Fusion 360, Python (Hume API), laser cutting
                  </p>
                </div>
                <div className="md:w-[646px] w-full lg:w-[800px] md:hidden h-[2px] mb-3 mt-3 bg-black" />
                <div>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Problem
                  </h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                    While Korean culture embraces{" "}
                    <em
                      ref={ref1}
                      className={`highlight ${isInViewport1 ? "shown" : ""}`}
                    >
                      mirror therapy (거울치료)
                    </em>{" "}
                    as a concept for self-reflection and emotional growth,{" "}
                    <em
                      ref={ref2}
                      className={`highlight ${isInViewport2 ? "shown" : ""}`}
                    >
                      no physical robots exist to embody this therapeutic
                      mirroring practice.
                    </em>
                  </p>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Solution
                  </h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                    <em
                      ref={ref3}
                      className={`highlight ${isInViewport3 ? "shown" : ""}`}
                    >
                      Sprout transforms the cultural concept of mirror therapy
                      into a tangible therapeutic tool
                    </em>
                    , using servo-driven physical features and real-time emotion
                    detection to mirror users&apos; facial expressions for
                    emotional rehabilitation.
                  </p>
                </div>
              </div>

              {/* Approach Section */}
              <div>
                <h1 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal] ">
                  Approach
                </h1>
                <div className="md:flex w-full md:w-[646px] lg:w-[800px] md:gap-[100px] lg:gap-[130px]">
                  <div className="">
                    <h1 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                      Research
                    </h1>
                    <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      cultural experience <br />
                      literature review <br />
                      design goals
                    </p>
                  </div>
                  <div className="">
                    <h1 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                      Design
                    </h1>
                    <div className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      sketches <br />
                      low-fi prototype <br />
                      mid-fi prototype <br />
                      final prototype
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                      Evaluate
                    </h1>
                    <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Sciencenter (Ithaca, NY)
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-[646px] w-full lg:w-[800px] h-[2px] mb-5 bg-black" />
            </div>
          </section>

          {/* Content Sections */}
          <div className="w-full md:w-[646px] lg:w-[800px]">
            {/* Research Section */}
            <section id="research" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                Research
              </h2>

              {/* Cultural Experience Subsection */}
              <div id="cultural-experience" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Cultural Experience
                </h3>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  Mirror Therapy (거울치료) is a Korean cultural concept where
                  you recognize your own behaviors, flaws, or traits{" "}
                  <em
                    ref={ref4}
                    className={`highlight ${isInViewport4 ? "shown" : ""}`}
                  >
                    only after seeing them reflected in someone else&apos;s
                    actions
                  </em>{" "}
                  - a social &quot;mirror&quot; that reveals blind spots about
                  yourself.
                </p>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  This psychological phenomenon{" "}
                  <em
                    ref={ref5}
                    className={`highlight ${isInViewport5 ? "shown" : ""}`}
                  >
                    inspired us to explore how robotic mirroring could extend
                    beyond self-recognition to active emotional rehabilitation.
                  </em>
                </p>
              </div>

              {/* Literature Review Subsection */}
              <div id="literature-review" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Related Works/Literature Review
                </h3>

                {/* Mirror Therapy in Robotics */}
                <h3 className="mb-4  text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Mirror Therapy in Robotics
                </h3>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <h4 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Existing Research:
                  </h4>
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Traditional mirror therapy successfully treats phantom
                      limb pain through visual feedback{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Ramachandran 2016)
                      </a>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Second-generation robotic/VR mirror therapy shows mixed
                      clinical effectiveness{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Darbois et al. 2018)
                      </a>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      FaraPy pioneered AR-based facial paralysis feedback{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Barrios Dell&apos;Olio & Sra 2021)
                      </a>
                    </li>
                  </ul>
                  <h4 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Research Gap:
                  </h4>
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref6}
                        className={`highlight ${isInViewport6 ? "shown" : ""}`}
                      >
                        Few systems address facial rehabilitation or emotional
                        mirroring.
                      </em>
                    </li>
                  </ul>
                </div>

                {/* Embodied Affective Expression */}
                <h3 className="mb-4 text-black text-lg font-normal md:text-[21px] tracking-[0] leading-[normal]">
                  Embodied Affective Expression
                </h3>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <h4 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Existing Research:
                  </h4>
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Face-tracking gestures sustain attention 3x longer than
                      static displays{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Sidner et al. 2005)
                      </a>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Robotic tail movements communicate emotions through
                      familiar canine language{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Singh & Young 2013)
                      </a>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref7}
                        className={`highlight ${isInViewport7 ? "shown" : ""}`}
                      >
                        Tangible expressions outperform screen-based emotions in
                        user engagement.
                      </em>
                    </li>
                  </ul>
                  <h4 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Research Gap:
                  </h4>
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      No robots coordinate multiple physical features (eyebrows,
                      mouth, tail, arm) for unified emotional expression
                    </li>
                  </ul>
                </div>

                {/* Real-Time Emotion Recognition */}
                <h3 className="mb-4 text-black text-lg font-normal md:text-[21px] tracking-[0] leading-[normal]">
                  Real-Time Emotion Recognition
                </h3>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <h4 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Existing Research:
                  </h4>
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Current robots (e.g., Ryan) use discrete emotion labels
                      with 500ms+ lag{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Abdollahi et al. 2022)
                      </a>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Empathic robots increase user engagement but rely on
                      scripted responses
                    </li>
                  </ul>
                  <h4 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Research Gap:
                  </h4>
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref8}
                        className={`highlight ${isInViewport8 ? "shown" : ""}`}
                      >
                        Modern streaming APIs detect 20+ emotional states in
                        &lt;200ms but aren&apos;t utilized in robotic systems.
                      </em>
                    </li>
                  </ul>
                </div>

                {/* Social Gaze Behaviors */}
                <h3 className="mb-4 text-black text-lg font-normal md:text-[21px] tracking-[0] leading-[normal]">
                  Social Gaze Behaviors
                </h3>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <h4 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Existing Research:
                  </h4>
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref9}
                        className={`highlight ${isInViewport9 ? "shown" : ""}`}
                      >
                        Eye contact mediates trust, turn-taking, and social
                        presence{" "}
                      </em>
                      <a className="underline underline-offset-2" href="#">
                        (Admoni & Scassellati 2017)
                      </a>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Mutual gaze increases perceived attentiveness by 40%
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Physical eye movements more effective than screen-based
                      eyes
                    </li>
                  </ul>
                  <h4 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Research Gap:
                  </h4>
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      No systems combine real-time eye-tracking input with
                      servo-driven eye output for therapeutic applications
                    </li>
                  </ul>
                </div>
              </div>

              {/* Design Goals Subsection */}
              <div id="design-goals" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Design Goals
                </h3>
                <h4 className="mb-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Therapeutic Mirror Feedback
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref10}
                        className={`highlight ${isInViewport10 ? "shown" : ""}`}
                      >
                        Apply neuroplastic principles from medical mirror
                        therapy{" "}
                      </em>
                      <a className="underline underline-offset-2" href="#">
                        (Ramachandran 2016)
                      </a>{" "}
                      to emotional rehabilitation through synchronized facial
                      mirroring{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Beom et al. 2016)
                      </a>
                    </li>
                  </ul>
                </div>

                <h4 className="mb-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Real-Time Responsiveness
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Target &lt;200ms latency for emotion detection and
                      expression to maintain conversational flow
                    </li>
                  </ul>
                </div>

                <h4 className="mb-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Physical Expressivity
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Replace screens with{" "}
                      <em
                        ref={ref11}
                        className={`highlight ${isInViewport11 ? "shown" : ""}`}
                      >
                        servo-driven features (eyebrows, eyelids, mouth) for
                        tangible emotional presence
                      </em>
                    </li>
                  </ul>
                </div>

                <h4 className="mb-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Approachable Design
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Rounded forms and neutral colors reduce user anxiety{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Barenbrock et al. 2024)
                      </a>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Familiar gestures (tail wagging, arm waving) signal
                      friendliness{" "}
                      <a className="underline underline-offset-2" href="#">
                        (Singh & Young 2013; Sidner et al. 2005)
                      </a>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Coordinated movements create cohesive, lifelike companion
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Design Section */}
            <section id="design" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                Design
              </h2>

              {/* Sketches Subsection */}
              <div id="sketches" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Sketches
                </h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
                    src="/sprout/sketch1.jpg"
                    alt="Sketch 1"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/sprout/sketch2.jpg"
                    alt="Sketch 2"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
                    src="/sprout/sketch3.jpg"
                    alt="Sketch 3"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/sprout/sketch4.jpg"
                    alt="Sketch 4"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="mb-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Facial Expression Tracking and Mimicking
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Moving Eyebrows:{" "}
                      <em
                        ref={ref12}
                        className={`highlight ${isInViewport12 ? "shown" : ""}`}
                      >
                        Servo-controlled magnets
                      </em>{" "}
                      move the inner eyebrows vertically to express emotions
                      while outer portions remain fixed.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Mouth Expression:{" "}
                      <em
                        ref={ref13}
                        className={`highlight ${isInViewport13 ? "shown" : ""}`}
                      >
                        Servo motors drive magnets via fishing line
                      </em>{" "}
                      to create smiling, neutral, or frowning expressions by
                      adjusting the mouth&apos;s outer edges.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Squinting Eyes: Bottom eyelids rise using{" "}
                      <em
                        ref={ref14}
                        className={`highlight ${isInViewport14 ? "shown" : ""}`}
                      >
                        vertical servos and magnets
                      </em>{" "}
                      to create natural squinting when smiling.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Blinking Eyes: Top eyelids descend behind eyes via
                      <em
                        ref={ref15}
                        className={`highlight ${isInViewport15 ? "shown" : ""}`}
                      >
                        servo-magnet mechanisms
                      </em>{" "}
                      to produce realistic blinking.
                    </li>
                  </ul>
                </div>

                <h4 className="mb-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Motion Tracking and Eye Movement
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Moving eyes: Proximity sensors detect user position while
                      horizontal servos move pupils along a curved track to
                      maintain eye contact.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Low Fi Subsection */}
              <div id="low-fi" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Low Fi
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  <Image
                    src="/sprout/lowfi1.jpg"
                    alt="Low Fi Prototype 1"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/sprout/lowfi2.jpg"
                    alt="Low Fi Prototype 2"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/sprout/lowfi3.jpg"
                    alt="Low Fi Prototype 3"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/sprout/lowfi4.jpg"
                    alt="Low Fi Prototype 4"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Physical Mechanism Testing
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4 mt-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Explored forms with cardboard prototypes, discovering
                      servos are pretty big and we need to scale up the robot
                      shell
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref16}
                        className={`highlight ${isInViewport16 ? "shown" : ""}`}
                      >
                        Tested functions using plastic scraps, magnets, and
                        cardboard to test servo-magnet interactions before final
                        build
                      </em>
                    </li>
                    <li className="ml-4 list-disc font-normal mb-10 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref17}
                        className={`highlight ${isInViewport17 ? "shown" : ""}`}
                      >
                        Laser-cut custom gear attachments
                      </em>{" "}
                      to replace standard servo arms
                    </li>
                  </ul>
                </div>
                <div className="w-[50%] mx-auto aspect-[14/16] overflow-hidden">
                  <video
                    src="/sprout/lowfi.mov"
                    className="w-full h-full object-cover object-center scale-y-[-1]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Emotion Recognition Testing
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4 mt-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Used{" "}
                      <em
                        ref={ref18}
                        className={`highlight ${isInViewport18 ? "shown" : ""}`}
                      >
                        Hume API for emotion recognition
                      </em>{" "}
                      and pyserial to send the detected emotion to the arduino
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Focused on identifying most frequently expressed emotions
                      for the robot to mimic.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mid Fi Subsection */}
              <div id="mid-fi" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Mid Fi
                </h3>
                <div className="w-[50%] mx-auto">
                  <video
                    src="/sprout/midfi.MOV"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Servo Interactions
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4 mt-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref19}
                        className={`highlight ${isInViewport19 ? "shown" : ""}`}
                      >
                        Implemented functionality for one eyebrow
                      </em>{" "}
                      and tested its response across 5 different emotions.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      We found that the{" "}
                      <em
                        ref={ref20}
                        className={`highlight ${isInViewport20 ? "shown" : ""}`}
                      >
                        servos had inconsistent, jerky movements
                      </em>
                      - added a capacitor to smooth out the movements.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      The{" "}
                      <em
                        ref={ref21}
                        className={`highlight ${isInViewport21 ? "shown" : ""}`}
                      >
                        camera was heating up too much, too quickly
                      </em>{" "}
                      - changed the camera to a b/w camera.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-10 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Broke a lot of servos.
                    </li>
                  </ul>
                </div>
                <div className="mt-5">
                  <Image
                    src="/sprout/midfi.jpg"
                    alt="Mid Fi Prototype"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Initial Form
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4 mt-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref22}
                        className={`highlight ${isInViewport22 ? "shown" : ""}`}
                      >
                        3D printed the initial robot head shell
                      </em>
                      .
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Discovered during assembly that{" "}
                      <em
                        ref={ref23}
                        className={`highlight ${isInViewport23 ? "shown" : ""}`}
                      >
                        compartments are needed to properly house the servos
                      </em>
                      .
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      The mouth servos did not have enough space to move.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Final Prototype Subsection */}
              <div id="final-prototype" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Final Prototype
                </h3>
                <div className="mt-5 w-full aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/SuB4MLrfzCk"
                    title="Sprout Mid Fi Prototype Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
                    src="/sprout/front.jpg"
                    alt="Sprout Back View"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/sprout/back.jpg"
                    alt="Sprout Front View"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Hardware
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4 mt-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Used a{" "}
                      <em
                        ref={ref24}
                        className={`highlight ${isInViewport24 ? "shown" : ""}`}
                      >
                        PCA9685 PWM driver board to control 7 servo motors for
                        coordinated facial movements
                      </em>{" "}
                      (2 eyebrows, 2 mouth corners, 1 eye tracking, 1 antenna, 1
                      arm), with a 470µF capacitor added for power stabilization
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref25}
                        className={`highlight ${isInViewport25 ? "shown" : ""}`}
                      >
                        3D-printed custom servo horns
                      </em>{" "}
                      and redesigned the robot shell with dedicated compartments
                      to properly house servos and allow full range of motion
                      for mouth expressions.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref26}
                        className={`highlight ${isInViewport26 ? "shown" : ""}`}
                      >
                        Redesigned the form with smooth, rounded contours
                      </em>{" "}
                      and neutral white coloring based on research showing these
                      aesthetic choices reduce user anxiety and increase
                      approachability.
                    </li>
                  </ul>
                </div>
                <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Software
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4 mt-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em
                        ref={ref27}
                        className={`highlight ${isInViewport27 ? "shown" : ""}`}
                      >
                        Used Hume AI for real-time emotion recognition
                      </em>{" "}
                      with ~200ms latency, classifying detected emotions into 5
                      core states and sending commands via pyserial to Arduino
                      for synchronized servo movements.
                    </li>
                  </ul>
                </div>
                <a
                  href="https://github.com/kl527/emotion_robot"
                  className="mt-8 w-[400px] mt-12 mb-12 ml-auto mr-auto bg-[#007089] md:h-[45px] transition duration-500 group transition-colors duration-500 ease-in-out flex h-10 items-center justify-center gap-2.5 py-[3px] left-0 border-4 border-solid border-[#007089]"
                >
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-center md:text-[18px] font-bold text-white text-sm transition-colors duration-300 ease-in-out">
                      See the code
                    </p>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 23 23"
                        fill="none"
                      >
                        <path
                          d="M11.5 0C8.76927 0.000113234 6.12772 0.971874 4.04796 2.74141C1.96821 4.51094 0.585953 6.96277 0.148534 9.65819C-0.288886 12.3536 0.24707 15.1167 1.6605 17.4531C3.07394 19.7896 5.27261 21.5468 7.86312 22.4105C8.43812 22.5111 8.65374 22.1661 8.65374 21.8642C8.65374 21.5911 8.63936 20.6855 8.63936 19.7224C5.74999 20.2542 5.0025 19.018 4.7725 18.3712C4.51729 17.742 4.11272 17.1845 3.59376 16.7468C3.19126 16.5311 2.61626 15.9993 3.57937 15.9849C3.94712 16.0248 4.29984 16.1528 4.60762 16.358C4.91541 16.5632 5.1692 16.8395 5.34749 17.1636C5.50478 17.4462 5.71627 17.6949 5.96986 17.8956C6.22344 18.0963 6.51413 18.2449 6.82527 18.3331C7.13641 18.4212 7.46188 18.4471 7.78304 18.4092C8.10419 18.3713 8.41472 18.2705 8.69682 18.1124C8.74661 17.5277 9.00716 16.9811 9.42996 16.5743C6.87123 16.2868 4.1975 15.2949 4.1975 10.8962C4.18134 9.75328 4.60309 8.64749 5.37624 7.8056C5.02467 6.81226 5.06581 5.72215 5.49124 4.75813C5.49124 4.75813 6.45433 4.45624 8.65372 5.93687C10.5354 5.41934 12.522 5.41934 14.4037 5.93687C16.603 4.44188 17.5662 4.75813 17.5662 4.75813C17.9917 5.72213 18.0328 6.81227 17.6812 7.8056C18.4566 8.64605 18.8788 9.75281 18.8599 10.8962C18.8599 15.3093 16.1718 16.2868 13.6131 16.5743C13.8875 16.8525 14.0989 17.1864 14.2328 17.5535C14.3668 17.9206 14.4201 18.3122 14.3893 18.7018C14.3893 20.2399 14.3749 21.4761 14.3749 21.8643C14.3749 22.1661 14.5905 22.5255 15.1655 22.4105C17.7515 21.5398 19.9438 19.7784 21.3513 17.4408C22.7587 15.1032 23.2895 12.3415 22.8491 9.6487C22.4086 6.95589 21.0255 4.50725 18.9467 2.73987C16.8678 0.972491 14.2285 0.00142013 11.5 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </section>

            {/* Evaluate Section */}
            <section id="evaluate" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                Evaluate
              </h2>
              <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                We presented our work at the Sciencenter, a hands-on science
                museum in Ithaca, NY.
              </h4>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <Image
                  src="/sprout/eval1.jpg"
                  alt="Evaluation Image 1"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/sprout/eval2.jpg"
                  alt="Evaluation Image 2"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/sprout/eval3.jpg"
                  alt="Evaluation Image 3"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/sprout/eval4.jpg"
                  alt="Evaluation Image 4"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/sprout/eval5.jpg"
                  alt="Evaluation Image 5"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/sprout/eval6.jpg"
                  alt="Evaluation Image 6"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                Next Steps
              </h4>
              <div className="ml-4 border-l-2 border-melo-blue pl-4 mt-4">
                <ul>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    As the convention was 2 hours long, the{" "}
                    <em
                      ref={ref28}
                      className={`highlight ${isInViewport28 ? "shown" : ""}`}
                    >
                      camera started heating up too much
                    </em>{" "}
                    - we would need to find a better camera or a cooler
                    enclosure.
                  </li>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    The current form factor could be optimized for greater
                    portability, enabling more natural handheld interactions
                    that would allow children to engage with Sprout as a
                    companion during therapy sessions.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
