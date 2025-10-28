"use client";
import house from "@/public/house.png";
import Image from "next/image";




export default function DashboardTop() {
    return (
        <section className="grid lg:grid-cols-3 gap-4 text-white rounded-xl">
            {/* Left: Sales and Property Views */}
            <div className="col-span-2 bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex flex-wrap gap-6 mb-6">
                    <div>
                        <p className="text-gray-400 text-sm">Number of Sales</p>
                        <h2 className="text-3xl font-bold">2,560</h2>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Property Views</p>
                        <h2 className="text-3xl font-bold">40.0%</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 items-center gap-6">
                    {/* Stats Cards */}
                    <div className="md:col-span-1 flex flex-col gap-4">
                        <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
                            <p className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                                <span className="h-2 w-2 bg-green-400 rounded-full" /> Completed Deals
                            </p>
                            <h3 className="text-2xl font-semibold">1250</h3>
                            <div className="h-1.5 bg-neutral-700 rounded-full mt-2">
                                <div className="h-1.5 bg-green-400 rounded-full w-[80%]" />
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
                            <p className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                                <span className="text-sky-400 text-lg">$</span> Total Revenue
                            </p>
                            <h3 className="text-2xl font-semibold text-sky-400">$1,25,541</h3>
                            <div className="h-1.5 bg-neutral-700 rounded-full mt-2">
                                <div className="h-1.5 bg-sky-400 rounded-full w-[34%]" />
                            </div>
                        </div>
                    </div>

                    {/* House Image */}
                    <div className="md:col-span-2">
                        <Image
                            src={house}
                            width={1000}
                            height={1000}
                            alt="Modern House"
                            className="rounded-xl w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Right: AI Feature */}
            <div className="bg-green-100 rounded-xl p-6 flex flex-col justify-between text-black">
                <div>
                    <h3 className="text-sm font-semibold text-green-900">New AI Feature</h3>
                    <h2 className="text-2xl font-bold mt-1 leading-snug">
                        Leads and Property Search
                    </h2>
                    <p className="text-sm text-gray-700 mt-2">
                        Find properties faster and work smarter with our integrated lead and
                        property search feature.
                    </p>
                </div>
                <button className="mt-6 bg-green-800 text-white font-medium py-2 px-4 rounded-md w-fit hover:bg-green-900 transition">
                    Search Now
                </button>
            </div>
        </section>
    );
}
