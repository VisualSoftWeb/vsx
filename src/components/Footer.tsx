import { Cpu, Linkedin, Twitter, Youtube, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-ai-dark border-t border-ai-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Cpu className="w-6 h-6 text-ai-purple" />
              <span>VSX/AI</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Transformando negócios através da Inteligência Artificial. Soluções sob medida para sua empresa.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Serviços', 'Sobre', 'Soluções', 'FAQ', 'Contato'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item === 'Serviços' ? 'servicos' : item === 'Soluções' ? 'solucoes' : item.toLowerCase()}`}
                    className="text-gray-500 hover:text-ai-purple text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-ai-card border border-ai-border flex items-center justify-center text-gray-500 hover:text-ai-purple hover:border-ai-purple/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-ai-card border border-ai-border flex items-center justify-center text-gray-500 hover:text-ai-purple hover:border-ai-purple/50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-ai-card border border-ai-border flex items-center justify-center text-gray-500 hover:text-ai-purple hover:border-ai-purple/50 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-ai-card border border-ai-border flex items-center justify-center text-gray-500 hover:text-ai-purple hover:border-ai-purple/50 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-ai-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 VSX/AI. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por VSX/AI
          </p>
        </div>
      </div>
    </footer>
  )
}
