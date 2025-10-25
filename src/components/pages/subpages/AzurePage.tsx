import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { AnimatedSection } from "../../ui/animated-section";
import {
    CheckCircle,
    Cloud,
    Server,
    Shield,
    Database,
    Zap,
    Globe,
    Users,
    Target,
    Clock,
    Award,
    Cpu,
    Network,
    Lock,
    Scale,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { CTASection } from "../../CTASection";
import { HeroSection } from "../../HeroSection";
import React from "react";

interface AzurePageProps {
    onPageChange: (page: string) => void;
}

export function AzurePage({
    onPageChange,
}: AzurePageProps) {
    const services = [
        {
            title: "Azure Virtual Machines",
            description:
                "Scalable compute capacity with on-demand Windows and Linux virtual machines in the cloud",
            image: "/azure-vm.jpg",
            features: ["Windows & Linux VMs", "Auto-scaling", "High Availability"],
        },
        {
            title: "Azure App Services",
            description:
                "Fully managed platform for building, deploying, and scaling web apps and APIs quickly",
            image: "/azure-app-service.jpg",
            features: ["Multiple Languages", "Auto-scaling", "CI/CD Integration"],
        },
        {
            title: "Azure SQL Database",
            description:
                "Intelligent, fully managed relational database with auto-scaling and built-in intelligence",
            image: "/azure-sql.jpg",
            features: ["Fully Managed", "High Performance", "Built-in AI"],
        },
        {
            title: "Azure Kubernetes Service",
            description:
                "Managed Kubernetes container orchestration service for deploying and managing containerized applications",
            image: "/azure-aks.jpg",
            features: ["Managed Kubernetes", "Enterprise Security", "DevOps Ready"],
        },
        {
            title: "Azure Blob Storage",
            description:
                "Massively scalable object storage for unstructured data, ideal for cloud-native applications",
            image: "/azure-storage.jpg",
            features: ["Unlimited Storage", "Cost Effective", "Multi-tiered"],
        },
        {
            title: "Azure AI & Machine Learning",
            description:
                "Comprehensive AI platform with pre-built APIs and custom machine learning model development",
            image: "/azure-ai.jpg",
            features: ["Pre-built AI APIs", "Custom ML Models", "Enterprise Ready"],
        },
    ];

    const process = [
        {
            step: "01",
            icon: "/cloud-assessment.png",
            title: "Cloud Assessment",
            description:
                "Comprehensive analysis of your current infrastructure, workloads, and cloud readiness for optimal Azure migration strategy",
            color: "from-blue-500 to-cyan-500",
        },
        {
            step: "02",
            icon: "/cloud-migration.png",
            title: "Migration Planning",
            description:
                "Detailed migration roadmap with architecture design, security planning, and cost optimization strategies",
            color: "from-purple-500 to-pink-500",
        },
        {
            step: "03",
            icon: "/cloud-deployment.png",
            title: "Implementation & Migration",
            description:
                "Seamless migration of applications and data to Azure with minimal downtime and comprehensive testing",
            color: "from-green-500 to-emerald-500",
        },
        {
            step: "04",
            icon: "/cloud-optimization.png",
            title: "Optimization & Support",
            description:
                "Continuous monitoring, performance optimization, cost management, and 24/7 Azure infrastructure support",
            color: "from-orange-500 to-red-500",
        },
    ];

    const technologies = [
        { name: "Virtual Machines", icon: Server, category: "Compute" },
        { name: "App Service", icon: Globe, category: "Web" },
        { name: "SQL Database", icon: Database, category: "Database" },
        { name: "Kubernetes", icon: Cpu, category: "Containers" },
        // { name: "Blob Storage", icon: Storage, category: "Storage" },
        { name: "AI Services", icon: Zap, category: "AI/ML" },
        { name: "Virtual Network", icon: Network, category: "Networking" },
        { name: "Security Center", icon: Shield, category: "Security" },
        { name: "Monitor", icon: Target, category: "Management" },
        { name: "Functions", icon: Zap, category: "Serverless" },
        { name: "Cosmos DB", icon: Database, category: "Database" },
        { name: "Active Directory", icon: Users, category: "Identity" },
    ];

    const stats = [
        { icon: Cloud, number: "200+", label: "Azure Projects" },
        { icon: Clock, number: "10k+", label: "Cloud Hours" },
        { icon: Award, number: "99.9%", label: "Uptime SLA" },
        { icon: Shield, number: "24/7", label: "Cloud Support" },
    ];

    const benefits = [
        {
            title: "Cost Optimization",
            description: "Reduce IT costs with pay-as-you-go pricing and reserved instances",
            icon: Scale,
        },
        {
            title: "Global Scale",
            description: "Deploy applications in 60+ regions worldwide with low latency",
            icon: Globe,
        },
        {
            title: "Enterprise Security",
            description: "Multi-layered security with compliance certifications and threat protection",
            icon: Shield,
        },
        {
            title: "Hybrid Cloud",
            description: "Seamlessly integrate on-premises datacenters with Azure cloud services",
            icon: Network,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <HeroSection
                badge={"Microsoft Cloud Platform"}
                title1="Microsoft Azure"
                title2="Cloud Services"
                description="Transform your business with Microsoft Azure's comprehensive cloud platform. Able Software Solution delivers enterprise-grade cloud solutions that scale with your business and drive digital transformation."
                onPageChange={onPageChange}
                imgSrc={"/azure.png"}
            />

            {/* Stats Section */}
            <AnimatedSection className="px-6 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-[#0078D4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-6 h-6 text-[#0078D4]" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Benefits Section */}
            <AnimatedSection className="px-6 py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-4 py-2 uppercase">
                                Why Choose Azure
                            </Badge>
                            <motion.h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Azure Business Benefits
                            </motion.h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Leverage the power of Microsoft's cloud platform to drive innovation and business growth
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                                    <div className="w-12 h-12 bg-[#0078D4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="w-6 h-6 text-[#0078D4]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Services */}
            <AnimatedSection className="px-6 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-4 py-2 uppercase">
                                Our Azure Services
                            </Badge>
                            <motion.h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Azure Cloud Solutions
                            </motion.h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive Azure services tailored to meet your specific business requirements and digital transformation goals
                            </p>
                        </motion.div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-0 rounded-3xl">
                                    <motion.div className="rounded-3xl-top overflow-hidden">
                                        <motion.img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-60 object-cover rounded-3xl-top"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </motion.div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <div className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                                                    <CheckCircle className="w-4 h-4 text-[#0078D4]" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Cloud Migration Process */}
            <AnimatedSection className="px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-4 py-2 uppercase">
                                Our Approach
                            </Badge>
                            <motion.h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Azure Migration Process
                            </motion.h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A structured methodology ensuring smooth cloud migration, optimal performance, and maximum ROI
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 group">
                                    <div className="flex items-start space-x-6">
                                        <div className="relative">
                                            <div className="overflow-hidden">
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                    className="w-full h-20 object-cover"
                                                />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                                                {item.step}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Azure Services */}
            <AnimatedSection className="px-6 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="bg-[#0078D4]/10 text-[#0078D4] px-4 py-2 uppercase">
                                Azure Platform
                            </Badge>
                            <motion.h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 py-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Azure Services & Technologies
                            </motion.h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive suite of Azure services for building, deploying, and managing applications in the cloud
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-[#0078D4]/5 to-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0078D4] transition-colors duration-300 shadow-sm">
                                    <tech.icon className="w-6 h-6 text-[#0078D4] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-gray-900 font-medium text-sm">{tech.name}</h3>
                                <div className="mt-2">
                                    <Badge variant="outline" className="text-xs bg-white/50">
                                        {tech.category}
                                    </Badge>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <CTASection onPageChange={onPageChange} />
        </div>
    );
}