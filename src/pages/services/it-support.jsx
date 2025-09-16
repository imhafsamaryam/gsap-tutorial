"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GradientSubtitle from "../../components/gradient_subtitle"
import GetInTouch from "../../components/get_in_touch"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const ITSupportPage = () => {
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)
    const servicesRef = useRef(null)
    const benefitsRef = useRef(null)
    const testimonialsRef = useRef(null)

    useGSAP(() => {
        // Animate title
        gsap.from(titleRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.2,
            ease: "power3.out",
        })

        // Animate image
        gsap.from(imageRef.current, {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        })

        // Animate content
        gsap.from(contentRef.current, {
            opacity: 0,
            x: -50,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        })

        // Animate services
        gsap.from(servicesRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        })

        // Animate benefits
        gsap.from(benefitsRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: benefitsRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        })

        // Animate testimonials
        gsap.from(testimonialsRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: testimonialsRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        })
    })

    return (
        <div className="min-h-screen rounded-b-4xl bg-slate-950">
            <div className="container mx-auto px-[1rem] md:px-[2rem] pt-[20vh]">
                <div ref={titleRef} className="text-center mb-16">
                    <GradientSubtitle text={"Our Services"} />
                    <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
                        Professional IT <br />
                        <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
                            Support Services
                        </span>
                    </h1>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
                        Reliable IT support services to keep your business technology running smoothly.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
                    <div ref={imageRef} className="w-full md:w-1/2">
                        <div className="bg-gradient-to-br from-[#3c7321] via-[#edeb57] to-[#1a954b] p-1 rounded-[2rem]">
                            <div className="bg-slate-950 rounded-[1.9rem] p-6">
                                <img
                                    src="/images/it-support.jpg"
                                    alt="IT Support Services"
                                    className="w-full h-[400px] object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div ref={contentRef} className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-2xl font-semibold text-white">Expert IT Support When You Need It</h2>
                        <p className="text-gray-400">
                            At Able Software Solutions, we understand that technology issues can disrupt your business operations and
                            impact productivity. That's why we offer comprehensive IT support services to address any problems that
                            may arise with your software and hardware systems.
                        </p>
                        <p className="text-gray-400">
                            Our team of experienced IT professionals is available to provide both remote and on-site assistance,
                            ensuring that your technology infrastructure remains reliable and efficient. We take a proactive approach
                            to IT support, identifying and resolving potential issues before they become major problems.
                        </p>
                        <p className="text-gray-400">
                            Whether you need help with troubleshooting, system configuration, or user training, our support team is
                            just a call away, ready to provide the assistance you need to keep your business running smoothly.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#3c7321] to-[#1a954b] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Request IT Support
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={servicesRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our IT Support Services</h2>
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
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Remote Troubleshooting</h3>
                            <p className="text-gray-400">
                                Our team can remotely diagnose and resolve many IT issues, minimizing downtime and getting your systems
                                back up and running quickly.
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
                            <h3 className="text-xl font-semibold text-white mb-4">On-site Technical Assistance</h3>
                            <p className="text-gray-400">
                                For issues that require hands-on attention, our technicians can visit your location to provide on-site
                                support and resolve complex problems.
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
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Hardware Diagnostics</h3>
                            <p className="text-gray-400">
                                We can diagnose and resolve hardware issues with your computers, servers, printers, and other devices to
                                keep your equipment running optimally.
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
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Software Configuration</h3>
                            <p className="text-gray-400">
                                We help configure your software applications to work optimally with your hardware and business
                                processes, ensuring maximum efficiency.
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
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Network Troubleshooting</h3>
                            <p className="text-gray-400">
                                We diagnose and resolve network issues to ensure reliable connectivity and optimal performance for your
                                business operations.
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
                            <h3 className="text-xl font-semibold text-white mb-4">User Training</h3>
                            <p className="text-gray-400">
                                We provide training for your staff to help them effectively use your IT systems and troubleshoot common
                                issues on their own.
                            </p>
                        </div>
                    </div>
                </div>

                <div ref={benefitsRef} className="mb-20 bg-slate-900 rounded-3xl p-12 border border-gray-800">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Benefits of Our IT Support Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] min-w-[3rem] h-12 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
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
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Minimized Downtime</h3>
                                <p className="text-gray-400">
                                    Our quick response times and efficient troubleshooting help minimize system downtime, keeping your
                                    business operations running smoothly.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] min-w-[3rem] h-12 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
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
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3>
                                <p className="text-gray-400">
                                    We help identify and address security vulnerabilities in your IT systems, protecting your business
                                    data from threats.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] min-w-[3rem] h-12 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Improved Productivity</h3>
                                <p className="text-gray-400">
                                    By resolving IT issues quickly and efficiently, we help your team stay productive and focused on their
                                    core responsibilities.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] min-w-[3rem] h-12 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Cost-Effective Solutions</h3>
                                <p className="text-gray-400">
                                    Our support services help you avoid costly emergency repairs and extend the life of your IT equipment,
                                    saving you money in the long run.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] min-w-[3rem] h-12 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
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
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Proactive Maintenance</h3>
                                <p className="text-gray-400">
                                    We take a proactive approach to IT support, identifying and addressing potential issues before they
                                    cause problems for your business.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] min-w-[3rem] h-12 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Expert Guidance</h3>
                                <p className="text-gray-400">
                                    Our experienced IT professionals provide expert guidance on technology decisions, helping you make
                                    informed choices for your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={testimonialsRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img src="/images/testimonial-1.jpg" alt="Client" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Mohammed Al-Farsi</h3>
                                    <p className="text-gray-400 text-sm">CEO, Al-Farsi Trading</p>
                                </div>
                            </div>
                            <p className="text-gray-400">
                                "The IT support team at Able Software Solutions has been a lifesaver for our business. They respond
                                quickly to our support requests and always find effective solutions to our technical issues."
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img src="/images/testimonial-2.jpg" alt="Client" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Priya Sharma</h3>
                                    <p className="text-gray-400 text-sm">Operations Manager, Global Logistics LLC</p>
                                </div>
                            </div>
                            <p className="text-gray-400">
                                "We've been working with Able Software Solutions for over three years now, and their IT support has been
                                exceptional. Their team is knowledgeable, professional, and always available when we need them."
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img src="/images/testimonial-3.jpg" alt="Client" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Ahmed Hassan</h3>
                                    <p className="text-gray-400 text-sm">IT Director, Emirates Construction</p>
                                </div>
                            </div>
                            <p className="text-gray-400">
                                "The remote troubleshooting service from Able Software Solutions has saved us countless hours of
                                downtime. Their team can quickly diagnose and resolve most issues without even having to visit our
                                office."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-20 bg-slate-900 rounded-3xl p-8 border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold text-white mb-4">Need IT support for your business?</h2>
                            <p className="text-gray-400 mb-6">
                                Contact us today to learn more about our IT support services and how we can help keep your technology
                                running smoothly.
                            </p>
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#3c7321] to-[#1a954b] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                            >
                                Get IT Support Now
                            </a>
                        </div>
                        <div className="md:w-1/3">
                            <img src="/images/it-support-cta.jpg" alt="IT Support" className="w-full h-auto rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16">
                <GetInTouch />
            </div>
        </div>
    )
}

export default ITSupportPage
