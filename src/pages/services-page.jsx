"use client"

import { useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GradientSubtitle from "../components/gradient_subtitle"
import GetInTouch from "../components/get_in_touch"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const services = [
    {
        id: "erp-support",
        title: "ERP Support & Maintenance",
        description:
            "We provide comprehensive support and maintenance for ERP software including SAGE, QuickBooks, Tally Prime, and more. Our team ensures your systems run smoothly with minimal downtime.",
        icon: "/icons/erp-support.png",
        image: "/images/erp-support.jpg",
        features: [
            "24/7 technical support",
            "Regular system updates",
            "Performance optimization",
            "User training and guidance",
        ],
    },
    {
        id: "it-support",
        title: "IT Support",
        description:
            "Our IT support team is available to consult with you or your staff when problems arise with your software. We provide both remote and on-site assistance to ensure your business operations continue without interruption.",
        icon: "/icons/it-support.png",
        image: "/images/it-support.jpg",
        features: [
            "Remote troubleshooting",
            "On-site technical assistance",
            "Hardware diagnostics",
            "Software configuration",
        ],
    },
    {
        id: "cloud-services",
        title: "Cloud Services & Data Management",
        description:
            "We work with you to establish the appropriate cloud size and available resources for your business. Our cloud solutions ensure your data is secure, accessible, and scalable as your business grows.",
        icon: "/icons/cloud-services.png",
        image: "/images/cloud1.png",
        features: [
            "Cloud infrastructure setup",
            "Data migration and backup",
            "Scalable storage solutions",
            "Secure access management",
        ],
    },
    {
        id: "security-installation",
        title: "Security Installation",
        description:
            "From a solitary camera to thousands, our team will design and install your security systems and integrate them into your infrastructure. We provide comprehensive security solutions to protect your business assets.",
        icon: "/icons/security.png",
        image: "/images/security-installation.jpg",
        features: [
            "CCTV installation",
            "Access control systems",
            "Alarm and monitoring setup",
            "Security system integration",
        ],
    },
]

const ServicesPage = () => {
    const [activeService, setActiveService] = useState(null)
    const titleRef = useRef(null)
    const servicesRef = useRef([])
    const serviceCardsRef = useRef(null)

    useGSAP(() => {
        // Animate title
        gsap.from(titleRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.2,
            ease: "power3.out",
        })

        // Animate service cards container
        gsap.from(serviceCardsRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5,
            ease: "power3.out",
        })

        // Animate individual service cards with stagger
        servicesRef.current.forEach((service, index) => {
            gsap.from(service, {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                delay: 0.2 * index,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: service,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            })
        })

    })

    const handleServiceHover = (id) => {
        setActiveService(id)
    }

    const handleServiceLeave = () => {
        setActiveService(null)
    }

    return (
        <div className="min-h-screen rounded-b-4xl bg-slate-950">
            <div className="container mx-auto px-[1rem] md:px-[2rem] pt-[20vh]">
                <div ref={titleRef} className="text-center mb-16">
                    <GradientSubtitle text={"Our Services"} />
                    <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
                        Comprehensive IT Solutions <br />
                        <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
                            For Your Business
                        </span>
                    </h1>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
                        Here ideas and technology come together. We are the leading providers of business development software and
                        IT services that best fit your industry.
                    </p>
                </div>

                <div ref={serviceCardsRef} className="py-16">
                    <div className="grid grid-cols-1 gap-32">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                ref={(el) => (servicesRef.current[index] = el)}
                                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
                            >
                                <div className="w-full md:w-1/2 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#3c7321]/80 via-transparent to-[#1a954b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                    <img
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.title}
                                        className="w-full h-[400px] md:h-[400px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                        <a
                                            href={`/services/${service.id}`}
                                            className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 space-y-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-gradient-to-br from-[#3c7321] to-[#1a954b] p-0.5 rounded-xl">
                                            <div className="bg-slate-900 p-4 rounded-xl">
                                                <img
                                                    src={service.icon || "/placeholder.svg"}
                                                    alt={service.title}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            </div>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-semibold text-white">{service.title}</h2>
                                    </div>
                                    <p className="text-gray-400 text-lg">{service.description}</p>
                                    <div className="pt-4">
                                        <h3 className="text-white text-xl mb-3">What we offer:</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-300">
                                                    <span className="inline-block w-2 h-2 bg-[#edeb57] rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-6">
                                        <a
                                            href={`/services/${service.id}`}
                                            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition duration-300 inline-block"
                                        >
                                            Explore Service
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            <GetInTouch />
        </div>
    )
}

export default ServicesPage
