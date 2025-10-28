"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
    sentence
} from 'txtgen';

export default function ChatArea() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { from: "ai", text: "Hey there 👋 I'm CherifAI, your Real Estate Co-Pilot." },
    ]);

    const [isThinking, setIsThinking] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    // Auto-scroll whenever messages change
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isThinking, isTyping]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isThinking || isTyping) return;

        // Add user message
        const newUserMsg = { from: "user", text: input };
        setMessages((prev) => [...prev, newUserMsg]);
        setInput("");

        // Simulate AI "thinking" first
        setIsThinking(true);

        // Add placeholder "thinking" message
        setMessages((prev) => [...prev, { from: "ai", text: "Thinking..." }]);

        // After a short delay, start typing actual reply

        const text = sentence(10);


        setTimeout(() => {
            setIsThinking(false);
            startTypingEffect(text);
        }, 1300);
    };

    // 🧠 Typing effect function
    const startTypingEffect = (fullText) => {
        setIsTyping(true);
        setMessages((prev) => {
            const updated = [...prev];
            updated.pop(); // remove the 'Thinking...' message
            return [...updated, { from: "ai", text: "" }];
        });

        let i = 0;
        const interval = setInterval(() => {
            i++;
            setMessages((prev) => {
                const updated = [...prev];
                const lastIndex = updated.length - 1;
                updated[lastIndex] = {
                    ...updated[lastIndex],
                    text: fullText.slice(0, i),
                };
                return updated;
            });
            if (i === fullText.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 25); // typing speed
    };

    return (
        <section className="flex flex-col w-full h-screen text-white px-6 pb-8">
            {/* Chat Scrollable Area */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-scroll scrollbar-hide space-y-6 pt-10 pb-6 pr-3"
            >
                <AnimatePresence>
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`w-fit md:max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-md ${msg.from === "user"
                                    ? "bg-gradient-to-br from-cyan-600 to-blue-600 text-white"
                                    : "bg-neutral-800 text-gray-100"
                                    }`}
                            >
                                {/* Thinking animation */}
                                {isThinking && msg.text === "Thinking..." ? (
                                    <div className="flex items-center gap-1">
                                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.2s]" />
                                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.1s]" />
                                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
                                        <span className="ml-2 text-sm text-gray-300 opacity-70">CherifAI is thinking...</span>
                                    </div>
                                ) : (
                                    <span className="text-lg leading-relaxed whitespace-pre-line">{msg.text}</span>
                                )}

                                {/* Blinking cursor while typing */}
                                {isTyping && i === messages.length - 1 && msg.from === "ai" && (
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-[6px] h-[20px] bg-cyan-400 ml-1 rounded-sm align-middle"
                                    />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Input Bar */}
            <form
                onSubmit={sendMessage}
                className="mt-auto flex items-center bg-neutral-800 border border-neutral-800 rounded-full px-4 py-3 shadow-lg sticky bottom-4"
            >
                <input
                    type="text"
                    placeholder="Ask about ROI, rental analysis, or funding..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-lg text-white placeholder:text-neutral-500 px-2"
                />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={!input.trim() || isThinking || isTyping}
                    className={`p-2 rounded-full ${isThinking || isTyping
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                        } transition`}
                >
                    <Send size={18} />
                </motion.button>
            </form>
        </section>
    );
}
