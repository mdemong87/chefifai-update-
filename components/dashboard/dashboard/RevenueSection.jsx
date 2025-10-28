"use client";

import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { month: "Jan", income: 1000, expense: 700, profit: 300 },
    { month: "Feb", income: 1200, expense: 800, profit: 400 },
    { month: "Mar", income: 1500, expense: 950, profit: 550 },
    { month: "Apr", income: 1300, expense: 870, profit: 430 },
    { month: "May", income: 1600, expense: 1100, profit: 500 },
    { month: "Jun", income: 1750, expense: 1200, profit: 550 },
    { month: "Jul", income: 1900, expense: 1400, profit: 500 },
    { month: "Aug", income: 1600, expense: 1150, profit: 450 },
    { month: "Sep", income: 1700, expense: 1250, profit: 450 },
    { month: "Oct", income: 1800, expense: 1300, profit: 500 },
    { month: "Nov", income: 1900, expense: 1400, profit: 500 },
    { month: "Dec", income: 2000, expense: 1500, profit: 500 },
];

export default function RevenueSection() {
    return (
        <section className="grid lg:grid-cols-3 gap-4 mt-4">
            {/* Left: Revenue Chart */}
            <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold">Revenue</h2>
                        <p className="text-sm text-gray-400">Your Revenue This Year</p>
                    </div>

                    {/* Filter buttons */}
                    <div className="flex bg-neutral-800 rounded-md overflow-hidden border border-neutral-700">
                        {["All", "Income", "Expenses", "Profit"].map((label, i) => (
                            <button
                                key={i}
                                className={`px-3 py-1 text-sm ${label === "All"
                                    ? "bg-[var(--brandColor)] text-black font-semibold"
                                    : "text-gray-400 hover:text-white"
                                    } transition`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Key Stats */}
                <div className="flex flex-wrap gap-6 mb-6">
                    <div>
                        <p className="text-green-400 text-sm font-medium">Income</p>
                        <h3 className="text-2xl font-bold text-white">$26,000</h3>
                        <p className="text-green-400 text-xs">+10%</p>
                    </div>
                    <div>
                        <p className="text-red-400 text-sm font-medium">Expenses</p>
                        <h3 className="text-2xl font-bold text-white">$18,000</h3>
                        <p className="text-red-400 text-xs">-10%</p>
                    </div>
                    <div>
                        <p className="text-sky-400 text-sm font-medium">Profit</p>
                        <h3 className="text-2xl font-bold text-white">$8,000</h3>
                        <p className="text-sky-400 text-xs">+3%</p>
                    </div>
                </div>

                {/* Chart */}
                <ResponsiveContainer width="100%" height={310}>
                    <AreaChart data={data}>
                        <XAxis dataKey="month" stroke="#888" />
                        <YAxis stroke="#888" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1a1a1a",
                                border: "none",
                                borderRadius: "8px",
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="income"
                            stroke="#4ade80"
                            fill="#4ade8020"
                            strokeWidth={2}
                        />
                        <Area
                            type="monotone"
                            dataKey="expense"
                            stroke="#f87171"
                            fill="#f8717120"
                            strokeWidth={2}
                        />
                        <Area
                            type="monotone"
                            dataKey="profit"
                            stroke="#38bdf8"
                            fill="#38bdf820"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Right: Stats Cards */}
            <div className="flex flex-col gap-4">
                {/* Sales Statistic */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <h3 className="text-gray-400 text-sm mb-2">Sales Statistic</h3>
                    <h2 className="text-2xl font-semibold text-white">$24.9k</h2>
                    <div className="mt-3 h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-2 bg-green-400 w-[70%]" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Visitors: $24k</p>
                </div>

                {/* Visit Statistic */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <h3 className="text-gray-400 text-sm mb-2">Visit Statistic</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-white text-2xl font-semibold">32.43%</p>
                        <div className="h-10 w-16 bg-[var(--brandColor)] opacity-20 rounded-md flex items-center justify-center">
                            <span className="text-[var(--brandColor)] font-bold">↗</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Rate</p>
                </div>

                {/* New Visitors */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <h3 className="text-gray-400 text-sm mb-2">New Visitors</h3>
                    <p className="text-gray-500 text-sm">48% new visitors this week</p>
                    <div className="mt-3 flex gap-1 items-end h-24">
                        {[
                            { h: "40%", color: "bg-green-400" },
                            { h: "55%", color: "bg-green-400" },
                            { h: "60%", color: "bg-green-400" },
                            { h: "80%", color: "bg-green-400" },
                            { h: "100%", color: "bg-[var(--brandColor)]" },
                            { h: "90%", color: "bg-neutral-700" },
                        ].map((bar, i) => (
                            <div
                                key={i}
                                className={`${bar.color} w-4 rounded-t-md`}
                                style={{ height: bar.h }}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                        12,480 <span className="text-green-400">▲ 28</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
