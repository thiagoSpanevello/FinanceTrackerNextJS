import Money from "../../../public/a.jpg";
import Image from 'next/image'
export function Hero() {
    return (
        <section
            className="bg-gradient-to-r from-[#4873df] to-[#905fdc] 
        text-white relative overflow-hidden">
            <div className="container mx-auto pt-16 pb-16  px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-serif lg:text-5xl leading-10 font-bold">
                            Take Control of Your Money
                        </h1>
                        <p className="text-base lg:text-lg font-serif">
                            Track your expenses, manage your budget, and achieve your financial goals with our intuitive finance tracker. Stop guessing where your money goes. Our powerful, easy-to-use platform gives you clarity on every transaction, allowing you to create smart budgets, reduce unnecessary spending, and secure your future. Start making confident financial decisions today.
                        </p>
                        <div className="flex grid-cols-2 gap-10 pt-10">
                            <a
                                href=""
                                className="w-fit bg-[#6a74df] px-10 py-3 rounded-md font-semibold flex items-center justify-center"
                            >Get Started Free</a>

                            <a
                                href=""
                                className="w-fit bg-[#6a74df] px-5 py-3 rounded-md font-semibold flex items-center justify-center"
                            >Login</a>
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