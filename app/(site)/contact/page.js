"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: i * 0.2 },
        }),
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setIsSubmitting(true);

        // Simulate a network request
        setTimeout(() => {
            alert("Message sent successfully ✅");
            setForm({ name: "", email: "", message: "" });
            setIsSubmitting(false);
        }, 1200);
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-white flex items-center justify-center py-24 px-6">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            </div>

            {/* Gradient Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    custom={0}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                            <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Contact RealEstateGPT
                        </h1>
                    </div>
                    <p className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Have a question, idea, or partnership proposal?
                        We’d love to hear from you — our AI and real estate experts are ready to help.
                    </p>
                </motion.div>

                {/* Contact Form + Info */}
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="flex flex-col gap-6 justify-center"
                    >
                        {[
                            {
                                icon: MapPin,
                                title: "Our Office",
                                text: "Downtown Business District, Miami, FL",
                            },
                            {
                                icon: Mail,
                                title: "Email Us",
                                text: "hello@realestategpt.ai",
                            },
                            {
                                icon: Phone,
                                title: "Call Support",
                                text: "+1 (305) 555-0123",
                            },
                        ].map((info, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 hover:border-cyan-400/30 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300"
                            >
                                <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl">
                                    <info.icon className="h-5 w-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{info.title}</h3>
                                    <p className="text-neutral-400 text-sm">{info.text}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 rounded-3xl p-8 backdrop-blur-xl shadow-xl"
                    >
                        <div className="mb-6">
                            <label className="block text-sm mb-2 text-neutral-400">Full Name</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-cyan-400 outline-none"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm mb-2 text-neutral-400">Email Address</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-cyan-400 outline-none"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm mb-2 text-neutral-400">Message</label>
                            <textarea
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-cyan-400 outline-none min-h-[120px] resize-none"
                                placeholder="Tell us about your project or inquiry..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-xl font-semibold disabled:opacity-50 transition"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                                />
                            ) : (
                                <>
                                    <Send className="h-4 w-4" /> Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
