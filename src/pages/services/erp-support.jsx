"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GradientSubtitle from "../../components/gradient_subtitle"
import GetInTouch from "../../components/get_in_touch"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const ERPSupportPage = () => {
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)
    const featuresRef = useRef(null)
    const processRef = useRef(null)
    const faqRef = useRef(null)

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
            x: -50,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        })

        // Animate content
        gsap.from(contentRef.current, {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        })

        // Animate features
        gsap.from(featuresRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: featuresRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        })

        // Animate process
        gsap.from(processRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: processRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        })

        // Animate FAQ
        gsap.from(faqRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: faqRef.current,
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
                        ERP Support & <br />
                        <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
                            Maintenance
                        </span>
                    </h1>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
                        Comprehensive support and maintenance for your ERP systems to ensure smooth business operations.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                    <div ref={imageRef} className="w-full md:w-1/2">
                        <div className="bg-gradient-to-br from-[#3c7321] via-[#edeb57] to-[#1a954b] p-1 rounded-[2rem]">
                            <div className="bg-slate-950 rounded-[1.9rem] p-6">
                                <img
                                    src="/images/erp-support.jpg"
                                    alt="ERP Support & Maintenance"
                                    className="w-full h-[400px] object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div ref={contentRef} className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-2xl font-semibold text-white">Keeping Your Business Running Smoothly</h2>
                        <p className="text-gray-400">
                            At Able Software Solutions, we understand that your ERP system is the backbone of your business
                            operations. That's why we offer comprehensive support and maintenance services to ensure your systems run
                            smoothly with minimal downtime.
                        </p>
                        <p className="text-gray-400">
                            Our team of experienced ERP specialists is proficient in SAGE, QuickBooks, Tally Prime, and other leading
                            ERP solutions. We provide both remote and on-site support to address any issues that may arise, ensuring
                            that your business operations continue without interruption.
                        </p>
                        <p className="text-gray-400">
                            Whether you need help with system updates, performance optimization, or user training, our support team is
                            just a call away, ready to provide the assistance you need to keep your business running efficiently.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#3c7321] to-[#1a954b] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Get Support Now
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={featuresRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Support Services Include</h2>
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
                            <h3 className="text-xl font-semibold text-white mb-4">24/7 Technical Support</h3>
                            <p className="text-gray-400">
                                Our dedicated support team is available around the clock to address any technical issues that may arise
                                with your ERP system.
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
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Regular System Updates</h3>
                            <p className="text-gray-400">
                                We ensure your ERP system is always up-to-date with the latest features, security patches, and
                                performance improvements.
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
                            <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
                            <p className="text-gray-400">
                                We continuously monitor and optimize your ERP system to ensure it runs at peak performance, even as your
                                business grows.
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
                            <h3 className="text-xl font-semibold text-white mb-4">User Training & Guidance</h3>
                            <p className="text-gray-400">
                                We provide comprehensive training and guidance to help your team make the most of your ERP system's
                                features and capabilities.
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
                            <h3 className="text-xl font-semibold text-white mb-4">Data Backup & Recovery</h3>
                            <p className="text-gray-400">
                                We implement robust backup and recovery solutions to protect your critical business data from loss or
                                corruption.
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
                            <h3 className="text-xl font-semibold text-white mb-4">Customization & Integration</h3>
                            <p className="text-gray-400">
                                We help you customize your ERP system and integrate it with other business applications to create a
                                seamless workflow.
                            </p>
                        </div>
                    </div>
                </div>

                <div ref={processRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Support Process</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3c7321] via-[#edeb57] to-[#1a954b] hidden md:block"></div>

                        <div className="space-y-12 relative">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:text-right">
                                    <h3 className="text-xl font-semibold text-white mb-2">Issue Identification</h3>
                                    <p className="text-gray-400">
                                        Our support process begins with a thorough analysis of the issue at hand, whether it's reported by
                                        your team or detected through our monitoring systems.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Issue Identification</h3>
                                    <p className="text-gray-400">
                                        Our support process begins with a thorough analysis of the issue at hand, whether it's reported by
                                        your team or detected through our monitoring systems.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
                                    <p className="text-gray-400">
                                        Our support team responds promptly to your support requests, with guaranteed response times based on
                                        the severity of the issue.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
                                    <p className="text-gray-400">
                                        Our support team responds promptly to your support requests, with guaranteed response times based on
                                        the severity of the issue.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:text-right">
                                    <h3 className="text-xl font-semibold text-white mb-2">Problem Resolution</h3>
                                    <p className="text-gray-400">
                                        Our experienced technicians work diligently to resolve the issue, using their expertise and
                                        knowledge of your specific ERP system.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Problem Resolution</h3>
                                    <p className="text-gray-400">
                                        Our experienced technicians work diligently to resolve the issue, using their expertise and
                                        knowledge of your specific ERP system.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Follow-up & Prevention</h3>
                                    <p className="text-gray-400">
                                        After resolving the issue, we follow up to ensure everything is working correctly and implement
                                        measures to prevent similar issues in the future.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">4</span>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-semibold text-white mb-2">Follow-up & Prevention</h3>
                                    <p className="text-gray-400">
                                        After resolving the issue, we follow up to ensure everything is working correctly and implement
                                        measures to prevent similar issues in the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={faqRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-4">What ERP systems do you support?</h3>
                            <p className="text-gray-400">
                                We provide support for all major ERP systems including SAGE 300, SAGE 200, QuickBooks, Tally Prime,
                                Oracle NetSuite, and more. Our team is certified and experienced in these platforms.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                How quickly can you respond to support requests?
                            </h3>
                            <p className="text-gray-400">
                                Our standard response time is within 2 hours for critical issues and within 4 hours for non-critical
                                issues. We also offer premium support plans with faster response times.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-4">Do you offer on-site support?</h3>
                            <p className="text-gray-400">
                                Yes, we offer both remote and on-site support depending on the nature of the issue. Our technicians can
                                visit your location in Dubai and across the UAE when needed.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-4">Can you help with ERP customization?</h3>
                            <p className="text-gray-400">
                                We specialize in customizing ERP systems to meet your specific business needs. Our team can develop
                                custom modules, reports, and integrations to enhance your ERP functionality.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-20 bg-slate-900 rounded-3xl p-8 border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                Ready to get started with our ERP support services?
                            </h2>
                            <p className="text-gray-400 mb-6">
                                Contact us today to learn more about how our ERP support and maintenance services can help keep your
                                business running smoothly.
                            </p>
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#3c7321] to-[#1a954b] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                            >
                                Contact Us Now
                            </a>
                        </div>
                        <div className="md:w-1/3">
                            <img src="/images/contact-support.jpg" alt="Contact Support" className="w-full h-auto rounded-xl" />
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

export default ERPSupportPage
