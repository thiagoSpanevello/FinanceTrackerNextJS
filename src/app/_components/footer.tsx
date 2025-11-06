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
                            Sua plataforma completa para gestão financeira pessoal.
                            Controle, planeje e alcance seus objetivos.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Produto</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Recursos</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Segurança</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Atualizações</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-muted-foreground">
                    <p>© {currentYear} Finance Tracker. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;