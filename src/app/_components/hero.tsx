import Money from "../../../public/a.jpg";
import Image from 'next/image'
import Link from 'next/link'
import { SiWalletconnect } from "react-icons/si";
export function Hero() {
    return (
        <section
            className="bg-gradient-to-r from-[#02bafa] to-[#0066cc] 
        text-white relative overflow-hidden">
            <div className="container mx-auto pt-16 pb-16  px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="relative flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
                            <SiWalletconnect size={50} /> Finance Tracker
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-serif lg:text-4xl leading-10 font-bold">
                            Take Control of Your Money
                        </h2>
                        <p className="text-base lg:text-lg font-serif">
                            Track your expenses, manage your budget, and achieve your financial goals with our intuitive finance tracker. Stop guessing where your money goes. Our powerful, easy-to-use platform gives you clarity on every transaction, allowing you to create smart budgets, reduce unnecessary spending, and secure your future. Start making confident financial decisions today.
                        </p>
                        <div className="flex grid-cols-2 gap-10 pt-10">
                            <Link
                                href="/register"
                                className="w-fit bg-white px-10 py-3 text-[#02bafa] rounded-xl font-semibold flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10"
                            >
                                Get Started Free
                            </Link>

                            <Link
                                href="/login"
                                className="w-fit bg-[#02bafa] text-white px-10 py-3 rounded-xl font-semibold flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block relative pl-10 h-64 md:h-80 lg:h-96 overflow-hidden">
                        <Image
                            src={Money}
                            alt="foto de grafic de dinheiro"
                            className="object-contain rounded-lg"
                            sizes="(max-width: 768px) 0vh, 50vh"
                            fill
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>


        </section>
    );
}