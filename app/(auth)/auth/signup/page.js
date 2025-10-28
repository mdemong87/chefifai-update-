"use client";

import Spiner from "@/components/ui/dashboard/Spiner";
import logo from "@/public/logo_full-Transparent.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function SignUpPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        agree: false,
    });

    async function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        if (!form.agree) {
            setIsLoading(false);
            return toast("Please accept the Terms and Privacy Policy.");
        }

        if (form.password !== form.confirm) {
            setIsLoading(false);
            return toast("Passwords do not match.");
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                }),
            });

            if (!res.ok) {
                const j = await res.json().catch(() => ({}));
                throw new Error(j?.message || "Failed to create account");
            }

            toast.success("Account created successfully!");
            setTimeout(() => router.push("/auth/signin"), 1000);
        } catch (err) {
            toast.error(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-neutral-950 text-white">
            {/* Left Side — Welcome / Brand */}
            <section className="relative hidden lg:flex items-center justify-center overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

                {/* Subtle Grid */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />

                <div className="relative z-10 text-center max-w-lg p-12">
                    <Link href="/" className="flex justify-center mb-8">
                        <Image src={logo} alt="RealEstateGPT Logo" width={150} height={150} />
                    </Link>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Create Your Account
                    </h1>
                    <p className="mt-4 text-neutral-300">
                        Join RealEstateGPT and unlock AI-powered tools for smarter property
                        analysis, investment insights, and market predictions.
                    </p>
                    <Image
                        src={'https://cdn-icons-png.flaticon.com/512/5087/5087579.png'}
                        alt="Sign up illustration"
                        width={240}
                        height={240}
                        className="mx-auto mt-10 drop-shadow-2xl"
                    />
                    <div className="mt-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-white/10 text-cyan-400 backdrop-blur">
                        <span>No credit card required</span>
                    </div>
                </div>
            </section>

            {/* Right Side — Form */}
            <section className="flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md">
                    <div className="relative rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl backdrop-blur-xl">
                        {/* Accent border top */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl" />
                        <div className="p-8">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-white">Sign Up</h2>
                                <p className="mt-2 text-sm text-neutral-400">
                                    Already have an account?{" "}
                                    <Link
                                        href="/auth/signin"
                                        className="text-cyan-400 underline-offset-4 hover:underline"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>

                            <form className="space-y-5" onSubmit={onSubmit}>
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm text-neutral-400">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Jane Doe"
                                        value={form.name}
                                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                        required
                                        className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-neutral-400">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                        required
                                        className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm text-neutral-400">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={form.password}
                                            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                                            required
                                            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((s) => !s)}
                                            className="absolute right-4 top-3 text-xs text-cyan-400 hover:text-cyan-300"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <label htmlFor="confirm" className="block mb-2 text-sm text-neutral-400">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirm"
                                            type={showConfirm ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={form.confirm}
                                            onChange={(e) => setForm((f) => ({ ...f, confirm: e.target.value }))}
                                            required
                                            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirm((s) => !s)}
                                            className="absolute right-4 top-3 text-xs text-cyan-400 hover:text-cyan-300"
                                        >
                                            {showConfirm ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-3">
                                    <input
                                        id="agree"
                                        type="checkbox"
                                        checked={form.agree}
                                        onChange={(e) => setForm((f) => ({ ...f, agree: e.target.checked }))}
                                        className="mt-0.5 h-4 w-4 rounded border-neutral-700 text-cyan-500 focus:ring-cyan-400"
                                    />
                                    <label htmlFor="agree" className="text-sm text-neutral-400">
                                        I agree to the{" "}
                                        <Link
                                            href="/terms"
                                            className="text-cyan-400 underline-offset-4 hover:underline"
                                        >
                                            Terms
                                        </Link>{" "}
                                        and{" "}
                                        <Link
                                            href="/privacy"
                                            className="text-cyan-400 underline-offset-4 hover:underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                        .
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition disabled:opacity-60"
                                >
                                    <span>{isLoading ? "Creating account..." : "Create Account"}</span>
                                    {isLoading && <Spiner />}
                                    <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-10 bg-gradient-to-r from-white to-transparent" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="mt-6 text-center text-xs text-neutral-500">
                        Protected by reCAPTCHA and subject to our{" "}
                        <Link href="/privacy" className="text-cyan-400 underline-offset-4 hover:underline">
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" className="text-cyan-400 underline-offset-4 hover:underline">
                            Terms of Service
                        </Link>
                        .
                    </p>
                </div>
            </section>
            <ToastContainer />
        </main>
    );
}
