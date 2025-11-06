'use client'
import { MdEmail } from "react-icons/md";
import { TiArrowLeft } from "react-icons/ti";
import { IoLockClosedOutline } from "react-icons/io5";
import Link from 'next/link'

export default function Login() {
    return (
        <div className="min-h-screen hero-gradient flex items-center justify-center p-4">
            <div className="w-full max-w-md rounded-lg bg-gradient-to-r from-[#02bafa] to-[#2488ec]">
                <Link href="/" className="inline-flex items-center gap-2 pt-2 pl-2 text-white/80 hover:text-white mb-8 transition-colors">
                    <TiArrowLeft className="w-4 h-4 text-white/80" />
                    Back to home
                </Link>

                <div className="glass-card p-8 rounded-2xl shadow-2xl border border-white/20 animate-fade-in">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-white/90">Sign in to your account</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/90">Email</label>
                            <div className="relative">
                                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/80" />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 pl-10 text-base text-white placeholder:text-white/80 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/90">Password</label>
                            <div className="relative">
                                <IoLockClosedOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/80" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 pl-10 text-base text-white placeholder:text-white/80 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-white/70 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/10" />
                                Remember me
                            </label>
                            <a href="#" className="text-white hover:underline font-medium">
                                Forgot password?
                            </a>
                        </div>

                        <div className="pt-2">
                            <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold h-11 px-8 w-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                Sign In
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-white/70">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-white hover:underline font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}