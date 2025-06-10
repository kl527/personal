"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { sections } from "./data/sections";
import { handleScroll } from "./utils/scrollUtils";
import Navigation from "./components/Navigation";
import BackButton from "./components/BackButton";
import ScrollLeftBar from "./components/ScrollLeftBar";
import useInViewPort from "../hooks/useInViewPort";

export default function SeamlegsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [activeSubsection, setActiveSubsection] = useState("");

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
                SEAMLEGS
              </div>
              <p className="mb-5 md:mb-8 font-normal text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
                <b>Smart Legwear for Exercise Categorization</b>
              </p>
              <div className="w-full md:w-[646px] lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-black" />
            </div>

            {/* Placeholder for main visual */}
            {/* <div className="mt-5 w-full aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Main Visual Placeholder</p>
            </div> */}

            {/* Project Overview */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-16">
              <div className="md:flex flex-row-reverse mb-5 w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-10">
                <div className="md:w-[250px] lg:w-[300px]">
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Timeline
                  </h1>
                  <p className="font-normal mb-4 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    January 2025 - May 2025 (Research ongoing)
                  </p>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Contributions
                  </h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    Built ML pipeline from scratch. Ran user tests on prototype.
                    Collected data and performed EDA
                  </p>
                </div>
                <div className="md:w-[646px] w-full lg:w-[800px] md:hidden h-[2px] mb-3 mt-3 bg-black" />
                <div className="flex-1">
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Important Note
                  </h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                    SeamLegs is an ongoing research. SeamLegs is adapted from{" "}
                    <a
                      href="https://www.researchgate.net/publication/389572345_SeamFit_Towards_Practical_Smart_Clothing_for_Automatic_Exercise_Logging#:~:text=In%20SeamFit%2C%20we%20demonstrate%20washable%2C%20fits%2C%20and%20wash%20cycles."
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SeamFit: Towards Practical Smart Clothing for Automatic
                      Exercise Logging for lower leg exercises
                    </a>
                    .
                  </p>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                    Project Snapshot
                  </h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                    SeamLegs is smart pants woven with eight capacitive-thread
                    sensors that identify 12 lower-body exercises. Multiple
                    classifiers were tested with our best model reaching 89%
                    accuracy on 150 annotated trials, proving that textile
                    sensing can rival bulkier wearables while remaining
                    comfortable.
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
                      System Design
                    </h1>
                    <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      motivation <br />
                      hardware
                    </p>
                  </div>
                  <div className="">
                    <h1 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                      Machine Learning
                    </h1>
                    <div className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      data collection <br />
                      EDA <br />
                      data pre-processing <br />
                      feature engineering <br />
                      models
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">
                      Next Steps
                    </h1>
                    <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      research in progress
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-[646px] w-full lg:w-[800px] h-[2px] mb-5 bg-black" />
            </div>
          </section>

          {/* Content Sections */}
          <div className="w-full md:w-[646px] lg:w-[800px]">
            {/* System Design Section */}
            <section id="system-design" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                System Design
              </h2>

              {/* Motivation Subsection */}
              <div id="motivation" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Motivation
                </h3>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  Current motion tracking solutions are either too expensive
                  (think specialized labs) or too intrusive (bulky IMU sensors
                  strapped to your body). SeamLegs solves this by integrating
                  capacitive sensing threads into normal leggings, giving you
                  accurate full-body motion data without any of the usual
                  drawbacks.
                </p>
              </div>

              {/* Hardware Subsection */}
              <div id="hardware" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Hardware
                </h3>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  Hardware was provided by Tianhong Catherine Yu, the first name
                  author of SeamFit.
                </p>

                <div className="mb-5">
                  <Image
                    src="/seampants/hardware.jpg"
                    alt="SeamLegs Hardware Setup"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  Eight insulated capacitive threads are stitched along outer
                  seams and around key joints, connected to a Seeed XIAO
                  nRF52840 microcontroller and dual TI FDC2214 converters
                  sampling at 30 Hz.
                </p>
              </div>
            </section>

            {/* Machine Learning Section */}
            <section id="machine-learning" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                Machine Learning
              </h2>

              {/* Data Collection Subsection */}
              <div id="data-collection" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Data Collection
                </h3>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  Three participants performed five rounds of each exercise,
                  yielding 150 one-minute recordings aligned with video for
                  ground-truth labeling through Vidat.
                </p>

                {/* Participant Images */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <Image
                    src="/seampants/par1.jpg"
                    alt="Participant 1"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/seampants/par2.jpg"
                    alt="Participant 2"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/seampants/par3.jpg"
                    alt="Participant 3"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>

                {/* Exercise GIFs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Column 1 */}
                  <div className="space-y-8">
                    {/* Walking */}
                    <div>
                      <h4 className="mb-4 text-black text-base md:text-lg">
                        Walking
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <Image
                          src="/seampants/walking/1.gif"
                          alt="Walking 1"
                          width={200}
                          height={200}
                          className="w-full h-auto"
                          loading="lazy"
                          priority={false}
                          quality={75}
                          unoptimized={true}
                        />
                        <Image
                          src="/seampants/walking/2.gif"
                          alt="Walking 2"
                          width={200}
                          height={200}
                          className="w-full h-auto"
                          loading="lazy"
                          priority={false}
                          quality={75}
                          unoptimized={true}
                        />
                        <Image
                          src="/seampants/walking/3.gif"
                          alt="Walking 3"
                          width={200}
                          height={200}
                          className="w-full h-auto"
                          loading="lazy"
                          priority={false}
                          quality={75}
                          unoptimized={true}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-8">
                    {/* Lunges */}
                    <div>
                      <h4 className="mb-4 text-black text-base md:text-lg">
                        Lunges
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <Image
                          src="/seampants/lunges/1.gif"
                          alt="Lunges 1"
                          width={200}
                          height={200}
                          className="w-full h-auto"
                          loading="lazy"
                          priority={false}
                          quality={75}
                          unoptimized={true}
                        />
                        <Image
                          src="/seampants/lunges/2.gif"
                          alt="Lunges 2"
                          width={200}
                          height={200}
                          className="w-full h-auto"
                          loading="lazy"
                          priority={false}
                          quality={75}
                          unoptimized={true}
                        />
                        <Image
                          src="/seampants/lunges/3.gif"
                          alt="Lunges 3"
                          width={200}
                          height={200}
                          className="w-full h-auto"
                          loading="lazy"
                          priority={false}
                          quality={75}
                          unoptimized={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EDA Subsection */}
              <div id="eda" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  EDA
                </h3>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  We looked at the raw capacitive thread signals through the
                  naked eye, recognizing patterns.
                </p>

                <div className="mb-5">
                  <Image
                    src="/seampants/eda.jpg"
                    alt="Exploratory Data Analysis"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                      Clear patterns:
                    </h4>
                    <div className="ml-4 border-l-2 border-melo-blue pl-4">
                      <ul>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Walking up & down stairs
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Squatting
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Side Shuffles
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Sitting Down
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                      Contrary to what we expected:
                    </h4>
                    <div className="ml-4 border-l-2 border-melo-blue pl-4">
                      <ul>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Squats were very different from sitting down
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Jumping jacks, walking, and jogging produce similar
                          patterns
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Pre-processing Subsection */}
              <div id="data-preprocessing" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Data Pre-processing
                </h3>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  Recognized that we were getting incorrect readings because of
                  a hardware issue.
                </p>

                <div className="mb-5">
                  <Image
                    src="/seampants/pre1.jpg"
                    alt="Data Pre-processing Issue"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  Filtering Attempted
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      We tried a moving average filter, but it only "smudged"
                      the outliers, not get rid of them.
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      We ended up using an interquartile range to remove
                      outliers
                    </li>
                  </ul>
                </div>

                <div className="mt-5">
                  <Image
                    src="/seampants/pre.jpg"
                    alt="Data Pre-processing Solution"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Feature Engineering Subsection */}
              <div id="feature-engineering" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Feature Engineering
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                      Windowing:
                    </h4>
                    <div className="ml-4 border-l-2 border-melo-blue pl-4">
                      <ul>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          1s windows at 30 Hz with 50% overlap to preserve
                          temporal detail while boosting sample count.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                      Per-sensor statistics (11 x 8 = 88 features):
                    </h4>
                    <div className="ml-4 border-l-2 border-melo-blue pl-4">
                      <ul>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Central tendency & spread: mean, std, variance,
                          median, range
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Extrema: max, min, absolute-max
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Dynamics: zero-crossing count, mean absolute first
                          difference
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Intensity pattern: smoothed peak count (captures
                          bursty motions)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                      Label-aware selection pipeline:
                    </h4>
                    <div className="ml-4 border-l-2 border-melo-blue pl-4">
                      <ul>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Top-20 by ANOVA F-score
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Top-20 by mutual information
                        </li>
                        <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                          Top-20 via Recursive Feature Elimination with a
                          100-tree Random Forest
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Models Subsection */}
              <div id="models" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Models
                </h3>

                <div className="mb-5">
                  <Image
                    src="/seampants/model.jpg"
                    alt="Model Results"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                  The Random Forest model performed the best at 88.6% overall
                  accuracy, with a macro-F1 of 0.87 using 10-fold cross
                  validation.
                </p>
              </div>
            </section>

            {/* Next Steps Section */}
            <section id="next-steps" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                Next Steps
              </h2>

              {/* Research in Progress Subsection */}
              <div id="research-in-progress" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">
                  Research in Progress
                </h3>
                <h4 className="mb-4 mt-4 text-black text-lg md:text-[21px] font-normal tracking-[0] leading-[normal]">
                  There's a few more things we're working on:
                </h4>
                <div className="ml-4 border-l-2 border-melo-blue pl-4">
                  <ul>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Re-engineer SeamLegs to start the sensor from the back
                      panel, reducing connection issues
                    </li>
                    <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Record new datasets with the updated design, ensuring
                      user-independence and session-independence
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
