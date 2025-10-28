'use client'

import DashboardTop from "@/components/dashboard/dashboard/DeshboardTop";
import ListingBoard from "@/components/dashboard/dashboard/ListingBoard";
import RevenueSection from "@/components/dashboard/dashboard/RevenueSection";










const data = [
    { month: "Jan", income: 1000, expense: 700, profit: 300 },
    { month: "Feb", income: 1200, expense: 800, profit: 400 },
    { month: "Mar", income: 1500, expense: 950, profit: 550 },
    { month: "Apr", income: 1300, expense: 870, profit: 430 },
    { month: "May", income: 1600, expense: 1100, profit: 500 },
];

export default function Dashboard() {
    return (
        <div className="min-h-screen p-4 bg-neutral-800 myborder rounded-lg">

            <DashboardTop />
            <RevenueSection />
            <ListingBoard />

        </div>
    );
}

