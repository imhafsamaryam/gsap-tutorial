"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Cloud, Database, Shield, Server, Lock, Monitor, Puzzle, DollarSign, RefreshCw, Users } from "lucide-react"
import GradientSubtitle from "../../components/gradient_subtitle"
import GetInTouch from "../../components/get_in_touch"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const CloudServicesPage = () => {
    const titleRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)
    const servicesRef = useRef(null)
    const benefitsRef = useRef(null)
    const cloudTypesRef = useRef(null)

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

        // Animate cloud types
        gsap.from(cloudTypesRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cloudTypesRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        })
    })

    return (
        <div className="min-h-screen bg-slate-950  rounded-b-4xl ">
            <div className="container mx-auto px-6 py-16">
                <div ref={titleRef} className="text-center   h-screen flex flex-col justify-center items-center">
                    <GradientSubtitle text={"Our Services"} />
                    <h1 className="tracking-tight text-[2.3rem] md:text-[4rem] lg:text-[4.5rem] text-white font-semibold">
                        Cloud Services & <br />
                        <span className="font-bold bg-gradient-to-r from-[#3c7321] via-[#edeb57] to-[#1a954b] text-transparent bg-clip-text drop-shadow-2xl">
                            Data Management
                        </span>
                    </h1>
                    <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-400">
                        Secure, scalable cloud solutions to power your business and manage your data effectively.
                    </p>
                </div>

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                    <div ref={imageRef} className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden">
                            <img
                                src="/images/collab1.jpg"
                                alt="Cloud Services Team Meeting"
                                width={600}
                                height={400}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                    <div ref={contentRef} className="w-full lg:w-1/2 space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">The Cloud is important to us</h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Able Software Solutions was established with a clear vision to offer premium, tailor-made cloud services
                            in the modern IT landscape. We specialize in cloud infrastructure, data management, and scalable
                            solutions.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            You are well-acquainted with our dedicated team, and you can reach out to us at any time as a trusted
                            advisor when facing critical cloud decisions. Our partnership is grounded in a foundation of flexibility,
                            unwavering personal dedication, and a deep level of specialized cloud expertise.
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div ref={servicesRef} className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Cloud Services Topics</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Our tailored approach, the certified expertise of our team, and the dependability of our cloud services
                            ensure shared success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[70vw] mx-auto ">
                        {/* Cloud Infrastructure */}
                        <div className=" rounded-2xl p-8 flex flex-col justify-start items-start hover:bg-slate-700 transition-colors duration-300">
                            <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center  mb-6">
                                <Cloud className="w-8 h-8 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-left">CLOUD INFRASTRUCTURE</h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-left">
                                Plan in-depth analysis to strategic planning, from crafting solutions to implementation and team go-live
                                to ongoing system support, a dependable service customized to meet your specific requirements.
                            </p>
                        </div>

                        {/* Data Management */}
                        <div className=" rounded-2xl p-8 flex flex-col justify-start items-start hover:bg-slate-700 transition-colors duration-300">
                            <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center  mb-6">
                                <Database className="w-8 h-8 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-left">DATA MANAGEMENT</h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-left">
                                Architecture strategies (scale up/out) and their influence on storage and backup solutions. Assessment
                                of the growth plan and its alignment.
                            </p>
                        </div>

                        {/* Security Solutions */}
                        <div className=" rounded-2xl p-8 flex flex-col justify-start items-start hover:bg-slate-700 transition-colors duration-300">
                            <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center  mb-6">
                                <Shield className="w-8 h-8 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-left">SECURITY SOLUTIONS</h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-left">
                                Setup, upgrading, and activation of core features along with monitoring, alerting, reporting, and
                                advanced functionalities.
                            </p>
                        </div>

                        {/* Performance Monitoring */}
                        <div className=" rounded-2xl p-8 flex flex-col justify-start items-start hover:bg-slate-700 transition-colors duration-300">
                            <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center  mb-6">
                                <Monitor className="w-8 h-8 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-left">PERFORMANCE</h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-left">
                                Manage, fortify, and continuously maintain your systems, focusing on all security-critical aspects and
                                business-essential risks.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Services Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Complete Cloud Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="  rounded-2xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                    <Server className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Scalable Storage Solutions</h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                We provide flexible cloud storage solutions that grow with your business, ensuring you always have the
                                capacity you need without overpaying.
                            </p>
                        </div>

                        <div className="  rounded-2xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                    <Lock className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Secure Access Management</h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                We implement robust security measures and access controls to protect your cloud environment and ensure
                                only authorized users can access your data.
                            </p>
                        </div>

                        <div className="  rounded-2xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                                    <Puzzle className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Cloud Integration</h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                We integrate your cloud services with your existing systems and applications to create a seamless
                                workflow across your business.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cloud Types Section */}
                <div ref={cloudTypesRef} className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Cloud Solutions We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className=" rounded-2xl overflow-hidden border border-gray-700 bg-slate-900     hover:shadow-[0px_0px_30px_rgba(87,131,64,0.4)] transition-all duration-500">
                            <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                <Cloud className="w-16 h-16 text-white" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Public Cloud</h3>
                                <p className="text-gray-300 mb-4 text-sm">
                                    Leverage the power of major public cloud providers like Microsoft Azure and AWS for scalable,
                                    cost-effective cloud solutions.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Highly scalable resources
                                    </li>
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Pay-as-you-go pricing
                                    </li>
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Reduced maintenance
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="  rounded-2xl overflow-hidden border border-gray-700 bg-slate-900    hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                                <Lock className="w-16 h-16 text-white" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Private Cloud</h3>
                                <p className="text-gray-300 mb-4 text-sm">
                                    Dedicated cloud infrastructure for your business, offering enhanced security and control over your
                                    data and applications.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Enhanced security
                                    </li>
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Customizable environment
                                    </li>
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Regulatory compliance
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="  rounded-2xl overflow-hidden border border-gray-700 bg-slate-900       hover:shadow-[0px_0px_30px_rgba(87,131,64,0.2)] transition-all duration-500">
                            <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                                <Puzzle className="w-16 h-16 text-white" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-4">Hybrid Cloud</h3>
                                <p className="text-gray-300 mb-4 text-sm">
                                    The best of both worlds, combining public and private cloud resources to optimize performance,
                                    security, and cost.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Flexible resource allocation
                                    </li>
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Cost optimization
                                    </li>
                                    <li className="flex items-center text-gray-300 text-sm">
                                        <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Business continuity
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div ref={benefitsRef} className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits of Cloud Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Cost Efficiency</h3>
                            <p className="text-gray-300 text-sm">
                                Reduce capital expenses and pay only for the resources you use with flexible cloud pricing models.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <RefreshCw className="w-8 h-8 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Scalability</h3>
                            <p className="text-gray-300 text-sm">
                                Easily scale your resources up or down based on demand, ensuring optimal performance during peak times.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
                            <p className="text-gray-300 text-sm">
                                Benefit from enterprise-grade security measures and regular updates to protect your data from threats.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                            <p className="text-gray-300 text-sm">
                                Enable seamless collaboration with cloud-based tools that allow your team to work together from
                                anywhere.
                            </p>
                        </div>
                    </div>
                </div>
                <GetInTouch />

            </div>
        </div>
    )
}

export default CloudServicesPage
