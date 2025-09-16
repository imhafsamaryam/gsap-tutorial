"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GradientSubtitle from "../../components/gradient_subtitle"
import GetInTouch from "../../components/get_in_touch"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const SecurityInstallationPage = () => {
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)
    const servicesRef = useRef(null)
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
                        Security <br />
                        <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
                            Installation
                        </span>
                    </h1>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
                        Comprehensive security solutions to protect your business assets and provide peace of mind.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
                    <div ref={imageRef} className="w-full md:w-1/2">
                        <div className="bg-gradient-to-br from-[#3c7321] via-[#edeb57] to-[#1a954b] p-1 rounded-[2rem]">
                            <div className="bg-slate-950 rounded-[1.9rem] p-6">
                                <img
                                    src="/images/security-installation.jpg"
                                    alt="Security Installation"
                                    className="w-full h-[400px] object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div ref={contentRef} className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-2xl font-semibold text-white">Protecting What Matters Most</h2>
                        <p className="text-gray-400">
                            At Able Software Solutions, we understand that protecting your business assets is a top priority. Our
                            security installation services are designed to provide comprehensive protection for your premises,
                            equipment, and data.
                        </p>
                        <p className="text-gray-400">
                            From a single camera to complex multi-location security systems, our team will design and install security
                            solutions tailored to your specific needs. We integrate these systems seamlessly into your existing
                            infrastructure, ensuring maximum protection with minimal disruption.
                        </p>
                        <p className="text-gray-400">
                            Our security experts stay up-to-date with the latest technologies and best practices, allowing us to offer
                            cutting-edge solutions that provide reliable protection and peace of mind for your business.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#3c7321] to-[#1a954b] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Secure Your Business
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={servicesRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Security Solutions</h2>
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
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">CCTV Installation</h3>
                            <p className="text-gray-400">
                                We install high-quality CCTV systems with advanced features like motion detection, night vision, and
                                remote monitoring to keep your premises under surveillance 24/7.
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
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Access Control Systems</h3>
                            <p className="text-gray-400">
                                Our access control solutions allow you to manage who can enter specific areas of your premises,
                                providing enhanced security and detailed access logs.
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
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Alarm & Monitoring Setup</h3>
                            <p className="text-gray-400">
                                We install and configure alarm systems that detect unauthorized entry, fire, or other emergencies, with
                                options for 24/7 professional monitoring.
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
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Security System Integration</h3>
                            <p className="text-gray-400">
                                We integrate your various security systems into a unified platform, allowing for centralized control and
                                monitoring of all security components.
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
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Remote Monitoring Solutions</h3>
                            <p className="text-gray-400">
                                Our remote monitoring solutions allow you to keep an eye on your premises from anywhere, using your
                                smartphone, tablet, or computer.
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
                            <h3 className="text-xl font-semibold text-white mb-4">Maintenance & Support</h3>
                            <p className="text-gray-400">
                                We provide ongoing maintenance and support for your security systems, ensuring they continue to function
                                optimally and are updated with the latest features.
                            </p>
                        </div>
                    </div>
                </div>

                <div ref={processRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Installation Process</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3c7321] via-[#edeb57] to-[#1a954b] hidden md:block"></div>

                        <div className="space-y-12 relative">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:text-right">
                                    <h3 className="text-xl font-semibold text-white mb-2">Initial Consultation</h3>
                                    <p className="text-gray-400">
                                        We begin with a thorough consultation to understand your security needs, concerns, and budget. This
                                        helps us design a solution that's tailored to your specific requirements.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Initial Consultation</h3>
                                    <p className="text-gray-400">
                                        We begin with a thorough consultation to understand your security needs, concerns, and budget. This
                                        helps us design a solution that's tailored to your specific requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Site Assessment</h3>
                                    <p className="text-gray-400">
                                        Our security experts conduct a comprehensive assessment of your premises to identify vulnerabilities
                                        and determine the optimal placement for security equipment.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-semibold text-white mb-2">Site Assessment</h3>
                                    <p className="text-gray-400">
                                        Our security experts conduct a comprehensive assessment of your premises to identify vulnerabilities
                                        and determine the optimal placement for security equipment.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:text-right">
                                    <h3 className="text-xl font-semibold text-white mb-2">Custom Design</h3>
                                    <p className="text-gray-400">
                                        Based on our assessment, we design a custom security solution that addresses your specific needs and
                                        provides comprehensive protection for your business.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Custom Design</h3>
                                    <p className="text-gray-400">
                                        Based on our assessment, we design a custom security solution that addresses your specific needs and
                                        provides comprehensive protection for your business.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Professional Installation</h3>
                                    <p className="text-gray-400">
                                        Our skilled technicians install your security systems with minimal disruption to your business
                                        operations, ensuring all components are properly configured and tested.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">4</span>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-semibold text-white mb-2">Professional Installation</h3>
                                    <p className="text-gray-400">
                                        Our skilled technicians install your security systems with minimal disruption to your business
                                        operations, ensuring all components are properly configured and tested.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:text-right">
                                    <h3 className="text-xl font-semibold text-white mb-2">Training & Handover</h3>
                                    <p className="text-gray-400">
                                        We provide comprehensive training on how to use your new security systems, ensuring you can maximize
                                        their effectiveness and respond appropriately to alerts.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">5</span>
                                </div>
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Training & Handover</h3>
                                    <p className="text-gray-400">
                                        We provide comprehensive training on how to use your new security systems, ensuring you can maximize
                                        their effectiveness and respond appropriately to alerts.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="md:w-1/2 md:hidden">
                                    <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
                                    <p className="text-gray-400">
                                        We offer ongoing maintenance and support to ensure your security systems continue to function
                                        optimally and can be updated as your business needs evolve.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] w-12 h-12 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold">6</span>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
                                    <p className="text-gray-400">
                                        We offer ongoing maintenance and support to ensure your security systems continue to function
                                        optimally and can be updated as your business needs evolve.
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
                            <h3 className="text-xl font-semibold text-white mb-4">
                                What types of businesses do you provide security installations for?
                            </h3>
                            <p className="text-gray-400">
                                We provide security installations for a wide range of businesses, including retail stores, offices,
                                warehouses, manufacturing facilities, schools, and healthcare facilities. Our solutions are customized
                                to meet the specific security needs of each business type.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                How long does a typical security installation take?
                            </h3>
                            <p className="text-gray-400">
                                The duration of a security installation depends on the size and complexity of the project. A small
                                installation might take just a day, while larger, more complex systems could take several days to a
                                week. We always provide a timeline estimate before beginning the installation.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-4">Can I monitor my security systems remotely?</h3>
                            <p className="text-gray-400">
                                Yes, we offer remote monitoring solutions that allow you to view live feeds from your security cameras,
                                receive alerts, and control your security systems from anywhere using your smartphone, tablet, or
                                computer.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Do you offer maintenance services for security systems?
                            </h3>
                            <p className="text-gray-400">
                                Yes, we offer comprehensive maintenance services to ensure your security systems continue to function
                                optimally. This includes regular inspections, software updates, hardware maintenance, and prompt repairs
                                when needed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-20 bg-slate-900 rounded-3xl p-8 border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold text-white mb-4">Ready to secure your business?</h2>
                            <p className="text-gray-400 mb-6">
                                Contact us today to schedule a consultation and learn how our security installation services can help
                                protect your business assets.
                            </p>
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#3c7321] to-[#1a954b] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                            >
                                Get a Security Assessment
                            </a>
                        </div>
                        <div className="md:w-1/3">
                            <img src="/images/security-cta.jpg" alt="Security Installation" className="w-full h-auto rounded-xl" />
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

export default SecurityInstallationPage
