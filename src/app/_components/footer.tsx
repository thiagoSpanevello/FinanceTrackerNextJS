import { LuTrendingUp } from "react-icons/lu";
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground/5 border-t border-border py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <LuTrendingUp className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold">Finance Tracker</span>
                        </div>
                        <p className="text-muted-foreground max-w-md">
                            Your complete platform for personal financial management.
                            Control, plan, and achieve your goals.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Prices</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Firm</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-muted-foreground">
                    <p>© {currentYear} Finance Tracker. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
''