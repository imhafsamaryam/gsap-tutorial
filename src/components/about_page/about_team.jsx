"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const teamMembers = [
  {
    name: "Ahmed Al-Mansouri",
    position: "CEO & Founder",
    image: "images/collab3.jpg",
    description:
      "With over 20 years of experience in IT and business management, Ahmed leads our company with vision and expertise.",
  },
  {
    name: "Sarah Johnson",
    position: "Technical Director",
    image: "images/collab3.jpg",
    description:
      "Sarah oversees all technical implementations, ensuring our solutions meet the highest standards of quality and performance.",
  },
  {
    name: "Rajiv Patel",
    position: "Senior ERP Consultant",
    image: "images/collab3.jpg",
    description:
      "Rajiv specializes in SAGE and Oracle NetSuite implementations, with a deep understanding of business processes across industries.",
  },
]

const AboutTeam = () => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const centerRef = useRef(null)
  const containerRef = useRef(null)
  const teamInfoRef = useRef(null)

  useGSAP(() => {
    gsap.to(leftRef.current, {
      y: "50vh",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top top",
        end: `+=800 center`,
      },
    })

    gsap.to(centerRef.current, {
      y: "-50vh",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top top",
        end: `+=800 center`,
      },
    })

    gsap.to(rightRef.current, {
      y: "50vh",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top top",
        end: `+=800 center`,
      },
    })

    gsap.from(teamInfoRef.current, {
      // opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: teamInfoRef.current,
        start: "top 20%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
      },
    })
  })

  return (
    <>
      <div ref={containerRef} className="h-[150vh] pb-22  relative">
        <div className="sticky top-0 h-screen flex justify-center gap-8">
          <div className="flex flex-col justify-between items-center">
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 text-lg h-[45vh] flex flex-col justify-center items-center text-white font-bold mt-4">
                {teamMembers[0].position}
              </div>
              <img
                ref={leftRef}
                src={teamMembers[0].image || "/placeholder.svg"}
                alt={teamMembers[0].name}
                className="rounded-[4rem] hover:shadow-[4px_4px_35px_#578340] w-[24vw] h-[50vh] object-cover"
              />
            </div>
            <div className="text-lg h-[45vh] flex flex-col justify-center items-center text-white font-bold mt-4">
              {teamMembers[0].name}
            </div>
          </div>

          <div className="flex flex-col justify-between items-center">
            <div className="text-lg h-[45vh] flex flex-col justify-center items-center text-white font-bold mt-4">
              {teamMembers[1].position}
            </div>
            <div className="relative">
              <img
                ref={centerRef}
                src={teamMembers[1].image || "/placeholder.svg"}
                alt={teamMembers[1].name}
                className="rounded-[4rem] hover:shadow-[4px_4px_35px_#578340] w-[24vw] h-[50vh] object-cover"
              />
              <div className="absolute top-0 left-0 right-0 text-lg h-[45vh] flex flex-col justify-center items-center text-white font-bold mt-4">
                {teamMembers[1].name}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center">
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 text-lg h-[45vh] flex flex-col justify-center items-center text-white font-bold mt-4">
                {teamMembers[2].position}
              </div>
              <img
                ref={rightRef}
                src={teamMembers[2].image || "/placeholder.svg"}
                alt={teamMembers[2].name}
                className="rounded-[4rem] hover:shadow-[4px_4px_35px_#578340] w-[24vw] h-[50vh] object-cover"
              />
            </div>
            <div className="text-lg h-[45vh] flex flex-col justify-center items-center text-white font-bold mt-4">
              {teamMembers[2].name}
            </div>
          </div>
        </div>
      </div>

      {/* <div ref={teamInfoRef} className="container mx-auto px-[1rem] md:px-[2rem] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-[#edeb57] mb-4">{member.position}</p>
              <p className="text-gray-400">{member.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  )
}

export default AboutTeam
