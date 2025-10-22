import React from "react";
import { motion } from "framer-motion";
import "./Features.css"; // Custom CSS for styling
import { Badge } from "./ui/badge";

const features = [
    {
        title: "Business Management Software - ERP Softwares",
        desc:
            "Streamline your operations with industry-leading ERP and business platforms that automate processes, provide real-time insights, and drive growth across your organization.",
        image: "/erpsoftwares.jpg",
    },
    {
        title: "Cloud Hosting",
        desc:
            "Enable flexible, secure access to your business applications from anywhere. Our cloud infrastructure ensures your team stays productive while maintaining enterprise-grade security.",
        image: "/cloudhosting.jpg",
    },
    {
        title: "Business Hardware Infrastructure",
        desc:
            "Reliable, high-performance computing solutions built for business. From daily workstations to enterprise servers, we provide the robust foundation your operations depend on.",
        image: "/desktops1.jpeg",
    },
    {
        title: "Custom Software Development & Support",
        desc:
            "Beyond implementation, we're your long-term technology partner. From bespoke software to ongoing support, we ensure your systems evolve with your business needs.",
        image: "/product.jpg",
    },

];

function FeatureCard({ title, desc, image, index }) {
    const isOdd = index % 2 !== 0;

    return (
        <motion.div
            className="feature-card flex flex-col gap-6 justify-center items-center p-6"
            initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, }}
        // whileHover={{ y: -5 }}
        >
            <motion.div
                className="feature-img w-full max-w-3xl rounded-3xl overflow-hidden"
                // whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src={image}
                    alt={title}
                    //  className=" h-auto object-cover rounded-3xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                />
            </motion.div>
            <div className="feature-content text-left">
                <motion.h3
                    className="text-xl sm:text-2xl font-bold text-gray-900 py-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-sm sm:text-base text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, }}
                >
                    {desc}
                </motion.p>
            </div>
        </motion.div>
    );
}

export default function FeaturesUpClose() {
    return (
        <div className="features-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="features-header text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="bg-[#018136]/10 text-[#018136] px-4 py-2 uppercase">
                        What we offer
                    </Badge>
                </motion.div>

                <motion.h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Your Complete Business Technology Partner
                </motion.h2>

                <motion.p
                    className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    From essential software like Sage & Zoho to powerful hardware and custom development, we provide the integrated solutions your business needs to thrive.
                </motion.p>
            </div>

            <motion.div
                className="grid grid-cols-1  lg:grid-cols-2 gap-8 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {features.map((feature, index) => (
                    <FeatureCard  {...feature} index={index} />
                ))}
            </motion.div>
        </div>
    );
}