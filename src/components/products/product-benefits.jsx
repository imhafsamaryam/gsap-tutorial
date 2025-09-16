"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProductBenefits = ({ title, benefits, colorClass, iconColor = "text-white" }) => {
    const benefitsRef = useRef(null)

    useGSAP(() => {
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
    })

    return (
        <div ref={benefitsRef} className="mb-20 bg-slate-900 rounded-3xl p-12 border border-gray-800">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                        <div
                            className={`bg-gradient-to-br ${colorClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-400">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductBenefits
