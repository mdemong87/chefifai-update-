"use client";
import logo from "@/public/logo_small_transparent.png";
import { ImageIcon, Search, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ChatArea = () => {





    const [isfrist, setisfrist] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setloading] = useState(false);



    const [messages, setMessages] = useState([
        { from: "ai", text: "I'd be happy to help analyze current real estate market trends..." },
        { from: "user", text: "Can you analyze the current real estate market trends?" },
        { from: "ai", text: "Sorry, I encountered an error. Please try again." },
    ]);


    const sendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Step 1: Add user message
        const newUserMessage = { from: "user", text: input };
        setMessages((prev) => [...prev, newUserMessage]);
        setloading(true);
        setInput("");

        setMessages((prev) => {
            const updated = [...prev];          // copy the existing array
            // updated.pop();                      // remove the last element
            updated.push({ from: "ai", text: "Thinking..." }); // add the new object
            return updated;                     // return the new array
        });


        // Step 2: Simulate AI reply with delay
        setTimeout(() => {

            setMessages((prev) => {
                const updated = [...prev];          // copy the existing array
                updated.pop();                      // remove the last element
                return updated;                     // return the new array
            });

            const aiReply = { from: "ai", text: "Text streaming in the context of Node.js and NPM refers to the process of handling and processing text data in a continuous flow, rather than loading the entire content into memory at once. This approach is particularly beneficial for large files, real-time data feeds, or scenarios where data arrives over time." };
            setMessages((prev) => [...prev, aiReply]);
        }, 1000);
    };





    return (

        <section className="flex justify-center items-center w-full text-center h-screen overflow-hidden">

            {
                isfrist ? (
                    <div className=" h-screen flex flex-col justify-center items-center w-full text-center">
                        <div className="flex flex-col items-center mt-20">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 blur-sm mb-6"></div>
                            <h1 className="text-2xl md:text-3xl font-semibold">
                                Good Evening, <span className="text-[var(--brandColor)]">Jhon</span>.
                            </h1>
                            <p className="text-lg opacity-70">Can I help you with anything?</p>
                        </div>

                        <div className="bg-[var(--cardBg)] border border-[var(--borderColor)] rounded-2xl p-4 mt-10 w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="Message AI Chat..."
                                className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                            />
                            <div className="flex gap-3 mt-4 justify-center text-sm opacity-80">
                                <button className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition">
                                    <ImageIcon size={16} />Show me ROI analysis for a $500k property
                                </button>
                                <button className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition">
                                    <Search size={16} /> Search the web
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 mt-10 flex-wrap max-w-4xl">
                            {["Smart Budget", "Analytics", "Spending"].map((card, i) => (
                                <div
                                    key={i}
                                    className="bg-[var(--cardBg)] border border-[var(--borderColor)] rounded-xl p-5 w-64 hover:bg-white/10 transition"
                                >
                                    <h2 className="font-semibold mb-2">{card}</h2>
                                    <p className="text-sm opacity-70">
                                        {card === "Smart Budget"
                                            ? "A budget that fits your lifestyle."
                                            : card === "Analytics"
                                                ? "Empowers individuals and businesses to make smarter moves."
                                                : "Spending is how individuals and businesses use finances."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col flex-1 p-6 h-screen h-fit">
                        <div className="flex-1 overflow-y-scroll scrollbar-hide h-screen fit space-y-6 pr-4 ">
                            {messages.map((msg, i) => (


                                <div
                                    key={i}
                                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${msg.from === "user"
                                            ? "bg-cyan-600 text-white"
                                            : "bg-gray-700 text-gray-200"
                                            }`}
                                    >

                                        {
                                            msg.from === "user" ? (
                                                <span className="text-lg">
                                                    {msg.text}
                                                </span>

                                            ) : (
                                                <div className="flex items-start gap-2 text-left">
                                                    <div className="brandBg w-[35px] h-[35px] rounded-full flex items-center justify-center">
                                                        <Image src={logo} alt="logo" />
                                                    </div>
                                                    <span className="text-lg">{msg.text}</span>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>

                            ))}
                        </div>

                        {/* Input Bar */}
                        <form
                            onSubmit={sendMessage}
                            className="mt-4 flex items-center bg-[#111] border border-gray-800 rounded-full px-4 py-2 sticky bottom-10"
                        >
                            <input
                                type="text"
                                placeholder="How can I help you today?"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-sm px-2"
                            />
                            <button
                                type="submit"
                                className="p-2 rounded-full bg-cyan-600 hover:bg-cyan-500 transition"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                )
            }

        </section>


    );
};

export default ChatArea;
