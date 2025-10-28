"use client";

import { motion } from "framer-motion";
import { Brain, Building2, Home, Sparkles, TrendingUp } from "lucide-react";

export default function AboutPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: i * 0.2 },
        }),
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-white flex items-center justify-center py-24 px-6">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            </div>

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={0}
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                            <Brain className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            About RealEstateGPT
                        </h1>
                    </div>
                    <p className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        RealEstateGPT is your intelligent property advisor — combining
                        data science, AI, and human insight to help you discover, evaluate,
                        and invest in real estate with absolute confidence.
                    </p>
                </motion.div>

                {/* Core Features */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    {[
                        {
                            icon: Building2,
                            title: "AI Property Insights",
                            desc: "Understand true property value with live market data, rental yield predictions, and area-based demand scoring.",
                            color: "from-blue-500/20 to-cyan-500/20",
                        },
                        {
                            icon: TrendingUp,
                            title: "Market Forecasting",
                            desc: "Predict price movements and growth patterns using historical trends, buyer sentiment, and regional analytics.",
                            color: "from-purple-500/20 to-pink-500/20",
                        },
                        {
                            icon: Home,
                            title: "Smarter Investments",
                            desc: "Plan your next purchase with AI-guided ROI projections, loan simulations, and risk-reward analysis for any property type.",
                            color: "from-green-500/20 to-emerald-500/20",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            custom={i + 1}
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            className={`relative group bg-gradient-to-br ${card.color} border border-neutral-800 hover:border-cyan-400/40 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 mb-4">
                                    <card.icon className="h-8 w-8 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>

                            {/* Hover Glow */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Mission Section */}
                <motion.div
                    variants={fadeIn}
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    className="mt-20 max-w-3xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 rounded-3xl p-10 backdrop-blur-xl"
                >
                    <div className="flex items-center justify-center gap-3 mb-4 text-cyan-400">
                        <Sparkles className="h-5 w-5" />
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                        We’re redefining how people interact with real estate data.
                        RealEstateGPT transforms complex datasets into actionable insights —
                        helping investors, agents, and homeowners make smarter, faster,
                        and more transparent property decisions.
                    </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                    variants={fadeIn}
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    className="mt-10 max-w-3xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 rounded-3xl p-10 backdrop-blur-xl"
                >
                    <div className="flex items-center justify-center gap-3 mb-4 text-cyan-400">
                        <Brain className="h-5 w-5" />
                        <h2 className="text-2xl font-semibold">Our Vision</h2>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">
                        To become the world’s most trusted AI advisor for property
                        investments — enabling anyone, anywhere, to explore, analyze, and
                        act on real estate opportunities with clarity and confidence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
