"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GradientSubtitle from "../../components/gradient_subtitle"
import GetInTouch from "../../components/get_in_touch"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const BusyAccountingPage = () => {
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)
    const featuresRef = useRef(null)
    const benefitsRef = useRef(null)
    const modulesRef = useRef(null)

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

        // Animate modules
        gsap.from(modulesRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: modulesRef.current,
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
                    <GradientSubtitle text={"Our Products"} />
                    <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
                        BUSY Accounting <br />
                        <span className="font-bold bg-gradient-to-r from-[#1a954b] via-[#167a3d] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
                            EASE IN DISTRIBUTION
                        </span>
                    </h1>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
                        Complete accounting solution for growing businesses with strategic distribution handling.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                    <div ref={imageRef} className="w-full md:w-1/2">
                        <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] p-1 rounded-[2rem]">
                            <div className="bg-slate-950 rounded-[1.9rem] p-6">
                                <img
                                    src="/images/busy.webp"
                                    alt="BUSY Accounting"
                                    className="w-full h-[400px] object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div ref={contentRef} className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-2xl font-semibold text-white">Complete Business Solution</h2>
                        <p className="text-gray-400">
                            Accounting Software for Growing Businesses in Its Entirety. Make the switch to a full-service company
                            solution. Upgrade to Busy accounting mode for strategic handling of the distribution cycle with
                            unprecedented productivity and control.
                        </p>
                        <p className="text-gray-400">
                            With BUSY Accounting, you can streamline your distribution processes, improve inventory management, and
                            gain real-time insights into your operations. The system is designed to be user-friendly while providing
                            powerful features for growing businesses.
                        </p>
                        <p className="text-gray-400">
                            As an authorized dealer of BUSY Accounting, we provide comprehensive implementation, training, and support
                            services to ensure you get the most out of your investment.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#1a954b] to-[#167a3d] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Request a Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={featuresRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
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
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Precise Stock Management</h3>
                            <p className="text-gray-400">
                                Maintain accurate stock levels with real-time tracking, batch tracking, and multi-location inventory
                                management.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
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
                            <h3 className="text-xl font-semibold text-white mb-4">Rapid Inventory Transactions</h3>
                            <p className="text-gray-400">
                                Process inventory transactions quickly and accurately, improving efficiency and reducing errors in your
                                distribution cycle.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
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
                            <h3 className="text-xl font-semibold text-white mb-4">Strategic Distribution</h3>
                            <p className="text-gray-400">
                                Optimize your distribution processes with strategic planning tools, route optimization, and delivery
                                scheduling.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
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
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Full-Service Solution</h3>
                            <p className="text-gray-400">
                                A comprehensive business solution that covers accounting, inventory, sales, purchases, and more in a
                                single integrated platform.
                            </p>
                        </div>
                    </div>
                </div>

                <div ref={modulesRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">BUSY Accounting Modules</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/accounting.jpg"
                                    alt="Accounting"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Accounting</h3>
                                <p className="text-gray-400 mb-4">
                                    Comprehensive accounting tools to manage your financial transactions, including general ledger,
                                    accounts payable, and accounts receivable.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        General Ledger
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Bank Reconciliation
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Financial Reporting
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/inventory.jpg"
                                    alt="Inventory Management"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Inventory Management</h3>
                                <p className="text-gray-400 mb-4">
                                    Efficiently manage your inventory with real-time tracking, batch tracking, and multi-location support.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Stock Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Batch Tracking
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Multi-location Support
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/sales.jpg"
                                    alt="Sales Management"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Sales Management</h3>
                                <p className="text-gray-400 mb-4">
                                    Streamline your sales process from quotation to invoice, improving customer satisfaction and reducing
                                    errors.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Quotation Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Sales Order Processing
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Invoicing
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/purchase.jpg"
                                    alt="Purchase Management"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Purchase Management</h3>
                                <p className="text-gray-400 mb-4">
                                    Manage your purchasing process efficiently, from purchase order to payment, ensuring you get the best
                                    value from suppliers.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Purchase Order Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Supplier Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Purchase Invoice Processing
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/distribution.jpg"
                                    alt="Distribution Management"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Distribution Management</h3>
                                <p className="text-gray-400 mb-4">
                                    Optimize your distribution processes with strategic planning tools, route optimization, and delivery
                                    scheduling.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Route Planning
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Delivery Scheduling
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Distribution Analytics
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(26,149,75,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/reporting.jpg"
                                    alt="Reporting & Analytics"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Reporting & Analytics</h3>
                                <p className="text-gray-400 mb-4">
                                    Gain valuable insights into your business with powerful reporting and analytics tools.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Financial Reports
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Inventory Reports
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#1a954b] rounded-full mr-2"></span>
                                        Sales & Purchase Analytics
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={benefitsRef} className="mb-20 bg-slate-900 rounded-3xl p-12 border border-gray-800">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Benefits of BUSY Accounting</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                            <h3 className="text-xl font-semibold text-white mb-2">Increased Productivity</h3>
                            <p className="text-gray-400">
                                Streamline processes and automate routine tasks to boost productivity across your organization.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Cost Efficiency</h3>
                            <p className="text-gray-400">
                                Optimize inventory levels, reduce waste, and improve resource allocation to lower operational costs.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                            <h3 className="text-xl font-semibold text-white mb-2">Simplified Compliance</h3>
                            <p className="text-gray-400">
                                Stay compliant with tax regulations and financial reporting requirements with built-in compliance
                                features.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Better Decision Making</h3>
                            <p className="text-gray-400">
                                Access real-time data and insights to make informed decisions that drive business growth.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                            <h3 className="text-xl font-semibold text-white mb-2">Scalability</h3>
                            <p className="text-gray-400">
                                Grow your business with confidence, knowing that BUSY Accounting can scale to meet your evolving needs.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#1a954b] to-[#167a3d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                            <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3>
                            <p className="text-gray-400">
                                Protect your business data with robust security features and role-based access controls.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-20 bg-slate-900 rounded-3xl p-8 border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                Ready to streamline your distribution business?
                            </h2>
                            <p className="text-gray-400 mb-6">
                                Contact us today to learn more about BUSY Accounting and how it can help optimize your distribution
                                operations.
                            </p>
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#1a954b] to-[#167a3d] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                            >
                                Get Started with BUSY Accounting
                            </a>
                        </div>
                        <div className="md:w-1/3">
                            <img src="/images/busy-cta.jpg" alt="BUSY Accounting" className="w-full h-auto rounded-xl" />
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

export default BusyAccountingPage
