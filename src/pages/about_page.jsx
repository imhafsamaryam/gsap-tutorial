"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GradientSubtitle from "../components/gradient_subtitle"
import AboutTeam from "../components/about_page/about_team"
import GetInTouch from "../components/get_in_touch"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const AboutPage = () => {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const valuesRef = useRef(null)
  const historyRef = useRef(null)
  const missionRef = useRef(null)

  useGSAP(() => {
    gsap.from(".sticky", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.fromTo(
      imageRef.current,
      { scale: 1.2 },
      {
        scale: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          end: "top top",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      titleRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "top top",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "bottom 70%",
          end: "bottom top",
          scrub: 1,
        },
      },
    )

    // Animate values section
    gsap.from(valuesRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: valuesRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Animate history section
    gsap.from(historyRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: historyRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Animate mission section
    gsap.from(missionRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
  })

  return (
    <div className="min-h-screen relative rounded-b-4xl bg-slate-950">
      <section className="sticky top-0 left-0 right-0 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <div ref={titleRef} className="text-center">
          <h1 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light">
            About Able Software Solutions
          </h1>
        </div>
      </section>

      <img
        ref={imageRef}
        src="images/collab3.jpg"
        alt="Able Software Solutions Team"
        className="mx-auto w-[80vw] md:w-[60vw] h-[70vh] object-cover rounded-[4rem] z-20"
      />

      <div ref={descriptionRef} className="text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
          Empowering Businesses with <br />
          <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
            Innovative Software Solutions
          </span>
        </h1>
      </div>

      {/* Our Story Section */}
      <div ref={historyRef} className="container mx-auto px-[1rem] md:px-[2rem] py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <GradientSubtitle text={"Our Story"} />
            <h2 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light pb-6">
              A Legacy of Excellence
            </h2>
            <div className="space-y-4 text-gray-300 text-justify">
              <p>
                Founded in 2010, Able Software Solutions has grown from a small IT consultancy to a leading provider of
                ERP and accounting software solutions in the UAE. Our journey began with a simple mission: to help
                businesses streamline their operations through innovative technology solutions.
              </p>
              <p>
                Over the years, we've built strong partnerships with industry giants like SAGE, QUICKBOOKS, TALLY, and
                ORACLE NETSUITE, becoming an authorized dealer for these powerful business management platforms. This
                has allowed us to offer our clients the best-in-class software solutions tailored to their specific
                needs.
              </p>
              <p>
                Today, we serve hundreds of businesses across Dubai and the UAE, from small startups to large
                enterprises. Our team of experienced consultants, engineers, and analysts work tirelessly to ensure our
                clients receive the highest level of service and support.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-[200px]">
                <img
                  src="images/collab1.jpg"
                  alt="Company History"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-[200px] mt-8">
                <img
                  src="images/collab2.jpg"
                  alt="Company Growth"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-[200px] mt-4">
                <img
                  src="images/collab3.jpg"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-[200px]">
                <img
                  src="images/collab3.jpg"
                  alt="Client Meeting"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div ref={missionRef} className="bg-slate-900 py-20">
        <div className="container mx-auto px-[1rem] md:px-[2rem]">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
              <GradientSubtitle text={"Our Mission"} />
              <h2 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light pb-8">
                Driving Business Transformation
              </h2>
              <div className="space-y-4 text-gray-300 text-justify">
                <p>
                  At Able Software Solutions, our mission is to empower businesses with cutting-edge technology
                  solutions that drive growth, efficiency, and innovation. We believe that the right software can
                  transform how businesses operate, making them more agile, productive, and competitive in today's
                  fast-paced market.
                </p>
                <p>
                  We're committed to understanding each client's unique challenges and goals, allowing us to recommend
                  and implement solutions that deliver real value. Our approach is collaborative and client-focused,
                  ensuring that the technology we provide aligns perfectly with your business objectives.
                </p>
                <p>
                  Beyond just providing software, we aim to be a trusted technology partner for our clients, offering
                  ongoing support, training, and consultation to help them maximize their investment and adapt to
                  changing business needs.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-br from-[#3c7321] via-[#edeb57] to-[#1a954b] p-[2px] rounded-[2rem]">
                <div className="bg-slate-950 rounded-[1.9rem] p-6">
                  <img
                    src="images/collab3.jpg"
                    alt="Our Mission"
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div ref={valuesRef} className="container mx-auto px-[1rem] md:px-[2rem] py-20">
        <div className="flex justify-center items-center flex-col">
          <GradientSubtitle text={"Our Values"} />
          <h2 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light pb-12  ">
            The Principles That Guide Us
          </h2>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
            <p className="text-gray-400">
              We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our
              interactions with clients, partners, and team members.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
            <p className="text-gray-400">
              We continuously explore new technologies and methodologies to provide our clients with cutting-edge
              solutions that keep them ahead in today's competitive business environment.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Client Focus</h3>
            <p className="text-gray-400">
              We put our clients at the center of everything we do, taking the time to understand their unique needs and
              challenges to deliver tailored solutions that drive real business value.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
            <p className="text-gray-400">
              We strive for excellence in every aspect of our work, from the quality of our software implementations to
              the level of support we provide, ensuring that we exceed client expectations.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Reliability</h3>
            <p className="text-gray-400">
              We are committed to being a dependable partner for our clients, delivering on our promises and providing
              consistent, high-quality service they can count on.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-400">
              We invest in ongoing education and professional development for our team, ensuring we stay at the
              forefront of technology trends and best practices to better serve our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-[1rem] md:px-[2rem] mb-12 text-center">
          <div className="flex justify-center items-center flex-col">
            <GradientSubtitle text={"Our Team"} />
            <h2 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light pb-4">
              Meet the Experts Behind Our Success
            </h2>
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Our team of dedicated professionals brings together decades of experience in software implementation, IT
            support, and business consulting. With diverse backgrounds and specialized expertise, we're equipped to
            handle any challenge and deliver exceptional results for our clients.
          </p>
        </div>

        <AboutTeam />
        {/* Certifications Section */}
        <div className="bg-slate-900 py-20">
          <div className="container mx-auto px-[1rem] md:px-[2rem]">
            <div className="text-center mb-12 flex justify-center items-center flex-col">
              <GradientSubtitle text={"Our Certifications"} />
              <h2 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light mb-6">
                Recognized Excellence
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                As an authorized dealer of leading software solutions, we maintain the highest standards of expertise and
                service quality. Our certifications reflect our commitment to excellence and continuous professional
                development.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="bg-slate-800 p-6 rounded-xl hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                <img src="/images/cert-sage.png" alt="SAGE Certification" className="h-16 w-auto mx-auto" />
              </div>
              <div className="bg-slate-800 p-6 rounded-xl hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                <img src="/images/cert-quickbooks.png" alt="QuickBooks Certification" className="h-16 w-auto mx-auto" />
              </div>
              <div className="bg-slate-800 p-6 rounded-xl hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                <img src="/images/cert-tally.png" alt="Tally Certification" className="h-16 w-auto mx-auto" />
              </div>
              <div className="bg-slate-800 p-6 rounded-xl hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                <img src="/images/cert-oracle.png" alt="Oracle NetSuite Certification" className="h-16 w-auto mx-auto" />
              </div>
              <div className="bg-slate-800 p-6 rounded-xl hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                <img src="/images/cert-microsoft.png" alt="Microsoft Partner" className="h-16 w-auto mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <GetInTouch />
    </div>
  )
}

export default AboutPage
