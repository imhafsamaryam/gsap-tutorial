"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GradientSubtitle from "../components/gradient_subtitle"
import GetInTouch from "../components/get_in_touch"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const products = [
    {
        id: 1,
        name: "SAGE 300",
        subtitle: "IDEAL FOR MANUFACTURING",
        description:
            "SAGE 300 offers Standard and Advanced manufacturing features catering to mid size and enterprise level industries. Shop floor management was never been this easier and effective for the optimum use of resources and accurate costing.",
        features: [
            "Smart dashboards",
            "Report consolidation of multiple companies",
            "Easy customization and integration",
            "Multi location inventory management",
        ],
        image: "/images/sage300.webp",
        color: "from-[#3c7321] to-[#578340]",
        hreflink: "/products/sage300",
    },
    {
        id: 2,
        name: "SAGE 200",
        subtitle: "SMART MANAGEMENT OF TRADING",
        description:
            "Sage 200 Evolution offers full financial management, including invoicing orders, accounts receivable, accounts payable, inventory, and order fulfillment, as well as built-in CRM features to meet the needs of a wide range of industries.",
        features: ["Full financial management", "Built-in CRM features", "Inventory tracking", "Order fulfillment"],
        image: "/images/sage200.webp",
        color: "from-[#edeb57] to-[#c9c74a]", hreflink: "/products/sage200",

    },
    {
        id: 3,
        name: "BUSY ACCOUNTING",
        subtitle: "EASE IN DISTRIBUTION",
        description:
            "Accounting Software for Growing Businesses in Its Entirety. Make the switch to a full-service company solution. Upgrade to Busy accounting mode for strategic handling of the distribution cycle with unprecedented productivity and control.",
        features: [
            "Precise stock level management",
            "Rapid inventory transactions",
            "Strategic distribution handling",
            "Full-service company solution",
        ],
        image: "/images/busy.webp",
        color: "from-[#1a954b] to-[#167a3d]", hreflink: "/products/busy-accounting",

    },
]

const ProductsPage = () => {
    const titleRef = useRef(null)
    const productsRef = useRef([])

    useGSAP(() => {
        // Animate title
        gsap.from(titleRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.2,
            ease: "power3.out",
        })

        // Animate products
        productsRef.current.forEach((product, index) => {
            gsap.from(product, {
                opacity: 0,
                y: 100,
                duration: 1,
                delay: 0.2 * (index + 1),
                ease: "power3.out",
                scrollTrigger: {
                    trigger: product,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            })
        })
    })

    return (
        <div className="min-h-screen rounded-b-4xl bg-slate-950">
            <div className="container mx-auto px-[1rem] md:px-[2rem] pt-[20vh]">
                <div ref={titleRef} className="text-center mb-16">
                    <GradientSubtitle text={"Our Products"} />
                    <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
                        Enterprise Solutions for <br />
                        <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
                            Modern Businesses
                        </span>
                    </h1>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
                        Authorized dealer of SAGE, QUICKBOOKS, TALLY, and ORACLE NETSUITE. We provide the best accounting and ERP
                        software solutions for businesses in Dubai, UAE.
                    </p>
                </div>

                <div className="space-y-32 py-16">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            ref={(el) => (productsRef.current[index] = el)}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
                        >
                            <div className="w-full md:w-1/2">
                                <div
                                    className={`bg-gradient-to-br ${product.color} rounded-[2rem] p-1 shadow-lg hover:shadow-[0px_0px_30px_rgba(87,131,64,0.3)] transition-all duration-500`}
                                >
                                    <div className="bg-slate-900 rounded-[1.9rem] p-6">
                                        <img
                                            src={product.image || "/placeholder.svg?height=400&width=600"}
                                            alt={product.name}
                                            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-4">
                                <GradientSubtitle text={product.subtitle} />
                                <h2 className="briefText tracking-wider leading-12 text-white text-[2.3rem] md:text-[3.5rem] font-light">
                                    {product.name}
                                </h2>
                                <p className="text-gray-400 text-lg">{product.description}</p>
                                <div className="pt-4">
                                    <h3 className="text-white text-xl mb-3">Key Features:</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300">
                                                <span className="inline-block w-2 h-2 bg-[#578340] rounded-full mr-2"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-6">

                                    <a
                                        href={product.hreflink}
                                        className="bg-transparent cursor-pointer border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition duration-300"
                                    >
                                        Find Out More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <GetInTouch />
        </div>
    )
}

export default ProductsPage
