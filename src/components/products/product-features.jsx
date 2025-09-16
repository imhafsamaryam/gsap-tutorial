"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProductFeatures = ({ title, features, colorClass }) => {
    const featuresRef = useRef(null)

    useGSAP(() => {
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
    })

    return (
        <div ref={featuresRef} className="mb-20">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`bg-slate-900 rounded-2xl p-8 border border-gray-800 hover:shadow-[0px_0px_30px_${feature.shadowColor || "rgba(87,131,64,0.2)"}] transition-all duration-500`}
                    >
                        <div
                            className={`bg-gradient-to-br ${colorClass} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                        >
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductFeatures
