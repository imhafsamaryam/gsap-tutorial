"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import GradientSubtitle from "../gradient_subtitle"

const ProductHero = ({
    subtitle,
    title,
    highlightedText,
    description,
    image,
    color,
    imagePosition = "left", // "left" or "right"
    content,
    ctaText = "Request a Demo",
    ctaLink = "/contact",
}) => {
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)

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
            x: imagePosition === "left" ? -50 : 50,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        })

        // Animate content
        gsap.from(contentRef.current, {
            opacity: 0,
            x: imagePosition === "left" ? 50 : -50,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        })
    })

    return (
        <>
            <div ref={titleRef} className="text-center mb-16">
                <GradientSubtitle text={subtitle} />
                <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
                    {title} <br />
                    <span className={`font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text drop-shadow-2xl`}>
                        {highlightedText}
                    </span>
                </h1>
                <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">{description}</p>
            </div>

            <div
                className={`flex flex-col ${imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center mb-20`}
            >
                <div ref={imageRef} className="w-full md:w-1/2">
                    <div
                        className={`bg-gradient-to-br ${color.replace("from-", "").replace("via-", "").replace("to-", "")} p-1 rounded-[2rem]`}
                    >
                        <div className="bg-slate-950 rounded-[1.9rem] p-6">
                            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-[400px] object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
                <div ref={contentRef} className="w-full md:w-1/2 space-y-6">
                    {content}
                </div>
            </div>
        </>
    )
}

export default ProductHero
