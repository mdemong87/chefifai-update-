"use client";

import Image from "next/image";

const listings = [
    {
        id: 1,
        title: "Modern Villa",
        price: "$250,000",
        location: "Los Angeles, USA",
        img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 2,
        title: "Beach House",
        price: "$350,000",
        location: "Miami, USA",
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        title: "Luxury Apartment",
        price: "$200,000",
        location: "New York, USA",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        title: "Futuristic House",
        price: "$400,000",
        location: "San Francisco, USA",
        img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    },
];

export default function ListingBoard() {
    return (
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mt-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Listing Board</h2>
                <div className="relative">
                    <select className="bg-neutral-800 border border-neutral-700 text-sm text-gray-300 px-3 py-1.5 rounded-md appearance-none pr-8">
                        <option>Recent Listed</option>
                        <option>Highest Price</option>
                        <option>Lowest Price</option>
                    </select>
                    <svg
                        className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Listings Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {listings.map((item) => (
                    <div
                        key={item.id}
                        className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden hover:shadow-md hover:scale-[1.02] transition-transform"
                    >
                        <div className="relative h-44 w-full">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-white font-semibold text-lg">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">{item.location}</p>
                            <p className="text-[var(--brandColor)] font-semibold mt-2">
                                {item.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
