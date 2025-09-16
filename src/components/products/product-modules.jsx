"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProductModules = ({ title, modules, dotColor }) => {
    const modulesRef = useRef(null)

    useGSAP(() => {
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
        <div ref={modulesRef} className="mb-20">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className="bg-slate-900 rounded-2xl overflow-hidden border border-gray-800 hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={module.image || "/placeholder.svg"}
                                alt={module.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">{module.title}</h3>
                            <p className="text-gray-400 mb-4">{module.description}</p>
                            <ul className="space-y-2">
                                {module.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <span className={`inline-block w-2 h-2 bg-[${dotColor}] rounded-full mr-2`}></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductModules
