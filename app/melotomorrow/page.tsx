"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { sections } from './data/sections'
import { handleScroll } from './utils/scrollUtils'
import Navigation from './components/Navigation'
import BackButton from './components/BackButton'
import ScrollLeftBar from './components/ScrollLeftBar'
import Carousel from './components/Carousel'
import CarouselClothing from './components/CarouselClothing'
import ResponsiveGrid from './components/ResponsiveGrid'
import useInViewPort from '../hooks/useInViewPort'

export default function MeloTomorrowPage() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [activeSubsection, setActiveSubsection] = useState('')
  const [clicked, setClick] = useState(false)

  // Refs for highlight animations
  const sensitiveRef = useRef<HTMLSpanElement>(null)
  const stitchingRef = useRef<HTMLSpanElement>(null)
  const ref1 = useRef<HTMLSpanElement>(null)
  const ref2 = useRef<HTMLSpanElement>(null)
  const ref3 = useRef<HTMLSpanElement>(null)
  const ref4 = useRef<HTMLSpanElement>(null)
  const ref5 = useRef<HTMLSpanElement>(null)
  const ref6 = useRef<HTMLSpanElement>(null)
  const ref7 = useRef<HTMLSpanElement>(null)
  const ref8 = useRef<HTMLSpanElement>(null)
  const ref9 = useRef<HTMLSpanElement>(null)
  const ref10 = useRef<HTMLSpanElement>(null)
  const ref11 = useRef<HTMLSpanElement>(null)
  const ref12 = useRef<HTMLSpanElement>(null)
  const ref13 = useRef<HTMLSpanElement>(null)
  const ref14 = useRef<HTMLSpanElement>(null)
  const ref15 = useRef<HTMLSpanElement>(null)
  const ref16 = useRef<HTMLSpanElement>(null)

  // InViewPort hooks
  const sensitiveInViewport = useInViewPort(sensitiveRef)
  const stitchingInViewport = useInViewPort(stitchingRef)
  const isInViewport1 = useInViewPort(ref1)
  const isInViewport2 = useInViewPort(ref2)
  const isInViewport3 = useInViewPort(ref3)
  const isInViewport4 = useInViewPort(ref4)
  const isInViewport5 = useInViewPort(ref5)
  const isInViewport6 = useInViewPort(ref6)
  const isInViewport7 = useInViewPort(ref7)
  const isInViewport8 = useInViewPort(ref8)
  const isInViewport9 = useInViewPort(ref9)
  const isInViewport10 = useInViewPort(ref10)
  const isInViewport11 = useInViewPort(ref11)
  const isInViewport12 = useInViewPort(ref12)
  const isInViewport13 = useInViewPort(ref13)
  const isInViewport14 = useInViewPort(ref14)
  const isInViewport15 = useInViewPort(ref15)
  const isInViewport16 = useInViewPort(ref16)

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(sections, setActiveSection, setActiveSubsection);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
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
              const element = document.getElementById(sectionId)
              if (element) {
                const yOffset = -20
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                window.scrollTo({ top: y, behavior: 'smooth' })
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
                MELO TOMORROW
              </div>
              <p className="mb-5 md:mb-8 font-normal text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
                <b>Clothing brand for people with hypersensitivity</b>
              </p>
              <div className="w-full md:w-[646px] lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-black" />
            </div>

            {/* Carousel */}
            <ResponsiveGrid />

            {/* Project Overview */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-16">
              <div className="md:flex flex-row-reverse mb-5 w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-10">
                <div>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Timeline</h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">Dec. 2021 - Present</p>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Tools</h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[normal]">
                    Figma, Next.js, Illustrator, Photoshop, After Effects
                  </p>
                </div>
                <div className="md:w-[646px] w-full lg:w-[800px] md:hidden h-[2px] mb-3 mt-3 bg-black" />
                <div>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Problem</h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                    While working at a welfare center for the disabled, a friend with autism seemed to be more <em
                      ref={sensitiveRef}
                      className={`highlight ${sensitiveInViewport ? 'shown' : ''}`}>
                      sensitive to certain inputs
                    </em>, particularly in terms of <em
                      ref={sensitiveRef}
                      className={`highlight ${sensitiveInViewport ? 'shown' : ''}`}>tactile and visual stimuli.</em>
                  </p>
                  <h1 className="font-bold mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Solution</h1>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-6 md:leading-8">
                    We crafted clothes featuring <em
                      ref={stitchingRef}
                      className={`highlight ${stitchingInViewport ? 'shown' : ''}`}>
                      reduced-contact stitching, strategically positioned labels in pockets, optimized shapes, and low-luminance fabrics.
                    </em>
                  </p>
                </div>
              </div>

              {/* Approach Section */}
              <div>
                <h1 className='mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal] '>Approach</h1>
                <div className='md:flex w-full md:w-[646px] lg:w-[800px] md:gap-[100px] lg:gap-[130px]'>
                  <div className=''>
                    <h1 className='text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                      Research
                    </h1>
                    <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      literature review <br />
                      competitor analysis <br />
                      interviews <br />
                      affinity mapping
                    </p>
                  </div>
                  <div className=''>
                    <h1 className='text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                      Design
                    </h1>
                    <div className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      informed brainstorming <br />
                      user flow <br />
                      sketches <br />
                      wireframes <br />
                      user testing
                    </div>
                  </div>
                  <div className=''>
                    <h1 className='text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                      Evaluate
                    </h1>
                    <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      reflections <br />
                      next steps 
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
              
              {/* Literature Review Subsection */}
              <div id="literature-review" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Literature Review</h3>
                <h3 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">Main Findings:</h3>
                <ul>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>
                      35% of people with autism spectrum disorder (ASD) report hyper reactivity to tactile sensitivity </em><a className="underline underline-offset-2" href="https://pubmed.ncbi.nlm.nih.gov/27475418/">(Green et al. 2016)</a>
                  </li>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    People with ASD reported <em ref={ref2} className={`highlight ${isInViewport2 ? 'shown' : ''}`}>
                      highly negatively to fabric labels
                    </em> - one participant of a study said &quot;the labels are just there to make you feel bad.&quot; <a className="underline underline-offset-2" href="https://link.springer.com/article/10.1007/s10803-021-05140-3">(Kyriacou et al. 2021).</a>
                  </li>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Boys with ASD are significantly less likely to prefer the color yellow than boys under typical development <a className="underline underline-offset-2" href="https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01976/full">(Grandgeorge and Masataka 2016).</a>
                  </li>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Color phobias, strong preferences for some colors are due to hypersensitivity in individuals with ASD. <a className="underline underline-offset-2" href="https://www.tandfonline.com/doi/abs/10.1080/13554794.2013.770880">(Ludlow et al. 2013)</a>
                  </li>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    <em ref={ref5} className={`highlight ${isInViewport5 ? 'shown' : ''}`}>
                      Abnormal sensitivity to visual cues are present in the majority of children with ASD.
                    </em> <a className="underline underline-offset-2" href="https://link.springer.com/article/10.1023/A:1025850431170">(O'Neill and Jones 1997)</a>
                  </li>
                </ul>
              </div>

              {/* Competitor Analysis Subsection */}
              <div id="competitor-analysis" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Competitor Analysis</h3>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">Korea has historically ranked poorly in terms of mental health. As a result, there are <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>not many Korean companies that make clothing for people with autism.</em> We looked at three major companies: Target&apos;s Cat and Jack, Kohl&apos;s, and Better Basic.</p>
                <h3 className="text-melo-blue md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">Main Findings:</h3>
                <ul>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Existing clothing companies for ASD <em ref={ref2} className={`highlight ${isInViewport2 ? 'shown' : ''}`}>target younger children</em> who often exhibit a heightened sensitivity to sensory stimuli
                  </li>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Offered clothing for ASD focus on tactile hypersensitivity
                  </li>
                  <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Clothing companies for ASD <em ref={ref3} className={`highlight ${isInViewport3 ? 'shown' : ''}`}>make their websites for caregivers&apos; ease of use</em>, not for the children themselves.
                  </li>
                </ul>
              </div>

              {/* Interviews Subsection */}
              <div id="interviews" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Interviews</h3>
                <div className="w-full md:w-[646px] lg:w-[800px]">
                  <picture className="w-full md:w-[646px] lg:w-[800px]">
                    <source media="(max-width: 767px)" srcSet="/affinity-mobile.png" />
                    <source media="(min-width: 768px)" srcSet="/affinity.png" />
                    <Image src="/affinity.png" alt="affinity map" width={800} height={400}/>
                  </picture>
                </div>
              </div>

              {/* User Personas Subsection */}
              <div id="user-personas" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">User Personas</h3>
                <div>
                  <Image src="/persona1.png" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="caretaker persona" width={800} height={400}/>
                  <Image src="/persona2.png" className="w-full md:w-[646px] lg:w-[800px]" alt="child persona" width={800} height={400}/>
                </div>
              </div>

              {/* Key Points Subsection */}
              <div id="key-points" className="mb-16">
                <h3 id="keyPoints" className="mb-4 text-black text-lg mt-8 md:text-[21px] tracking-[0] leading-[normal]">Key Points</h3>
                <p className="font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">Based on the literature review, competitor analyses, and user interviews, we gained a better understanding of what we should be making. <br /> <br /> We decided to focus our efforts on <em ref={ref4} className={`highlight ${isInViewport4 ? 'shown' : ''}`}>three key points:</em></p>
                <div className=''>
                  <h3 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Limited Availability of Visually Sensory-Friendly Clothing
                  </h3>
                  <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Individuals with ASD often experience visual hypersensitivity, making them <em ref={ref6} className={`highlight ${isInViewport6 ? 'shown' : ''}`}>extremely sensitive to certain colors and patterns.</em> This results in discomfort and challenges in wearing conventional clothing, leading to a reliance on a limited selection of visually comfortable garments.
                  </p>
                  <h4 className='font-bold text-[16px] md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h4>
                  <ul className="mb-8">
                    <li className="italic ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em className="text-melo-blue">Choose low luminance fabric colors and avoid yellow</em> <br />
                      People with ASD don&apos;t like high luminance fabric colors (literature review) <br />
                      Boys with ASD don&apos;t like the color yellow (literature review) <br />
                      Interview participants tended to like colors blue and white (Interviews)
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <h3 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Inadequate Accommodations for Tactile Hypersensitivity
                  </h3>
                  <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Individuals with hypersensitivity often experience <em ref={ref7} className={`highlight ${isInViewport7 ? 'shown' : ''}`}>discomfort from certain textures and materials</em>, making it difficult to wear conventional clothing comfortably. This issue can result in significant distress and a limited wardrobe.
                  </p>
                  <h4 className='font-bold text-lg md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h4>
                  <ul className="mb-7">
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em className="text-melo-blue">Remove tags</em> <br />
                      People with ASD don&apos;t like fabric labels (literature review)<br />
                      Interview participants reported that they remove fabric labels when they purchase new clothes (Interviews)
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em className="text-melo-blue">Change stitching/get rid of stitching</em> <br />
                      Interview participants reported that they don&apos;t wear clothes that have uneven/protruding stitching (interviews)<br />
                      Current adaptive clothing in Korea don&apos;t accommodate for stitching (Competitor Analysis)
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <h3 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Insufficient Age-Appropriate Clothing Options
                  </h3>
                  <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Many existing clothing lines for individuals with ASD focus on younger children and <em ref={ref8} className={`highlight ${isInViewport8 ? 'shown' : ''}`}>lack options for teenagers and adults.</em></p>
                  <h4 className='font-bold text-lg md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h4>
                  <ul className="mb-7">
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em className="text-melo-blue">Target older population</em> <br />
                      Current adaptive clothing for people with ASD market is directed towards children (competitor analysis)
                    </li>
                  </ul>
                </div>
                <div className="md:w-[646px] w-full lg:w-[800px] h-[2px] mb-5 bg-black" />
              </div>
            </section>

            {/* Design Section */}
            <section id="design" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                Design
              </h2>
              
              {/* Clothing Designs Section */}
              <div id="clothing-designs" className="mb-16">
                <h3 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Clothing Designs</h3>
                
                {/* Design Ideation */}
                <div className="mb-8">
                  <h4 className="mb-1 text-black text-base md:text-lg tracking-[0] leading-[normal]">Design Ideation</h4>
                  <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">Based on the key pain points we identified during our research, <em ref={ref9} className={`highlight ${isInViewport9 ? 'shown' : ''}`}>we brainstormed potential solutions.</em></p>
                  <div>
                    <Image src="/brainstorm.jpg" className="w-full md:w-[646px] lg:w-[800px]" alt="Design Ideation" width={800} height={400} />
                  </div>
                </div>

                {/* Low Fidelity Sketches */}
                <div className="mb-8">
                  <h4 className="mb-1 text-black text-base md:text-lg tracking-[0] leading-[normal]">Low Fidelity Sketches</h4>
                  <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">I was new to clothing design, <em ref={ref9} className={`highlight ${isInViewport9 ? 'shown' : ''}`}>so I visited Dongdaemun (clothing market in South Korea) to understand the feasibility behind our ideas.</em> Combining what I learned in the clothing market and our prior research, I sketched out possible adaptive clothing designs.</p>
                  <div>
                    <Image src="/clothingLow.jpg" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="Clothing Low Fidelity" width={800} height={400} />
                  </div>
                </div>

                {/* Final Clothing Product */}
                <div>
                  <h4 className="mb-1 text-black text-base md:text-lg tracking-[0] leading-[normal]">Final Clothing Product</h4>
                  <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    To be fully transparent, <em ref={ref10} className={`highlight ${isInViewport10 ? 'shown' : ''}`}>I did not have the funds to create multiple clothing pieces for user testing. I had to proceed with my first iteration.</em></p>
                  
                  <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    In consideration of how participants <em ref={ref11} className={`highlight ${isInViewport11 ? 'shown' : ''}`}>during the interview talked mostly of outerwear</em>, I decided to focus on the sweater and the hoodie design.
                    The clothing features reduced-contact stitching, strategically positioned labels in pockets, optimized shapes, and low-luminance fabrics.
                  </p>
                  <CarouselClothing />
                </div>
              </div>

              {/* Website Designs Section */}
              <div id="website-designs" className="mb-16">
                <h3 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Website Designs</h3>

                {/* User Flow */}
                <div className="mb-8">
                  <h4 className="mb-1 text-black text-base md:text-lg tracking-[0] leading-[normal]">User Flow</h4>
                  <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">I mapped out the user flow for an individual with ASD looking to purchase clothing from the website. Notably, <em ref={ref12} className={`highlight ${isInViewport12 ? 'shown' : ''}`}>this flow intentionally omits the standard login process to streamline purchasing and order tracking.</em></p>
                  <Image src="/flow.jpg" className="w-full md:w-[646px] lg:w-[800px]" alt="User Flow" width={800} height={400} />
                </div>

                {/* Low Fidelity Sketches */}
                <div className="mb-8">
                  <h4 className="mb-1 text-black text-base md:text-lg tracking-[0] leading-[normal]">Low Fidelity Sketches</h4>
                  <p className="font-normal mb-3 text-black md:text-[20px] text-base tracking-[0] leading-7"><em ref={ref12} className={`highlight ${isInViewport12 ? 'shown' : ''}`}>After discussing the user flow with the team,</em> we quickly sketched out some product feature ideas.
                    Our main focus was to make the design as accessible as possible, carefully rationalizing every component.</p>
                  <picture className="w-full md:w-[646px] lg:w-[800px]">
                    <source media="(max-width: 767px)" srcSet="/lowfi_website.jpg" />
                    <source media="(min-width: 768px)" srcSet="/lowfi_desktop.png" />
                    <Image src="/lowfi_desktop.png" alt="Low Fidelity Website" width={800} height={400}/>
                  </picture>
                </div>

                {/* Mid Fidelity Wireframes */}
                <div className="mb-8">
                  <h4 className="mb-1 text-black text-base md:text-lg tracking-[0] leading-[normal]">Mid Fidelity Wireframes</h4>
                  <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">
                    While the team worked on finding a way to contact payment gateway services (due to Korea&apos;s strict regulations on payments), I focused on <em ref={ref13} className={`highlight ${isInViewport13 ? 'shown' : ''}`}>creating mid-fidelity wireframes with the discussed low fidelity concepts.</em></p>
                  <div>
                    <Image src="/midfis.jpg" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="Mid Fidelity Wireframes" width={800} height={400} />
                  </div>
                </div>

                {/* High Fidelity Designs + User Feedback */}
                <div>
                  <h4 className="mb-1 text-black text-base md:text-lg tracking-[0] leading-[normal]">High Fidelity Designs + User Feedback</h4>
                  <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">Based on the mid-fidelity wireframes, we developed high-fidelity designs to present to users. <em ref={ref13} className={`highlight ${isInViewport13 ? 'shown' : ''}`}>We created multiple iterations based on the feedback we received.</em> Here are some of the feedback notes and the corresponding iterations we created:</p>
                  <Image src="/hifi.jpg" className="mb-2 w-full md:w-[646px] lg:w-[800px]" alt="High Fidelity Designs" width={800} height={400} />
                  <Image src="/hifi-more.jpg" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="More High Fidelity Designs" width={800} height={400} />
                </div>
              </div>

              {/* Design Solution Section */}
              <div id="design-overview" className="mb-16">
                <h3 className="mb-1 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Design Solution</h3>
                <p className="font-normal mb-1 text-black md:text-[20px] text-base tracking-[0] leading-7">The following summary outlines the design solution. Please refer to the preceding research to understand the process behind this solution.</p>
                <Image src="/designSolution.png" className="w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
                <Image src="/designSolution1.png" className="w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
                <Image src="/designSolution2.png" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
              </div>
            </section>

            {/* Evaluate Section */}
            <section id="evaluate" className="mb-16">
              <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
                Evaluate
              </h2>
              
              {/* Reflections Subsection */}
              <div id="reflections" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Reflections</h3>
                <div className=''>
                  <h4 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Clothing Design Reflection
                  </h4>
                  <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    We did not have sufficient funds to create multiple iterations of the clothing. After the first iteration, a few significant issues are noted below.
                  </p>
                  <ul className="mb-8">
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Logo stitching on the inside is too rough - could cause irritation
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Logo is too big - could be too much visual stimulation
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em ref={ref14} className={`highlight ${isInViewport14 ? 'shown' : ''}`}>Was not able to user test the first iteration - we don't know if our customers will like the product</em>
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em ref={ref15} className={`highlight ${isInViewport15 ? 'shown' : ''}`}>Production costs were too expensive - our next collection will need to reduce costs by prioritizing functions</em>
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <h4 className='mb-3 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Website Design Reflection
                  </h4>
                  <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                    Although more research was conducted for the website than for the clothing, there was <em ref={ref3} className={`highlight ${isInViewport3 ? 'shown' : ''}`}>a lack of differentiating features in functionality between our website and other online shopping malls,</em> except for the streamlining aspect. Here are a list of things we could have done better:
                  </p>
                  <ul className="mb-8">
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      Conducting more interviews with individuals with ASD about the website over their hypersensitivities would have helped.</li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      More interviews could have been conducted with caregivers of individuals with ASD to better understand what motivates them to make purchases for those in their care.</li>
                    <li className="italic ml-4 list-disc font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em ref={ref16} className={`highlight ${isInViewport16 ? 'shown' : ''}`}>User tests focused too much on the design principles and not enough on the functionality of the website</em>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Next Steps Subsection */}
              <div id="next-steps" className="mb-16">
                <h3 className="mb-4 text-black text-lg md:text-[21px] tracking-[0] leading-[normal]">Next Steps</h3>
                <div className="md:flex flex-row-reverse">
                  <Image src="/nextSteps.png" className="mb-3 w-3/4 ml-auto mr-auto md:w-[300px] lg:w-[250px]" alt="caretaker persona" width={800} height={400} />
                  <div className=''>
                    <h4 className='mb-1 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                      Adaptive Clothing for Wheelchair Users
                    </h4>
                    <p className="mb-3 font-normal text-black md:text-[20px] text-base tracking-[0] leading-7">
                      <em ref={ref1} className={`highlight ${isInViewport1 ? 'shown' : ''}`}>We are developing our next collection specifically for wheelchair users, emphasizing easy wear and removal of clothing to accommodate individuals with limited mobility.</em>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
} 