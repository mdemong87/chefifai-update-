"use client";
import logo from "@/public/logo_full-Transparent.png";
import { Clock, Compass, FileText, Home, Menu, User2, Wallet, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ChatSidebar = () => {
    const [open, setOpen] = useState(false);

    const items = [
        { icon: <Home size={20} />, label: "Home" },
        { icon: <FileText size={20} />, label: "Templates" },
        { icon: <Compass size={20} />, label: "Explore" },
        { icon: <Clock size={20} />, label: "History" },
        { icon: <Wallet size={20} />, label: "Wallet" },
    ];

    return (
        <>
            {/* 📱 Mobile Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden fixed top-4 left-4 z-40 bg-white/10 p-2 rounded-md hover:bg-white/20 transition"
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* 💻 Sidebar Container */}
            <aside
                className={`fixed md:static top-0 left-0 h-full md:h-auto w-80 bg-black myborderRight bg-neutral-800 p-5 
                flex flex-col justify-between transform transition-transform duration-300 z-50
                ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >
                {/* Logo & Menu */}
                <div>
                    <div className="mb-6 flex items-center justify-between">
                        <Link href={"/"}>
                            <Image src={logo} alt="Logo" width={100} height={100} />
                        </Link>
                        <button
                            className="md:hidden text-gray-400 hover:text-white"
                            onClick={() => setOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <ul className="space-y-3 mt-12">
                        {items.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center py-2 gap-3 cursor-pointer py-1 hover:text-[var(--brandColor)] transition"
                                onClick={() => setOpen(false)}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-3 border-t border-[var(--borderColor)] pt-4">
                    <div className="bg-gray-700 p-2 rounded-full">
                        <User2 size={24} />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Jhon</p>
                        <p className="text-xs opacity-60">Free Plan</p>
                    </div>
                </div>
            </aside>

            {/* 🕶️ Backdrop Overlay (for mobile) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
};

export default ChatSidebar;
