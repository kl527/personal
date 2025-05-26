"use client"

import { useState, useEffect } from 'react'
import { sections } from './data/sections'
import { handleScroll } from './utils/scrollUtils'
import Navigation from './components/Navigation'
import BackButton from './components/BackButton'
import ScrollLeftBar from './components/ScrollLeftBar'

export default function SproutPage() {
  const [activeSection, setActiveSection] = useState('introduction')

  useEffect(() => {
    const scrollHandler = () => handleScroll(sections, setActiveSection)
    window.addEventListener('scroll', scrollHandler)
    scrollHandler()

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

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
          {/* Title Section */}
        <div className="w-full md:w-[646px] lg:w-[800px] mb-5 md:mb-9">
          <div className="mb-2 md:mb-5 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]">
            SPROUT
          </div>
          <p className="mb-5 md:mb-8 font-normal text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
          <b>Designing a Mirror Therapy AI Robot</b>
          </p>
          <div className="w-full md:w-[646px] lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-black" />
        </div>

        {/* Content Sections */}
        <div className="w-full md:w-[646px] lg:w-[800px]">
          {/* Introduction Section */}
          <section id="introduction" className="mb-32">
            <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
              Introduction
            </h2>
            
            <div className="space-y-8">
              <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                We&apos;ve designed, built, and launched category-defining digital products for the world&apos;s top brands. 
                When meeting people new to working with us, we&apos;re often asked to describe our methodology.
              </p>
              
              <div className="bg-gray-100 aspect-[16/9] flex items-center justify-center my-12">
                <span className="text-gray-500 text-base md:text-[20px]">Image Placeholder</span>
              </div>

              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Introduction
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-6">
                  We&apos;ve designed, built, and launched category-defining digital products for the world&apos;s top brands. 
                  When meeting people new to working with us, we&apos;re often asked to describe our methodology.
                </p>
              </div>
            </div>
          </section>

          {/* Background/Ideation Section */}
          <section id="background" className="mb-32">
            <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
              Background/Ideation
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Understanding the Challenge
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-6">
                  Every great product starts with a deep understanding of the problem it&apos;s solving. 
                  <b> Products serve a purpose</b>—they have a job to do.
                </p>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                  Understanding that products serve a purpose is more than just a strategic insight—it&apos;s a gateway 
                  to innovation. Assessing how your product fulfills a job for your customer is a foundational 
                  aspect of product innovation.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 my-12">
                <div className="bg-gray-100 aspect-square flex items-center justify-center">
                  <span className="text-gray-500 text-sm md:text-base">Image Placeholder</span>
                </div>
                <div className="bg-gray-100 aspect-square flex items-center justify-center">
                  <span className="text-gray-500 text-sm md:text-base">Image Placeholder</span>
                </div>
                <div className="bg-gray-100 aspect-square flex items-center justify-center">
                  <span className="text-gray-500 text-sm md:text-base">Image Placeholder</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Aligning Around a Job
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-6">
                  Aligning every contributor around this primary job can be challenging, yet is pivotal for 
                  simplifying the entire product journey. This alignment sharpens focus, enhances decision-making, 
                  accelerates time to market, and ultimately enriches the customer experience.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-melo-blue">
                <h4 className="text-base md:text-[20px] font-bold text-black mb-4">
                  Key Insights
                </h4>
                <ul className="space-y-3">
                  <li className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                    • Align every contributor around the primary job
                  </li>
                  <li className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                    • Maintain relentless focus from inception through launch
                  </li>
                  <li className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                    • Navigate drift and maintain focus on core purpose
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section id="design" className="mb-32">
            <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
              Design Process
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Prototypes Over Presentations
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-6">
                  Most companies rely on presentations as a means to communicate information. 
                  <b> We have found that moving toward strategy you can touch and feel is far more powerful</b>.
                </p>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                  These traditional approaches to product strategy, design, and development have their merits, 
                  but they also introduce significant challenges. Enthusiasm for ideation often leads to endless 
                  iteration, leaving many ideas unrealized without tangible product launches.
                </p>
              </div>

              <div className="bg-gray-100 aspect-[16/9] flex items-center justify-center my-12">
                <span className="text-gray-500 text-base md:text-[20px]">Image Placeholder</span>
              </div>

              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  The Power of Prototypes
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-8">
                  We have found that breaking this norm and moving toward strategy you can touch and feel is 
                  far more powerful. Moving away from presentations in favor of prototypes empowers product and 
                  experience teams to accelerate development.
                </p>

                <div className="space-y-8">
                  <div className="border-l-4 border-gray-200 pl-6">
                    <h4 className="text-base md:text-[20px] font-bold text-black mb-3">
                      Low Fidelity Flow Prototypes
                    </h4>
                    <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                      Basic digital layouts to illustrate structure, hierarchy and flow that show how users 
                      move through an experience step by step.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-200 pl-6">
                    <h4 className="text-base md:text-[20px] font-bold text-black mb-3">
                      High Fidelity Prototypes
                    </h4>
                    <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                      Fully-designed and prototyped UI resembling the final product, vital for helping 
                      customers/stakeholders understand how the finished product might come to life.
                    </p>
                  </div>
                  <div className="border-l-4 border-gray-200 pl-6">
                    <h4 className="text-base md:text-[20px] font-bold text-black mb-3">
                      Code Prototypes or Proofs of Concept
                    </h4>
                    <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                      Functional prototypes using code to test technical feasibility and backend integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center my-12">
                <span className="text-gray-500 text-base md:text-[20px]">Image Placeholder</span>
              </div>
            </div>
          </section>

          {/* Technical Implementation Section */}
          <section id="technical" className="mb-32">
            <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
              Technical
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Constraints Create Breakthroughs
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-6">
                  The greatest innovations often emerge from the tightest constraints. 
                  <b> By embracing limitations rather than fighting them, teams can discover unexpected solutions</b>.
                </p>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                  Time constraints inspire focus and force prioritization. Budget limitations encourage creative 
                  problem-solving. Technical constraints push teams to find elegant solutions within existing systems.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 my-12">
                <div className="bg-gray-100 aspect-[16/9] flex items-center justify-center">
                  <span className="text-gray-500 text-base md:text-[20px]">Image Placeholder</span>
                </div>
                <div className="bg-gray-100 aspect-[16/9] flex items-center justify-center">
                  <span className="text-gray-500 text-base md:text-[20px]">Image Placeholder</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Small, Senior Teams
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-6">
                  Small, senior teams working with clear constraints can move faster and produce better results. 
                  This approach enables:
                </p>
                <ul className="space-y-4 pl-6">
                  <li className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                    • <b>Rapid prototyping and iteration</b> - Senior team members can quickly execute and refine ideas
                  </li>
                  <li className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                    • <b>Clear decision-making processes</b> - Fewer stakeholders mean faster consensus
                  </li>
                  <li className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                    • <b>Focused execution on core features</b> - Constraints force prioritization of what truly matters
                  </li>
                </ul>
              </div>

              <div className="bg-black text-white p-8 my-12">
                <p className="text-base md:text-[20px] font-normal leading-6 md:leading-8">
                  "Constraints aren't limitations—they're the catalyst for breakthrough thinking. 
                  When you can't do everything, you're forced to do the right things exceptionally well."
                </p>
              </div>
            </div>
          </section>

          {/* Impact & Next Steps Section */}
          <section id="impact" className="mb-32">
            <h2 className="text-lg md:text-[21px] font-bold text-melo-blue mb-8">
              Impact/Next Steps
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Think Long Term
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-6">
                  The mark of an exceptional product team isn&apos;t just in their ability to bring products to market, 
                  <b> but in their dedication to what follows the launch</b>.
                </p>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                  Launching a product is a milestone, but it&apos;s far from the journey&apos;s end. It represents the 
                  beginning of a path toward continuous enhancement and growth. The difference between a good and 
                  a great product practice lies in the commitment to what happens next.
                </p>
              </div>

              <div className="bg-gray-100 aspect-[21/9] flex items-center justify-center my-12">
                <span className="text-gray-500 text-base md:text-[20px]">Image Placeholder</span>
              </div>

              <div>
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Key Takeaways
                </h3>
                <div className="grid gap-6">
                  <div className="border-l-4 border-melo-blue pl-6 py-2">
                    <h4 className="text-base md:text-[20px] font-bold text-black mb-2">
                      Set the job to be done, align your team
                    </h4>
                    <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                      Establish clarity on what your product needs to accomplish and ensure every team member 
                      understands this core purpose.
                    </p>
                  </div>
                  <div className="border-l-4 border-melo-blue pl-6 py-2">
                    <h4 className="text-base md:text-[20px] font-bold text-black mb-2">
                      Prioritize prototypes over presentations
                    </h4>
                    <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                      Focus on producing tangible prototypes to foster alignment and extract meaningful feedback 
                      early in the process.
                    </p>
                  </div>
                  <div className="border-l-4 border-melo-blue pl-6 py-2">
                    <h4 className="text-base md:text-[20px] font-bold text-black mb-2">
                      Embrace constraints as catalysts
                    </h4>
                    <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                      Use limitations as opportunities for innovation rather than obstacles to overcome.
                    </p>
                  </div>
                  <div className="border-l-4 border-melo-blue pl-6 py-2">
                    <h4 className="text-base md:text-[20px] font-bold text-black mb-2">
                      Plan for the long term
                    </h4>
                    <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8">
                      Think beyond launch day and establish systems for continuous improvement and evolution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 mt-12">
                <h3 className="text-lg md:text-[21px] font-bold text-black mb-6">
                  Next Steps
                </h3>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-6">
                  Transform your approach by applying these principles to your organization. 
                  Begin with small pilot projects and scale successful patterns.
                </p>
                <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-8">
                  Remember, the journey of product development is continuous, with each launch representing 
                  a new beginning. By keeping the user experience at the forefront and committing to these 
                  guiding principles, your team can navigate challenges with confidence and emerge as leaders 
                  in digital innovation.
                </p>
                <button className="bg-black text-white px-8 py-4 text-base md:text-[20px] font-normal hover:bg-gray-800 transition-colors">
                  Download Full Framework
                </button>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="mt-32 pt-16 border-t border-gray-200 mb-16">
            <div className="text-center">
              <h2 className="text-lg md:text-[21px] font-bold text-black mb-6">
                Download the Complete Framework
              </h2>
              <p className="text-base md:text-[20px] font-normal text-black leading-6 md:leading-8 mb-8 max-w-2xl mx-auto">
                Get the complete framework guide with detailed insights and actionable strategies 
                for building superior digital products. Available in PDF format.
              </p>
              <button className="bg-black text-white px-12 py-4 text-base md:text-[20px] font-normal hover:bg-gray-800 transition-colors">
                Download PDF
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
    </>
  )
}
