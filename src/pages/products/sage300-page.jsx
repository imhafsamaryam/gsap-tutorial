"use client"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GetInTouch from "../../components/get_in_touch"
import ProductHero from "../../components/products/product-hero"
import ProductFeatures from "../../components/products/product-features"
import ProductModules from "../../components/products/product-modules"
import ProductBenefits from "../../components/products/product-benefits"
import ProductCTA from "../../components/products/product-cta"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Sage300Page = () => {
    const features = [
        {
            title: "Smart Dashboards",
            description:
                "Customizable dashboards provide real-time insights into your manufacturing operations, helping you make informed decisions quickly.",
            icon: (
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            ),
            shadowColor: "rgba(87,131,64,0.2)",
        },
        {
            title: "Report Consolidation",
            description:
                "Easily consolidate reports from multiple companies, giving you a comprehensive view of your entire business operations.",
            icon: (
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
            ),
            shadowColor: "rgba(87,131,64,0.2)",
        },
        {
            title: "Easy Customization",
            description:
                "Tailor SAGE 300 to your specific business needs with easy customization options and seamless integration with other systems.",
            icon: (
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            shadowColor: "rgba(87,131,64,0.2)",
        },
        {
            title: "Multi-location Inventory",
            description:
                "Efficiently manage inventory across multiple locations, ensuring optimal stock levels and reducing carrying costs.",
            icon: (
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            shadowColor: "rgba(87,131,64,0.2)",
        },
    ]

    const modules = [
        {
            title: "Financial Management",
            description:
                "Comprehensive financial management tools to handle all your accounting needs, from general ledger to accounts payable and receivable.",
            image: "/images/financial-management.jpg",
            features: ["General Ledger", "Accounts Payable", "Accounts Receivable"],
        },
        {
            title: "Operations Management",
            description:
                "Streamline your operations with powerful tools for inventory management, purchasing, and order entry.",
            image: "/images/operations-management.jpg",
            features: ["Inventory Control", "Purchase Orders", "Order Entry"],
        },
        {
            title: "Manufacturing",
            description:
                "Specialized manufacturing modules to optimize production processes, manage shop floor activities, and control costs.",
            image: "/images/manufacturing.jpg",
            features: ["Production Planning", "Shop Floor Control", "Material Requirements Planning"],
        },
        {
            title: "Project Management",
            description: "Track and manage projects with ease, ensuring they stay on schedule and within budget.",
            image: "/images/project-management.jpg",
            features: ["Project Tracking", "Time and Expense Management", "Resource Allocation"],
        },
        {
            title: "Business Intelligence",
            description: "Gain valuable insights into your business with powerful reporting and analytics tools.",
            image: "/images/business-intelligence.jpg",
            features: ["Advanced Analytics", "Custom Reporting", "Executive Dashboards"],
        },
        {
            title: "Human Resources",
            description: "Manage your workforce effectively with comprehensive HR and payroll management tools.",
            image: "/images/human-resources.jpg",
            features: ["Payroll Management", "Employee Records", "Benefits Administration"],
        },
    ]

    const benefits = [
        {
            title: "Increased Productivity",
            description: "Streamline processes and automate routine tasks to boost productivity across your organization.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
        {
            title: "Enhanced Security",
            description: "Protect your business data with robust security features and role-based access controls.",
            icon: (
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
            ),
        },
        {
            title: "Cost Reduction",
            description:
                "Optimize inventory levels, reduce waste, and improve resource allocation to lower operational costs.",
            icon: (
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
            ),
        },
        {
            title: "Better Decision Making",
            description: "Access real-time data and insights to make informed decisions that drive business growth.",
            icon: (
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
            ),
        },
        {
            title: "Scalability",
            description: "Grow your business with confidence, knowing that SAGE 300 can scale to meet your evolving needs.",
            icon: (
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
            ),
        },
        {
            title: "Improved Collaboration",
            description:
                "Enhance communication and collaboration across departments with integrated workflows and shared data.",
            icon: (
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
            ),
        },
    ]

    const heroContent = (
        <>
            <h2 className="text-2xl font-semibold text-white">Powerful ERP for Manufacturing Excellence</h2>
            <p className="text-gray-400">
                SAGE 300 offers Standard and Advanced manufacturing features catering to mid-size and enterprise level
                industries. Shop floor management was never been this easier and effective for the optimum use of resources and
                accurate costing.
            </p>
            <p className="text-gray-400">
                With SAGE 300, you can streamline your manufacturing processes, improve inventory management, and gain real-time
                insights into your operations. The system is highly customizable and can be tailored to meet the specific needs
                of your manufacturing business.
            </p>
            <p className="text-gray-400">
                As an authorized dealer of SAGE products, we provide comprehensive implementation, training, and support
                services to ensure you get the most out of your SAGE 300 investment.
            </p>
            <div className="pt-4">
                <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#3c7321] to-[#578340] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                    Request a Demo
                </a >
            </div>
        </>
    )

    return (
        <div className="min-h-screen rounded-b-4xl bg-slate-950">
            <div className="container mx-auto px-[1rem] md:px-[2rem] pt-[20vh]">
                <ProductHero
                    subtitle="Our Products"
                    title="SAGE 300"
                    highlightedText="IDEAL FOR MANUFACTURING"
                    description="Comprehensive ERP solution for mid-size and enterprise level manufacturing industries."
                    image="/images/sage300.webp"
                    color="from-[#3c7321] via-[#578340] to-[#3c7321]"
                    imagePosition="left"
                    content={heroContent}
                />

                <ProductFeatures title="Key Features" features={features} colorClass="from-[#3c7321] to-[#578340]" />

                <ProductModules title="SAGE 300 Modules" modules={modules} dotColor="#578340" />

                <ProductBenefits title="Benefits of SAGE 300" benefits={benefits} colorClass="from-[#3c7321] to-[#578340]" />

                <ProductCTA
                    title="Ready to transform your manufacturing business?"
                    description="Contact us today to learn more about SAGE 300 and how it can help streamline your manufacturing operations."
                    buttonText="Get Started with SAGE 300"
                    buttonLink="/contact"
                    image="/images/sage300-cta.jpg"
                    colorClass="from-[#3c7321] to-[#578340]"
                />
            </div>

            <div className="py-16">
                <GetInTouch />
            </div>
        </div>
    )
}

export default Sage300Page
