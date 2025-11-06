import { IoWalletOutline, IoPieChartOutline, IoLockClosedOutline } from "react-icons/io5";
import { LuFileText, LuBell, LuSmartphone } from "react-icons/lu";



const features = [
    {
        icon: IoWalletOutline,
        title: "Expense Tracking",
        description: "Monitor your daily expenses with ease and gain insights into your spending habits.",
        color: "text-[#47badd]"
    },
    {
        icon: IoPieChartOutline,
        title: "Budget Management",
        description: "Create and manage budgets to help you stay on track with your financial goals.",
        color: "text-[#2cd9a0]"
    },
    {
        icon: LuFileText,
        title: "Financial Reports",
        description: "Generate detailed reports to analyze your income and expenses over time.",
        color: "text-[#47badd]"
    },
    {
        icon: LuBell,
        title: "Smart Alerts",
        description: "Receive notifications when you approach budget limits or important financial deadlines.",
        color: "text-[#2cd9a0]"
    },
    {
        icon: IoLockClosedOutline,
        title: "Security",
        description: "Your financial data is encrypted and protected with the highest security standards.",
        color: "text-[#47badd]"
    },
    {
        icon: LuSmartphone,
        title: "Acess",
        description: "Use on any device — desktop, tablet, or smartphone — with your data always synchronized.",
        color: "text-[#2cd9a0]"
    }
];

export function Features() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-8">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10"
                        >
                            <div>
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-[#47badd]/10 to-[#2cd9a0]/10 flex items-center justify-center mb-4`}>
                                    <feature.icon className={`w-6 h-6 ${console.log(feature.color), feature.color}`} />
                                </div>
                                <div className="text-xl font-semibold mb-4 ">{feature.title}</div>
                            </div>
                            <div>
                                <div className="text-base">
                                    {feature.description}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

