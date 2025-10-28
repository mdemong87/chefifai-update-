"use client";

import Link from "next/link";
import Container from "./Container";
export default function Footer({
    brand = "Real Estate GPT",
    tagline =
    "AI-powered real estate assistant providing expert guidance for investors, agents, and property owners.",
    year = 2025,
}) {
    const quickLinks = [
        { href: "/chat", label: "Chat Interface" },
        { href: "/analysis", label: "Property Analysis" },
        { href: "/documents", label: "Documents" },
        { href: "/pricing", label: "Pricing" },
    ];

    const supportLinks = [
        { href: "/settings", label: "Settings" },
        { href: "/support", label: "Contact Support" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
    ];

    return (
        <footer className="w-full h-full inset-0 text-neutral-200 bg-neutral-900 myborderTop">
            <Container>

                <div className="px-4 py-12 sm:py-16">
                    <div className="rounded-2xl">
                        <div className="grid gap-10 md:grid-cols-3">
                            {/* Brand block */}
                            <div>
                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                                    {brand}
                                </h3>
                                <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-300">
                                    {tagline}
                                </p>
                                <p className="mt-4 text-xs text-neutral-400">© {year} {brand}. All rights reserved.</p>
                            </div>

                            {/* Quick Links */}
                            <nav aria-label="Quick Links" className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2">
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Quick Links</h4>
                                    <ul className="mt-3 space-y-2">
                                        {quickLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="inline-block text-sm text-neutral-300 underline-offset-4 transition hover:text-teal-300 hover:underline focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-teal-500"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-white">Support</h4>
                                    <ul className="mt-3 space-y-2">
                                        {supportLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="inline-block text-sm text-neutral-300 underline-offset-4 transition hover:text-teal-300 hover:underline focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-teal-500"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
