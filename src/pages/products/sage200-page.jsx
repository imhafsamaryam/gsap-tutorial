"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GradientSubtitle from "../../components/gradient_subtitle"
import GetInTouch from "../../components/get_in_touch"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Sage200Page = () => {
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
                        SAGE 200 <br />
                        <span className="font-bold bg-gradient-to-r from-[#edeb57] via-[#c9c74a] to-[#edeb57] text-transparent bg-clip-text drop-shadow-2xl">
                            SMART MANAGEMENT OF TRADING
                        </span>
                    </h1>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
                        Comprehensive business management solution for trading and distribution businesses.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
                    <div ref={imageRef} className="w-full md:w-1/2">
                        <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] p-1 rounded-[2rem]">
                            <div className="bg-slate-950 rounded-[1.9rem] p-6">
                                <img src="/images/sage200.webp" alt="SAGE 200" className="w-full h-[400px] object-cover rounded-xl" />
                            </div>
                        </div>
                    </div>
                    <div ref={contentRef} className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-2xl font-semibold text-white">Complete Business Management Solution</h2>
                        <p className="text-gray-400">
                            Sage 200 Evolution offers full financial management, including invoicing orders, accounts receivable,
                            accounts payable, inventory, and order fulfillment, as well as built-in CRM features to meet the needs of
                            a wide range of industries.
                        </p>
                        <p className="text-gray-400">
                            With SAGE 200, you can streamline your business processes, improve customer relationships, and gain
                            real-time insights into your operations. The system is highly customizable and can be tailored to meet the
                            specific needs of your trading business.
                        </p>
                        <p className="text-gray-400">
                            As an authorized dealer of SAGE products, we provide comprehensive implementation, training, and support
                            services to ensure you get the most out of your SAGE 200 investment.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#edeb57] to-[#c9c74a] text-slate-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Request a Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={featuresRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <h3 className="text-xl font-semibold text-white mb-4">Full Financial Management</h3>
                            <p className="text-gray-400">
                                Comprehensive financial tools including general ledger, accounts payable, accounts receivable, and cash
                                management.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <h3 className="text-xl font-semibold text-white mb-4">Built-in CRM Features</h3>
                            <p className="text-gray-400">
                                Manage customer relationships effectively with integrated CRM tools for sales, marketing, and customer
                                service.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <h3 className="text-xl font-semibold text-white mb-4">Inventory Tracking</h3>
                            <p className="text-gray-400">
                                Efficiently manage inventory with real-time tracking, automated reordering, and multi-location support.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <h3 className="text-xl font-semibold text-white mb-4">Order Fulfillment</h3>
                            <p className="text-gray-400">
                                Streamline the order fulfillment process from quote to invoice, improving customer satisfaction and
                                reducing errors.
                            </p>
                        </div>
                    </div>
                </div>

                <div ref={modulesRef} className="mb-20">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">SAGE 200 Modules</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/financial-management.jpg"
                                    alt="Financial Management"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Financial Management</h3>
                                <p className="text-gray-400 mb-4">
                                    Comprehensive financial management tools to handle all your accounting needs, from general ledger to
                                    accounts payable and receivable.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        General Ledger
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Accounts Payable
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Accounts Receivable
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/crm.jpg"
                                    alt="Customer Relationship Management"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Customer Relationship Management</h3>
                                <p className="text-gray-400 mb-4">
                                    Build stronger customer relationships with integrated CRM tools for sales, marketing, and customer
                                    service.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Contact Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Sales Pipeline
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Marketing Campaigns
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
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
                                    Efficiently manage your inventory with real-time tracking, automated reordering, and multi-location
                                    support.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Stock Control
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Warehouse Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Barcode Scanning
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/sales-order.jpg"
                                    alt="Sales Order Processing"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Sales Order Processing</h3>
                                <p className="text-gray-400 mb-4">
                                    Streamline your sales process from quote to invoice, improving customer satisfaction and reducing
                                    errors.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Quote Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Order Processing
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Invoicing
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/purchase-order.jpg"
                                    alt="Purchase Order Processing"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Purchase Order Processing</h3>
                                <p className="text-gray-400 mb-4">
                                    Manage your purchasing process efficiently, from requisition to payment, ensuring you get the best
                                    value from suppliers.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Requisition Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Supplier Management
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Purchase Order Tracking
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(237,235,87,0.2)] transition-all duration-500">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="/images/business-intelligence.jpg"
                                    alt="Business Intelligence"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Business Intelligence</h3>
                                <p className="text-gray-400 mb-4">
                                    Gain valuable insights into your business with powerful reporting and analytics tools.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Advanced Analytics
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Custom Reporting
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                        Executive Dashboards
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={benefitsRef} className="mb-20 bg-slate-900 rounded-3xl p-12 border border-gray-800">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Benefits of SAGE 200</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <h3 className="text-xl font-semibold text-white mb-2">Increased Efficiency</h3>
                            <p className="text-gray-400">
                                Streamline processes and automate routine tasks to boost efficiency across your organization.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <h3 className="text-xl font-semibold text-white mb-2">Improved Customer Service</h3>
                            <p className="text-gray-400">
                                Access customer information quickly and easily, enabling your team to provide better service and build
                                stronger relationships.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                            <p className="text-gray-400">
                                Optimize inventory levels, reduce waste, and improve resource allocation to lower operational costs.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                                Grow your business with confidence, knowing that SAGE 200 can scale to meet your evolving needs.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-[#edeb57] to-[#c9c74a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-slate-900"
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
                            <h2 className="text-2xl font-semibold text-white mb-4">Ready to optimize your trading business?</h2>
                            <p className="text-gray-400 mb-6">
                                Contact us today to learn more about SAGE 200 and how it can help streamline your trading operations.
                            </p>
                            <a
                                href="/contact"
                                className="bg-gradient-to-r from-[#edeb57] to-[#c9c74a] text-slate-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                            >
                                Get Started with SAGE 200
                            </a>
                        </div>
                        <div className="md:w-1/3">
                            <img src="/images/sage200-cta.jpg" alt="SAGE 200" className="w-full h-auto rounded-xl" />
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

export default Sage200Page
