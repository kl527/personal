"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(sections, setActiveSection, setActiveSubsection);
    };

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
                    While Korean culture embraces mirror therapy (거울치료) as a
                    concept for self-reflection and emotional growth, no
                    physical robots exist to embody this therapeutic mirroring
                    practice.
                  </p>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Solution
                  </h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                    Sprout transforms the cultural concept of mirror therapy
                    into a tangible therapeutic tool, using servo-driven
                    physical features and real-time emotion detection to mirror
                    users&apos; facial expressions for emotional rehabilitation.
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
                      user testing <br />
                      iterations <br />
                      final evaluation
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
                  <em>
                    only after seeing them reflected in someone else&apos;s actions
                  </em>{" "}
                  - a social &quot;mirror&quot; that reveals blind spots about yourself.
                </p>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  This psychological phenomenon{" "}
                  <em>
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
                      Few systems address facial rehabilitation or emotional
                      mirroring
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
                      Tangible expressions outperform screen-based emotions in
                      user engagement
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
                      Modern streaming APIs detect 20+ emotional states in
                      &lt;200ms but aren&apos;t utilized
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Continuous emotion tracking for fluid responses remains
                      unexplored
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
                      Eye contact mediates trust, turn-taking, and social
                      presence{" "}
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
                      Apply neuroplastic principles from medical mirror therapy{" "}
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
                      Replace screens with servo-driven features (eyebrows,
                      eyelids, mouth) for tangible emotional presence
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
                      Moving Eyebrows: Servo-controlled magnets move the inner
                      eyebrows vertically to express emotions while outer
                      portions remain fixed.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Mouth Expression: Servo motors drive magnets via fishing
                      line to create smiling, neutral, or frowning expressions
                      by adjusting the mouth&apos;s outer edges.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Squinting Eyes: Bottom eyelids rise using vertical servos
                      and magnets to create natural squinting when smiling.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Blinking Eyes: Top eyelids descend behind eyes via
                      servo-magnet mechanisms to produce realistic blinking.
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
                      Tested functions using plastic scraps, magnets, and
                      cardboard to test servo-magnet interactions before final
                      build
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Laser-cut custom gear attachments to replace standard
                      servo arms
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[800px]">
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
                    Used Hume API for emotion recognition and pyserial to send the detected emotion to the arduino
                  </li>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Focused on identifying most frequently expressed emotions for the robot to mimic.
                  </li>
                </ul>
              </div>
              {/* Mid Fi Subsection */}
              <div id="mid-fi" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Mid Fi
                </h3>
                <div className="w-full h-[600px] md:h-[800px] lg:h-[750px]">
                  <video
                    src="/sprout/midfi.MOV"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
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
              </div>

              {/* Final Prototype Subsection */}
              <div id="final-prototype" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Final Prototype
                </h3>
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
              </div>
            </section>

            {/* Evaluate Section */}
            <section id="evaluate" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                Evaluate
              </h2>
              {/* Add content here */}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
