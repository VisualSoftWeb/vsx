import { useState } from 'react'
import { Menu, X, Cpu } from 'lucide-react'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-ai-dark/80 backdrop-blur-lg border-b border-ai-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-white font-bold text-lg">
            <Cpu className="w-6 h-6 text-ai-purple" />
            <span>VSX/AI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-ai-purple transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contato" className="bg-ai-purple hover:bg-ai-accent text-white text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-ai-purple/30">
              Solicitar Demonstração
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-ai-card border-t border-ai-border/50">
          <div className="px-4 py-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-gray-300 hover:text-ai-purple transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="block text-center bg-ai-purple hover:bg-ai-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all">
              Solicitar Demonstração
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
